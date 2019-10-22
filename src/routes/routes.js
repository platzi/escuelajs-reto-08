const express = require('express');
const path = require("path");
const { ProductServiceMock } = require('../mocks/products.js');

function platziStore(app){
  const router = express.Router();
  app.use('/', router);

  app.get('/', (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

  app.get('/receipts', (req, res) => {
    let file = path.join(__dirname, "../assets");
    res.sendFile('receipt.pdf', { root: file });
  });

  app.get('/products', async (req, res, next) => {
    try{
      const serviceMock = new ProductServiceMock();
      let storeProducts = await serviceMock.getProducts();
      res.json(storeProducts);
    }catch(err){
      next(err)
    }
  });
}

module.exports = platziStore