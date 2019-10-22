const express = require("express"),
  path = require("path"),
  app = express(),
  { config } = require('./config/index');

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "asset/receipt.pdf");
  res.sendFile();
});

app.get('/products', (req, res) => {
  let storeProducts = '';
  res.json(storeProducts);
});

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});