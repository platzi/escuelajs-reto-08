require('dotenv').config();
const express = require("express"),
  path = require("path"),
  productsMock = require("./mocks/products"),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = productsMock;
  res.json(storeProducts);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;

  const product = await Promise.resolve(productsMock[id]);
  res.json(product);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});