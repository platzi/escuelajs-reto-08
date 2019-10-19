const express = require('express');
const path = require("path");
const storeProducts = require('../storeProducts');

function myRoutes(app) {
    const router = express.Router()
    app.use('/', router)

    router.get('/', (req, res) => {
        let userInfo = req.header("user-agent");
        res.send(`UserInfo: ${userInfo}`);
    });
    
    router.get('/receipts', (req, res) => {
        let file = path.join(__dirname, "../assets/receipt.pdf");
        res.sendFile(file);
    });
    
    router.get('/products', (req, res) => {
        res.json({storeProducts});
    });
};

module.exports = myRoutes;