const express = require("express");
  const express = require("express");
    const path = require("path");
    const configuration = require('./config/dev.js');
    const app = express();
    const port = configuration.port;
    const productsApp = require('./routes/products')
const basePath = require('./routes/index')
const file = require('./routes/file')

app.get('/', (req, res) => {
  let userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

basePath(app);
productsApp(app);
file(app)

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, './asset/receipt.pdf');
  res.sendFile();
});

app.get('/products', (req, res) => {
  let storeProducts = '';
  res.json(storeProducts);
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(process.env)
  console.log(`Listening http://localhost:${port}`);
});