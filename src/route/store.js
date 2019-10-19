const express = require("express");
const storeMocks = require("../assets/utils/mocks/store");

const storeApi = app => {
  const router = express.Router();
  app.use("/api/store", router);

  router.get("/", (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

  router.get("/receipts", (req, res) => {
    let file = path.join(__dirname, "assets/receipt.pdf");
    res.sendFile(file);
  });

  router.get("/products", (req, res) => {
    let storeProducts = storeMocks;
    res.json(storeProducts);
  });
};

module.exports = storeApi;
