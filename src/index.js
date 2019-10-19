require('dotenv').config();

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.static('public'));


// app.get('/', (req, res) => {
//    res.sendFile("./index.html")
// });

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', (req, res) => {
  let storeProducts = '';
  res.json(storeProducts);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});