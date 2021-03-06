# feature-flags-in-expressjs
A companion repo for "How to use Feature Flags in ExpressJS".

## About this sample app

This app is a fictional dating app called **Acme Dating** built with ExpressJS.

Here is what it looks like:

![image](https://user-images.githubusercontent.com/74829200/175545478-133bd8b5-1a3a-41d6-b66d-d610004e8d69.png)

## How it works

The app has three (3) pages:

1. Home
2. Top Matches
3. Not Available

The companion article discussed the use of ConfigCat's feature flag services for feature flagging. This allowed me to render the **Top Matches page** if the Feature Flag is switched on and render the **Not Available** page if it is off.

## How to run the App

1. Clone this repository

2. Open a terminal in the root of this repo

3. Installed the required npm packages:


```bash
npm install

```

4. Start the server by running the below command. Then access the app at: [http://localhost:3000](http://localhost:3000).

```bash
node server.js

```

## Reference

**ConfigCat** also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).


Learn more about Express.js right [here](https://expressjs.com).
