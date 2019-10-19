const express = require("express"),
  path = require("path"),
  app = express();
const { config } = require('../config/index');
const { platziMock } = require('./mocks/products');


app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "./assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  
  res.json(platziMock);
});



app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});