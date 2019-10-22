const express = require('express');
const path = require('path');
const { config } = require('../config/index');
const app = express();
const productsApi = require('./routes/products.js');

app.get('/', (req, res) => {
  let userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, 'assets/receipt.pdf');
  res.sendFile(file);
});

// Platzi products using express Router
productsApi(app);

app.listen(config.port, err => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});
