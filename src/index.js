const { config }  = require('./config/index');
const express = require("express"),
  path = require("path"),
  app = express()

const storeApi = require('./route/store');

storeApi(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});