const express = require('express');
const path = require('path');
const { productsMock }= require('../utils/mocks/products.js');

function platziStoreApi (app){
  const router = express.Router();
  app.use("/", router);

  router.get("/products", async function(req, res, next){
    try{
      const products = await Promise.resolve(productsMock)
      res.status(200).json({
        data: products,
        message: "Products listed"
      })
    }catch(err){
      next(err);
    }
  })

  router.get("/products/:productId", async function(req, res, next){
    try{
      const product = await Promise.resolve(productsMock[0])
      res.status(200).json({
        data: product,
        message: "Product retrieved"
      })
    }catch(err){
      next(err);
    }
  })

  router.get("/receipts", async function(req, res, next){
    try{
      let file = path.join(__dirname, "../src/assets/receipt.pdf");
      res.sendFile(file);
    }catch(err){
      next(err);
    }
  })

  router.get("/", async function(req, res, next){
    try{
      let userInfo = req.header("user-agent");
      res.send(`UserInfo: ${userInfo}`);
    }catch(err){
      next(err);
    }
  })
}
module.exports = platziStoreApi;