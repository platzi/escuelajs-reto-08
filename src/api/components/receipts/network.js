const express = require('express'),
   path = require("path"),
   router = express.Router()

const receipts = async (req, res) => {
   try {
      let file = path.join(__dirname, "../../../assets/receipt.pdf");
      res.sendFile(file);
   } catch(err) {
      console.log(err);
      res.status(500).send({
         status: 'Internal error'
      })
   }
}

router.get('/', receipts);

module.exports = router;