const express = require('express');
const path = require('path');
const ProductsService = require('../services/products');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);

  const productsService = new ProductsService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;

    try {
      const products = await productsService.getProducts({ tags });
      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/receipts', async function(req, res, next) {
    try {
      const file = path.join(__dirname, 'assets/receipt.pdf');
      res.sendFile(file);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = productsApi;
