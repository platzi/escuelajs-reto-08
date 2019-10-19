require('dotenv').config()
const { productsMock } = require('./utils/mocks/products')
const express = require("express"),
  path = require("path"),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

app.get('/receipts', (_, res) => {
  let file = path.join(__dirname, "assets/receipt.pdf");
  res.sendFile(file);
});

app.get('/products', async (req, res, next) => {
  try {
    const products = await Promise.resolve(productsMock)
    res.status(200).json({
      data: products,
      message: 'get single product'
    })
  } catch (error) {
    next(err)
  }
});

app.get('/products/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await Promise.resolve(
      productsMock
      .find(product => product.id === parseInt(id))
    )
    res.status(200).json({
      data: product,
      message: 'get single product'
    })
  } catch (error) {
    next(err)
  }
});

app.delete('/products/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const productId = await Promise.resolve(
      productsMock
      .find(product => product.id === parseInt(id))
      .id
    )
    res.status(200).json({
      data: productId,
      message: 'product deleted'
    })
  } catch (error) {
    next(err)
  }
});

app.patch('/products/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await Promise.resolve(
      productsMock
      .find(product => product.id === parseInt(id))
    )
    res.status(200).json({
      data: product,
      message: 'product updated'
    })
  } catch (error) {
    next(err)
  }
});

app.post('/products', async (req, res, next) => {
  try {
    const product = await Promise.resolve(
      productsMock[0]
    )
    res.status(200).json({
      data: product,
      message: 'product created'
    })
  } catch (error) {
    next(err)
  }
});

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});