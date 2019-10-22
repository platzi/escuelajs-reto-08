const express = require("express");
const { productsMock } = require("../utils/mocks/MOCK_DATA")

const productsApi = app => {

    const router = express.Router();
    app.use("/api/products", router)

    router.get("/", async function (req, res, next) {

        try {
            const products = await Promise.resolve(productsMock)
            res.status(200).json({
                data: products
            })
        } catch (err) {
            next(err)
        }
    });
}

module.exports = productsApi;