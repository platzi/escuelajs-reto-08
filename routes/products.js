const express = require('express');
const ProductsServices = require('../services/products');
const path = require('path');

function productsApi(app) {
	const router = express.Router();
	app.use('/products', router);

	const productsServices = new ProductsServices();

	app.get('/', (req, res) => {
		let userInfo = req.header('user-agent');
		res.send(`UserInfo: ${userInfo}`);
	});

	//GET
	router.get('/', async function(req, res, next) {
		const { tags } = req.query;

		try {
			const products = await productsServices.getProducts({ tags });
			res.status(200).json({
				data: products,
				message: 'products listed',
			});
		} catch (err) {
			next(err);
		}
	});

	//GET id
	router.get('/:productId', async function(req, res, next) {
		const { productId } = req.params;

		try {
			const products = await productsServices.getProduct({ productId });
			res.status(200).json({
				data: products,
				message: 'product retrieved',
			});
		} catch (err) {
			next(err);
		}
	});

	//POST
	router.post('/', async function(req, res, next) {
		const { body: product } = req;
		try {
			const createProductId = await productsServices.createMovie({ product });

			res.status(201).json({
				data: createProductId,
				message: 'product created',
			});
		} catch (err) {
			next(err);
		}
	});

	//PUT
	router.put('/:productId', async function(req, res, next) {
		const { productId } = req.params;
		const { body: movie } = req;
		try {
			const updatedProductId = await productsServices.updateMovie({
				productId,
				movie,
			});
			res.status(200).json({
				data: updatedProductId,
				message: 'product updated',
			});
		} catch (err) {
			next(err);
		}
	});

	//DELETE
	router.delete('/:productId', async function(req, res, next) {
		const { productId } = req.params;
		try {
			const deletedProductId = await productsServices.deleteMovie({
				productId,
			});
			res.status(200).json({
				data: deletedProductId,
				message: 'product deleted',
			});
		} catch (err) {
			next(err);
		}
	});

	app.get('/receipts', (req, res) => {
		let file = path.join(__dirname, '../src/assets/receipt.pdf');
		console.log(file);
		res.sendFile(file);
	});
}

module.exports = productsApi;
