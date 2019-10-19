const express = require('express'),
  path = require('path'),
  PRODUCTS_MOCK = require('../data/products');

const routesAPI = app => {
  const router = express.Router();
  app.use('/', router);
  router.get('/', (req, res) => {
    let userInfo = req.header('user-agent');
    res.send(`UserInfo: ${userInfo}`);
  });

  router.get('/receipts', (req, res) => {
    let file = path.join(__dirname, '../assets/receipt.pdf');
    res.sendFile(file);
  });

  router.get('/products', (req, res) => {
    let storeProducts = PRODUCTS_MOCK;
    res.json(storeProducts);
  });
};

module.exports = routesAPI;
