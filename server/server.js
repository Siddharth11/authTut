const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');

// create the server
const app = express();

// add & configure middleware
app.use(
  session({
    genid: req => {
      console.log('Inside the session middleware');
      console.log(req.sessionID);
      return uuid(); // use UUIDs for session IDs
    },
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
);

// create the homepage route at '/'
app.get('/', (req, res) => {
  console.log('Inside the homepage callback function');
  console.log(req.sessionID);
  res.send(`You hit home page!\n`);
});

// tell the server what port to listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
