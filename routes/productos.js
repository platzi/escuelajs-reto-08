const express = require('express');
const { StateMock } = require('../src/mocks/mockProduct')
const path = require("path");


function productApi(app) {
    const router = express.Router();    
    app.use("/", router);


    router.get("/api", async function(req, res, next) {
        try {

            const productos = await Promise.resolve(StateMock);

            res.status(200).json({
                data: productos,
                messege: 'productos listados'
            });
        
        } catch (err) {
            next(err);        
        }
    });

    router.get("/receipts", (req, res, next) => {
        try {
          let file = path.join(__dirname, "../src/assets/receipt.pdf");
          res.sendFile(file);
        } catch (err) {
          next(err);
        }
    });

    router.get("/products", (req, res, next) => {
        try {
          res.send(StateMock);
        } catch (err) {
          next(err);
        }
      });

    router.get("/", (req, res, next) => {
        try {
            let userInfo = req.header("user-agent");
            res.send(`UserInfo: ${userInfo}`);
        } catch (err) {
        next(err);
    }
    });
    
}

module.exports = productApi;