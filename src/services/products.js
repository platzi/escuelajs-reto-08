const { productsMock } = require('../utils/mocks/productsMock');

class ProductsService {
  async getProducts() {
    const products = await Promise.resolve(productsMock);
    return products || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(productsMock[0]);
    return movie || {};
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(productsMock[0].id);
    return createMovieId;
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(productsMock[0].id);
    return updatedMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(productsMock[0].id);
    return deletedMovieId;
  }
}

module.exports = ProductsService;