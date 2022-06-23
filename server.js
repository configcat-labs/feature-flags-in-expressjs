const express = require('express')
const path = require('path');

// Require the ConfigCat NodeJS client SDK package we've installed
const configcat = require("configcat-node");

// Initialize the client using your SDK key:
let configCatClient = configcat.createClient("YOUR_CONFIGCAT_SDK_KEY");

const app = express()
const port = 3000

app.use(express.static('public'))

// Pages

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
})

// Top Matches
app.get('/top-matches', async(req, res) => {

  // Create a variable to store the state of the feature flag from ConfigCat.
  // This variable will be automatically updated every 60 seconds by default.
  const canshowtopmatches = await configCatClient.getValueAsync("canshowtopmatches",  false);

  if (canshowtopmatches) {
    res.sendFile(path.join(__dirname, 'pages/top-matches.html'));
  } else {
    res.sendFile(path.join(__dirname, 'pages/not-available.html'));
  }
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})