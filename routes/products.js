const express = require('express');
const path = require("path");
const { platziMock } = require('../utils/mocks/platziMock');


function moviesApi(app) {
    const router = express.Router();
    app.use("/products", router);
    
    
    app.get('/', (req, res) => {
        let userInfo = req.header("user-agent");
        res.send(`UserInfo: ${userInfo}`);
    });

    app.get('/receipts', (req, res) => {
        let file = path.join(__dirname, "../src/assets/receipt.pdf");
        res.sendFile(file);
    });
    
    

    router.get('/', async function (req, res, next) {
        try {
            const products = await Promise.resolve(platziMock)
            res.status(200).json({
                data: products,
                message: "Productos Listados"
            })
        }
        catch (error) {
            next(error);
        }
    });

    router.get("/:productId", async function (req, res, next) {
        try {
            const id = req.params.productId;
            const productId = await Promise.resolve(platziMock.filter(item => item.id == id))
            res.status(200).json({
                data: productId,
                message: "Producto listado"
            });
        } catch (err) {
            next(error);
        }
    });
}


module.exports = moviesApi;