const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

const productsApi = require('./routes/products.js');
const receiptsApi = require('./routes/receipts.js');

productsApi(app);
receiptsApi(app);

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});