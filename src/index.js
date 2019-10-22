require('dotenv').config();
const express = require('express');
const app = express();
const platziProductsAPI = require('./routes/products');
port = process.env.PORT;

platziProductsAPI(app);

app.listen(port, err => {
	if (err) {
		console.error('Error: ', err);
		return;
	}
	console.log(`Listening http://localhost:${port}`);
});
