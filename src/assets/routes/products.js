const express = require('express')
const path = require('path')
const router = express.Router()

const { platziMock } = require('./moks')

router.get('/', async function (req, res) {
  try {
    const products = await Promise.resolve(platziMock)
    res.status(200).json({
      data: products,
      message: 'Listar productos',
    })
  } catch (error) {
    res.status(500)
  }
})

router.get('/:productId', async function (req, res, next) {
  try {
    const id = req.params.productId
    const productId = await Promise.resolve(
      platziMock.filter((item) => item.id == id)
    )
    res.status(200).json({
      data: productId,
      message: 'Producto listado',
    })
  } catch (err) {
    next(error)
  }
})

module.exports = router
