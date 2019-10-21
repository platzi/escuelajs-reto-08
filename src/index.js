require('dotenv').config();

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

const { config } = require('./config');
const productsApi = require('./routes');

productsApi(app);

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile();	  res.sendFile(file);
});

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});
