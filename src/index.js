require('dotenv').config()

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT,
  storeProducts = require('./mocks/products'); 

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  //let storeProducts = '';
  res.status(200).json({
    data: storeProducts,
    message: 'Se listaron los productos'
  });
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});