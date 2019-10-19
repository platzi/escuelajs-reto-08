
const express = require('express');
const path = require('path');
const { config } = require('../dotenv/index');

const app = express();
const { port } = config;

app.get('/', (req, res) => {
  const userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  const file = path.join(__dirname, 'asset/receipt.pdf');
  res.sendFile();
});

app.get('/products', (req, res) => {
  const storeProducts = '';
  res.json(storeProducts);
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
