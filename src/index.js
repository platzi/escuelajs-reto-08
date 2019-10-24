const express = require("express"),
  config = require("./config/index"),
  path = require("path"),
  app = express(),
  appApi = require("./routes/app"),
  storeProducts = require("./utils/mocks/products");

port = config.port;

appApi(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
