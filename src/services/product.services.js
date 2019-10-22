const {productMock} = require('../util/mocks/productMock')

class ProductService {

    async getProducts(){

        const products = Promise.resolve(productMock)
        return products || []
        
    }

    async getProductById(id){

        const index = productMock.findIndex( prd => prd.id == id )
        const product = Promise.resolve(productMock[ index < 0 ? 0: index ])
        return product || {}
    }

}

module.exports = ProductService