const express = require('express'),
  path = require('path'),
  { config } = require('../dotenv/index'),
  { productMock } = require('./utils/mocks/products.js'),
  app = express(),
  { port } = config;


app.get('/', (req, res) => {
  const file = path.join(__dirname, 'routes/assets/receipt.pdf');
  res.status(200).sendFile(file);
});

app.get('/products', (req, res) => {
  res.status(200).json({ data: productMock, message: 'products listed' });
});

app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ data: productMock[0], message: `product ${id} listed` });
});
app.post('/products', (req, res) => {
  res.status(200).json({ data: productMock[0], message: `product ${productMock[0].id} added` });
});
app.put('/product/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ data: productMock[0], message: `product ${id} modified` });
});
app.delete('/product/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ data: productMock[0], message: `product ${id} deleted` });
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
