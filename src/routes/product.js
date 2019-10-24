const express = require('express')

const products = require('../muckup/products')

const productsApp = (app) => {
  const router = express.Router();
  app.use("/products", router)
  router.get('/', (req, res) => {
    res.status(200).json(products)
  })
}

module.exports = productsApp;