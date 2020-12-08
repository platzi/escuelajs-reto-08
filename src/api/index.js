require("dotenv").config();
const express = require("express"),
  app = express(),
  { api } = require('../../config');
  products = require('./components/products/network');
  receipts = require('./components/receipts/network');

app.get('/api', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.use('/api/receipts', receipts);
app.use('/api/products', products);

app.listen(api.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${api.port}`);
});