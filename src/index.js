const express = require("express"),
  path = require("path"),
  env = require('node-env-file'),
  app = express(),
  fs = require('fs');

env (__dirname+'/.env.dist');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "asset/receipts.pdf");
  try {
    if(fs.existsSync(file)){
      const src = fs.createReadStream(file);
      src.pipe(res);
    }else {
      res.send('El archivo no existe');
    }
  } catch (error) {
    console.error('Error al leer el archivo');
  }
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
  console.log(`Listening http://localhost:${port}`);
});