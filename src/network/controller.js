const store = require('./store');

const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    if (!product) {
      reject(new Error('Datos invalidos'));
    }
    store.addProduct(product);
    resolve(product);
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(store.getProducts());
  });
};

const removeProduc = (id) => {
  console.log('Remove product',id);
  
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('Datos no validos'));
    }
    store.removeProduct(id);
    resolve(id);
  });
};

const findProductById = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('Datos no validos'));
    }
    resolve(store.findProductById(id));
  });
}

const update = (id, product) => {
  return new Promise((resolve, reject) => {
    if (!product || !id ) {
      reject(new Error('Datos no validos'));
    }
    resolve(store.update(id, product));
  });
}

module.exports = {
  'addProduct': addProduct,
  'getProducts': getProducts,
  'removeProduc': removeProduc,
  "findProductById": findProductById,
  'update': update,
};

