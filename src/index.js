const express = require("express");
const { config } = require('./config/index.js');
const  path = require("path");
 const app = express();

const productsApi = require('./utils/mocks/products');

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file,'', (err) => {
    if (err) {
      next(err)
    } else {
      console.log('File Sent:', file)
    }
  });
});

app.get('/products', (req, res) => {
  res.json(productsApi);
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
