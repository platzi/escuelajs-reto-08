const express = require("express");
const { productsMock } = require("../utils/mocks/products");

function productsApi (app) {
  const router = express.Router();
  app.use("/products", router);

  router.get("/", async function(req, res, next){
    try {
      const products = await Promise.resolve(productsMock)
      res.status(200).json({
        data: products,
        message: "Productos listados"
      });
    } catch(err) {
      next(error);
    }
  });

  router.get("/:productId", async function(req, res, next){
    try {
      const id = req.params.productId;
      const productId = await Promise.resolve(productsMock.filter(item => item.id == id))
      res.status(200).json({
        data: productId,
        message: "Producto listado"
      });
    } catch(err) {
      next(error);
    }
  });
}

module.exports = productsApi;