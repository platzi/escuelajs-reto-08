const express = require('express')
const ProductService = require('../services/product.services')
const router = express.Router()
const productServices = new ProductService()

router.get('/', async (req,res, next) => {
        try{
            const products = await productServices.getProducts()
            res.status(200).json(products)

        }catch(err){
            next(err)
        }
    })
    .get('/:productid', async (req, res, next) => {
        try{
            const { productid } = req.params

            if(!productid) throw new Error('No se indicó el id del producto')

            const product = await productServices.getProductById(productid)
            res.status(200).json(product)

        }catch(err){
            next(err)       
        }
    })
    
module.exports = router