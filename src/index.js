require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const { config } = require('./config');
const productsApi = require('./routes/products');

app.get('/', (req, res) => {
  let userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, 'assets/receipt.pdf');
  res.sendFile(file);
});

productsApi();

app.listen(port, err => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});