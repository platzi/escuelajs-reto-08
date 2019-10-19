const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

require('dotenv').config();
const products = require('./mocks/products.json');
const users = require('./mocks/users.json')


console.log(process.env.DB_HOST)
app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = products;
  res.json(storeProducts);
});

app.get('/users', (req, res) => {
  let storeUsers = users;
  res.json(storeUsers);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});