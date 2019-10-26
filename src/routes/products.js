const express = require('express');
const { productsMock } = require('../utils/mocks/products');

function productsApi(app){
  const router = express.Router();
  app.use('/', router);

  router.get('/products', async function(request, response, next){
    try {
      const products = await Promise.resolve(productsMock);
      response.status(200).json({
        data: products,
        message: 'Products listed'
      })
    } catch (error) {
      next(error);
    }
  })
}

module.exports = productsApi;