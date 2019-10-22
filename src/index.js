const express = require('express');
const path = require('path');
const { config } = require('./config/index');
const products = require('./assets/mocks/products');

const app = express();
//const { port } = config;


console.log(config.port);
app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.status(200).sendFile(file);
});

app.get('/products', (req, res) => {
  res.status(200).json({
    data: products,
    message: "Product listed"
    });
});

app.get('/products/:id', (req, res) => {
  let id  = products[0].id;
  res.status(200).json({
    data: products[0],
    message: `product ${id} listed`
    });
});

app.post('/products', (req, res) => {
  let createProductId  = products[0].id;
  res.status(201).json({
    data: products[0],
    message: `product ${createProductId} created`
    });
});

app.put('/products/:id', (req, res) => {
  let updateProduct  = products[0].id;
  res.status(200).json({
    data: updateProduct,
    message: `product ${updateProduct} updated`
    });
});

app.delete('/products/:id', (req, res) => {
  let deletedProduct  = products[0].id;
  res.status(200).json({
    data: deletedProduct,
    message: `product ${deletedProduct} deleted`
    });
});

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});