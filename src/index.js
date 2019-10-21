const express = require("express");
const configuration = require('./config/dev.js');
const productsApp = require('./routes/products')
const basePath = require('./routes/index')
const file = require('./routes/file')
const app = express();

const port = configuration.port;

basePath(app);
productsApp(app);
file(app)


app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});