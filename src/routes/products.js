const express = require('express');
const ProductsService = require('../services/products');

function productsApi(app){
    const router = express.Router();
    app.use('/products', router);

    const productsService = new ProductsService();

    router.get('/', async function(req, res, next){
        const { tags } = req.query;

        try {
            const products = await productsService.getProducts({ tags });

            res.status(200).json({
                data: products,
                message: 'products listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.get('/:productId', async function(req, res, next){
        const { productId } = req.params;
        try {
            const products = await productsService.getProduct({ productId });

            res.status(200).json({
                data: products,
                message: 'product retrieved'
            });
        } catch (err) {
            next(err);
        }
    });

    router.post('/', async function(req, res, next){
        const { body: product } = req;
        try {
            const createdProductId = await productsService.createProduct({ product });

            res.status(201).json({
                data: createdProductId,
                message: 'product created'
            });
        } catch (err) {
            next(err);
        }
    });

    router.put('/:productId', async function(req, res, next){
        const { productId } = req.params;
        const { body: product } = req;
        try {
            const updatedProductId = await productsService.updateProduct({ 
                productId,
                product 
            });

            res.status(200).json({
                data: updatedProductId,
                message: 'product update'
            });
        } catch (err) {
            next(err);
        }
    });

    router.delete('/:productId', async function(req, res, next){
        const { productId } = req.params;
        try {
            const deletedProductId = await productsService.deleteProduct({ productId });

            res.status(200).json({
                data: deletedProductId,
                message: 'product deleted'
            });
        } catch (err) {
            next(err);
        }
    });

}

module.exports = productsApi;