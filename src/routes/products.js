const express = require("express");
const productsMocks = require("../utils/mocks/productsMocks");
const path = require("path");

function products(app) {
  const router = express.Router();
  app.use("/", router);
  router.get("/products", (req, res, next) => {
    try {
      res.status(200).json({
        data: productsMocks,
        message: "products list"
      });
    } catch (err) {
      next(err);
    }
  });

  app.get("/receipts", (req, res, next) => {
    try {
      res.status(200);
      let file = path.join(__dirname, "../assets/receipt.pdf");
      res.sendFile(file);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = products;
