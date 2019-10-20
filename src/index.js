const { config } = require('./config');
const express = require("express"),
  port = config.port;

app = express();
const productsRoutes = require('./routes/products');
productsRoutes(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});