const express = require('express');
const ProductsService = require('../services/products');

function productsApi(app){
  const router = express.Router();
  app.use('/', router);

  const productsService = new ProductsService();

  router.get('/products', async function(req,res,next) {
    try {
      const products = await productsService.getProducts();
      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch(err) {
      next(err);
    }
  });
}

module.exports = productsApi;