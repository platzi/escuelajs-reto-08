const { productsMock } = require('../utils/mocks/products');

class ProductsService {
  async getProducts() {
    const products = await Promise.resolve(productsMock);
    return products || [];
  }
}

module.exports = ProductsService;
