const express = require("express");
const path = require("path");
const { config } = require('../config/index');
const app = express();

const productApi = require('../routes/productos.js');

const port = config.port || 3000;

productApi(app);



app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
