const { productsMock } = require('../utils/mocks/products');

class ProductsServices {
	async getProducts() {
		const products = await Promise.resolve(productsMock);
		return products || [];
	}

	async getProduct() {
		const product = await Promise.resolve(productsMock[0]);
		return product || {};
	}

	async createProduct() {
		const createProductId = await Promise.resolve(productsMock[0].id);
		return createProductId || {};
	}

	async updateProduct() {
		const updatedProductId = await Promise.resolve(productsMock[0].id);
		return updatedProductId || {};
	}

	async deleteProduct() {
		const deletedProductId = await Promise.resolve(productsMock[0].id);
		return deletedProductId || {};
	}
}

module.exports = ProductsServices;
