const express = require('express');
const path = require("path")
const { platziStoreMock } = require('../utils/mocks/platziStoreMock.js');

const platziStoreApi = (app) => {
  const router = express.Router();
  app.use('/api/platzistore', router);

  router.get('/', (req, res) => {
    let userInfo = req.header('user-agent');
    res.send(`UserInfo: ${userInfo}`);
  });

  router.get('/receipts', (req, res) => {
    let file = path.join(__dirname, "../assets/receipt.pdf");
    res.sendFile(file);
  });

  router.get('/products', (req, res) => {
    let storeProducts = platziStoreMock;
    res.json(storeProducts);
  });

  router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = platziStoreMock.filter(item => item.id === id);
    res.json(product);

  })
};
module.exports = platziStoreApi;
