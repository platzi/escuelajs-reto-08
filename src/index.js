const express = require("express"),
  app = express(),
  storeApp = require('./route/store'),
  config = require('./config/index')

storeApp(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});