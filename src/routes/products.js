const express = require('express');
const path = require('path');
const ProductService = require('../services/products');

function platziProductsAPI(app) {
	const router = express.Router();
	app.use('/', router);

	const productService = new ProductService();

	router.get('/products', async function(req, res, next) {
		const { tags } = req.params;
		try {
			const products = await productService.getProducts({ tags });
			res.status(200).json({
				data: products,
				message: 'products retrieved'
			});
		} catch (err) {
			next(err);
		}
	});

	router.get('/userInfo', (req, res) => {
		let userInfo = req.header('user-agent');
		res.send(`UserInfo: ${userInfo}`);
	});

	router.get('/receipts', (req, res) => {
		let file = path.join(__dirname, '../assets/receipt.pdf');
		res.sendFile(file);
		//res.sendfile('src/assets/receipt.pdf'), 'receipts.pdf';
	});
}

module.exports = platziProductsAPI;
