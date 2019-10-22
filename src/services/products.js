const products = require("../mocks/products");
const mocks = products;

class ProductServices {
  getProducts = async () => {
    const products = await Promise.resolve(mocks);
    return products || [];
  };

  getProduct = async productId => {
    const product = await Promise.resolve(mocks[0]);
    return product || {};
  };

  createProduct = async () => {
    const productId = await Promise.resolve(mocks[0].id);
    return productId;
  };

  updateProduct = async () => {
    const productId = await Promise.resolve(mocks[0].id);
    return productId;
  };

  deleteProduct = async () => {
    const productId = await Promise.resolve(mocks[0].id);
    return productId;
  };
}

module.exports = ProductServices;
