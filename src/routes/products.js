const { storeProducts } = require('../mock/products');
const path = require("path");

function productsRoutes(app) {
  app.get('/', (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

  app.get('/receipts', (req, res) => {
    let file = path.join(__dirname, "../assets/receipt.pdf");
    res.sendFile(file);
  });

  app.get('/products', (req, res) => {
    res.json(storeProducts.products);
  });

  app.post('/product', (req, res) => {
    const { body: product } = req;
    res.json(storeProducts.products[1]);
  });

  app.get('/product/:id', (req, res) => {
    const { productId } = req.params;
    res.json(storeProducts.products[0]);
  });


  app.delete('/product/:id', (req, res) => {
    const { productId } = req.params;
    res.json({message: 'New product was created'});
  })
}

module.exports = productsRoutes;