require('dotenv').config();

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT,
  ProductsMock = require('./mocks/products');

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.status(200).send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, './assets/receipt.pdf');
  res.status(200).sendFile(file);
});

app.get('/products', (req, res) => {
  res.status(200).json({
    data: ProductsMock,
    message: 'Se envian todos los productos'
  });
});

app.get('/product/:id', (req, res) => {
  let {id} = req.params;
  let dato = ProductsMock.find(item => item.id === id);
  let msg = dato ? 'OK' : 'No hay datos';

  res.status(200).json({
    data: dato,
    message: msg
  })
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
