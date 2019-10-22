const express = require("express"),
  dotenv = require("dotenv").config(),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000
  productsApi = require("./routes/products.js");

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

productsApi(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});