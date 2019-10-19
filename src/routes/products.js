const express = require('express');
const { ProductsServiceMock } = require('../utils/mocks/product');

function movie(app) {
    const router = express.Router();
    app.use('/products', router);
    const ProductsMock = new ProductsServiceMock();
    router.get('/', async (req, res) => {
        let storeProducts = await ProductsMock.getProducts();
        res.json(storeProducts);
    });
      
}

module.exports = movie;