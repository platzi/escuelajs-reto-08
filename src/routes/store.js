const express = require('express');
const { storeMock } = require('../utils/mocks/store');

function storeApi(app) {
  const router = express.Router();
  app.use('/api/store', router);

  router.get('/', async function (req, res, next) {
    try {
      const store = await Promise.resolve(storeMock);
      res.status(200).json({
        data: store,
        message: 'products listed'
      })
    } catch (err) {
      next(err);
    }
  });

  router.get('/:productId', async function (req, res, next) {
    try {
      const store = await Promise.resolve(storeMock[0]);
      res.status(200).json({
        data: store,
        message: 'product retrieved'
      })
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const createProductId = await Promise.resolve(storeMock[0].id);
      res.status(201).json({
        data: createProductId,
        message: 'products created'
      })
    } catch (err) {
      next(err);
    }
  });

  router.put('/:productId', async function (req, res, next) {
    try {
      const updatedProductId = await Promise.resolve(storeMock[0].id);
      res.status(200).json({
        data: updatedProductId,
        message: 'product updated'
      })
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:productId', async function (req, res, next) {
    try {
      const deleteMovieId = await Promise.resolve(storeMock[0].id);
      res.status(200).json({
        data: deleteMovieId,
        message: 'product deleted'
      })
    } catch (err) {
      next(err);
    }
  });
};

module.exports = storeApi;
