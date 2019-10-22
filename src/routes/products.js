const express = require('express')
const { storeProducts } = require('../utils/mocks/productsMock')

const productsApi = (app) => {
    const router = express.Router()
    app.use('/api/products', router)

    router.get('/', async function (req, res, next) {
        try {
            const products = await Promise.resolve(storeProducts)
            res.status(200).json({
                data: products,
                message: 'products listed'
            })
        } catch (err) {
            next(err)
        }
    })
}

module.exports = productsApi