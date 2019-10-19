const express = require("express"),
  path = require("path"),
  app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const productsApi = require('./routes/products.js');

productsApi(app);

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});

