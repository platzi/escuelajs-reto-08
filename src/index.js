const { config } = require('./config/index')
const express = require("express"),
  path = require("path"),
  app = express(),
  port = config.port || 5000;

const productsApi = require('../routes/products.js')

//Routes
productsApi(app)

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  const debug = require('debug')('app:server');
  debug(`Listening http://localhost:${config.port}`)
  //console.log(`Listening http://localhost:${port}`);
});