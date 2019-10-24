const dontenv= require('dotenv');
dontenv.config();
const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (req, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

const { productsMock } = require('../utils/mocks/products');
function productsApi(app){
    const router = express.Router();
    app.use('/api/products', router);

    router.get('/', async function (req, res,next) {
        try
        {
            const products = await Promise.resolve(productsMock);
            res.status(200).json({
                data: products,
                message:'products listed'
            });
        }catch(err){
            next(err);
        }
      });
}

productsApi(app);


app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});