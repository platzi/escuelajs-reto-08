const express = require('express');
const app = express();

const { config } = require('./src/config/index');
const productsApi = require('./src/routes/products.js');

productsApi(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});
