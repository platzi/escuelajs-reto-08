const express = require('express'),
  path = require("path"),
  ProductsService = require('../services/ProductService');

const productsApi = (app) => {
  const router = express.Router();
  app.use('/api/v1/products', router);
  
  const productsService = new ProductsService();

  app.get('/', (req, res) => {
    let userInfo = req.header("user-agent");
    res.send(`UserInfo: ${userInfo}`);
  });

  app.get('/receipts', (req, res) => {
    let file = path.join(__dirname, "../assets/receipt.pdf");
    res.sendFile(file);
  });

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const products = await productsService.getProducts({ tags });
      res.status(200).json({
        products: products,
        message: 'Products listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    try {
      const product = await productsService.getProduct({ productId });
      res.status(200).json({
        product: product,
        message: product.length > 0 ? 'Product retrive' : `Product ${productId} not exist`
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: product } = req;
    try {
      const createProductId = await productsService.createProduct({ product })
      res.status(201).json({
        data: createProductId,
        message: 'Product created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    try {
      const updatedProductId = await productsService.updateProduct({ product, productId })
      res.status(200).json({
        data: updatedProductId,
        message: updatedProductId.length > 0 ? 'Product updated' : `Product ${productId} not exist`
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:productId', async function(req, res, next) {
    const { productId } = req.params;
    try {
      const deletedProductId = await productsService.deleteProduct({ productId })
      res.status(200).json({
        data: deletedProductId,
        message: deletedProductId.length > 0 ? 'Product deleted' : `Product ${productId} not exist`
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = productsApi;