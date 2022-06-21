const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.use(express.static('public'))

// Pages

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
})

// Top Matches
app.get('/top-matches', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/top-matches.html'));
})

// Not Available
app.get('/not-available', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/not-available.html'));
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})