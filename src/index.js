require('dotenv').config();
const { productMocks } = require('./utils/mocks/products');
const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  const file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', async (req, res, next) => {
  try {
    const products = await Promise.resolve(productMocks);
    res.status(200).json({
      data: products,
      message: 'Products listed'
    });
  } catch(err) {
    next(err)
  }
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});