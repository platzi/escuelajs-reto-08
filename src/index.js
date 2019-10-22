const express = require('express');
const app = express();
const { config } = require('../config/index');
const productApi = require('../routes/products');

productApi(app);

app.listen(config.port, err => {
	if (err) {
		console.error('Error: ', err);
		return;
	}
	console.log(`Listening http://localhost:${config.port}`);
});
