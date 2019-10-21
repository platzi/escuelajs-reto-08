const express = require('express');
const { productsMock } = require('./utils/mocks');

function moviesApi(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/products', async function(req, res, next) {
    try {
      const products = await Promise.resolve(productsMock);

      res.status(200).json({
        data: products,
        message: 'products listed'
      })

    } catch (err) {
        next(err);
    }
  })
}

module.exports = moviesApi;