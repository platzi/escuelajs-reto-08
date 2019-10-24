const express = require("express");
const storeProducts = require("../utils/mocks/products");
const path = require("path");

function appApi(app) {
  const router = express.Router();
  app.use("/", router);

  router.get("/", async function(req, res, next) {
    try {
      let userInfo = await Promise.resolve(req.header("user-agent"));

      res.status(200).json({
        data: userInfo,
        message: "UserInfo"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/receipts", async function(req, res, next) {
    try {
      let file = await Promise.resolve(
        path.join(__dirname, "../assets/receipt.pdf")
      );

      res.sendFile(file);
      res.status(200);
    } catch (err) {
      next(err);
    }
  });

  router.get("/products", async function(req, res, next) {
    try {
      const products = await Promise.resolve(storeProducts);

      res.status(200).json({
        data: products,
        message: "Plazi Store listed"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/products/:productId", async function(req, res, next) {
    try {
      console.log(req.params);
      const productId = req.params.productId;
      const products = await Promise.resolve(
        storeProducts.filter(p => p.id == productId)
      );

      res.status(200).json({
        data: products,
        message: "product retrieved"
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = appApi;
