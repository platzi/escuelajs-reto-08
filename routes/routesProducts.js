const express = require('express');
const { productsMocks } = require('../utiles/mocks/products');

function routesProducts(app) {
  const router = express.Router();
  app.use('/products', router);

  router.get('/', async function(req, res, next) {
    try {
      const products = await Promise.resolve(productsMocks);
      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch (error) {
      next(err);
    }
  });
}

module.exports = routesProducts;
