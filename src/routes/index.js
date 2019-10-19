const express = require("express"),
  path = require("path"),
  { products } = require("../utils/mocks/storeProducts");

function routes(app) {
  const router = express.Router();
  app.use("/", router);

  router.get("", (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

  router.get("/receipts", (req, res) => {
    try {
      let file = path.join(__dirname, "../assets/receipt.pdf");
      res.sendFile(file);
    } catch (err) {
      console.log(new Error(err.message));
    }
  });

  router.get("/products", (req, res) => {
    res.json(products);
  });
}

module.exports = javascriptSchool;
