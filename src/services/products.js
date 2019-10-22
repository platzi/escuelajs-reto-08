const { platziStoreProducts } = require('../utils/mocks/index');

class ProductsService {
	async getProducts() {
		const products = await Promise.resolve(platziStoreProducts);
		return products || [];
	}
}

module.exports = ProductsService;
