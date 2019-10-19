const productNetwork = require('./network');

const routes = (server) => {
  server.use('/products', productNetwork);
};

module.exports = routes;