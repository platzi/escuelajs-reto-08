const express = require("express");
const path = require("path");

// //capa de mocks
const  productsMock  = require("../src/mocks/products");

function productsApi(app) {
  const router = express.Router();

  app.use("/", router);

  router.get("/", (req, res, next) => {
    try {
      let userInfo = req.header("user-agent");
      res.send(`UserInfo: ${userInfo}`);
    } catch (err) {
      next(err);
    }
  });

  router.get("/receipts", (req, res, next) => {
    try {
      let file = path.join(__dirname, "../src/assets/receipt.pdf");
      res.sendFile(file);
    } catch (err) {
      next(err);
    }
  });

  router.get("/products", (req, res, next) => {
    try {
      res.send(productsMock);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = productsApi;
