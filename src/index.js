require("dotenv").config();

const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000,
  productsList = require("./assets/storeMock").store;

app.get("/", (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get("/receipts", (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.status(200).sendFile(file);
});

app.get("/products", (req, res) => {
  const storeProducts = productsList.products;
  storeProducts === undefined
    ? res.status(404).json([])
    : res.status(200).json(storeProducts);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const storeProductId = productsList.products.filter(item => item.id === id);
  storeProductId.length > 0
    ? res.status(200).json(storeProductId[0])
    : res.status(404).end();
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
