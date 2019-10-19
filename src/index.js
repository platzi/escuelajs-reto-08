const { config } = require('./config/index');


const { productsMock } = require('./utils/mocks/products');

const express = require("express"),
  path = require("path"),
  app = express(),
  port = config.port || 3000;

  app.get('/', async function(req, res, next) {
    try {
      const products = await Promise.resolve(productsMock);

      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch (err) {
      next(err);
    }
  });

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