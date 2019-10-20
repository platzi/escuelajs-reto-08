const productsMock = require('../utils/productsMock');

class ProductService {
  async getProducts() {
    const products = await Promise.resolve(productsMock.products);
    return products || [];
  }

  async getProduct(id) {
    const product = await Promise.resolve(productsMock.products.filter(item => item.id === id.productId));
    return product || {};
  }

  async createProduct() {
    const createProductId = await Promise.resolve(productsMock.products[0].id);
    return createProductId || {};
  }

  async updateProduct(id) {
    const updatedProductId = await Promise.resolve(productsMock.products.filter(item => item.id === id.productId));
    return updatedProductId.length > 0 ? updatedProductId[0].id : {};
  }

  async deleteProduct(id) {
    const deletedProductId = await Promise.resolve(productsMock.products.filter(item => item.id === id.productId));
    return deletedProductId.length > 0 ? deletedProductId[0].id : {};
  }
}

module.exports = ProductService;