require('dotenv').config();
const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

  const productsApi = require('../routes/index.js');

  productsApi(app);

  app.get('/', (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

console.log(`Your port is ${process.env.PORT}`);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});

