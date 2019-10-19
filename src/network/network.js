const express = require('express');
const response = require('./response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getProducts().then((result) => {
    response.success(req, res, 200, '', result);
  }).catch((error) => {
    response.error(req, res, error.message);
  });
});

router.post('/', (req, res) => {
  controller.addProduct(req.body).then((data) => {
    response.success(req, res, 201, 'product saved correctly', data);
  }).catch((error) => {
    response.error(req, res, 400, error.message);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  controller.removeProduc(id).then((data) => {
    response.success(req, res, 204, 'product deleted correctly', data);
  }).catch((error) => {
    response.error(req, res, 400, error.message);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  
  controller.findProductById(id).then((data) => {
    response.success(req, res, 200, '', data);
  }).catch((error) => {
    response.error(req, res, 400, error.message);
  });
});

router.patch('/:id', (req, res) => {
  const product = req.body;
  const id = req.params.id;
  controller.update(id, product).then((data) => {
    response.success(req, res, 200, '', data);
  }).catch((error) => {
    response.error(req, res, 400, error.message);
  });
});

module.exports = router;
