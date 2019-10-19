const express = require('express');
const path = require('path');
const { productsMock } = require('../utils/mocks/products');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);

  router.get('/', async function(req, res, next) {
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

  router.get('/receipts', (req, res) => {
    const file = path.join(__dirname, 'assets/receipt.pdf');
    res.sendFile(file);
  });
}

module.exports = productsApi;
