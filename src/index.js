const express = require("express"),
  path = require("path"),
  app = express();

const { productsMock } = require('./utils/mocks/products');
const { config } = require('./config/index');

const productsApi = require('./routes/products.js');


// app.get('/', (req, res) => {
//   let userInfo = req.header("user-agent");
//   res.send(`UserInfo: ${userInfo}`);
// });

// app.get('/receipts', (req, res) => {
//   let file = path.join(__dirname, "./assets/receipt.pdf");
//   res.sendFile(file);
// });

// app.get('/products', (req, res) => {
//   let storeProducts = productsMock;
//   res.json(storeProducts);
// });

productsApi(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});