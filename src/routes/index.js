const express = require('express')

const index = (app) => {
  const router = express.Router();
  app.use("/", router)
  router.get('/', (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  })
}

module.exports = index;