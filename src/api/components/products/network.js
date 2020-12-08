const express = require('express');
const controller = require('./index');
const router = express.Router();

const listProducts = async (req, res) => {
   try {
      const storeProducts = await controller.list();
      console.log(storeProducts);
      res.status(200).json(storeProducts)
   } catch(err) {
      res.status(500).send({
         status: 'Internal error'
      })
   }
}

router.get('/', listProducts);

module.exports = router;