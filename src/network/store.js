let products = [
  {
    "id":"1",
    "product":"Camiseta",
    "price":"25",
    "image":"https://arepa.s3.amazonaws.com/camiseta.png",
    "description":"Esta es una camiseta que vende Platzi"
},
{
    "id":"2",
    "product":"Mug",
    "price":"10",
    "image":"https://arepa.s3.amazonaws.com/mug.png",
    "description":"Esta es un Mug que vende Platzi"
},
{
    "id":"3",
    "product":"Pin",
    "price":"4",
    "image":"https://arepa.s3.amazonaws.com/pin.png",
    "description":"Esta es una camiseta que vende Platzi"
},
{
    "id":"4",
    "product":"Stikers",
    "price":"2",
    "image":"https://arepa.s3.amazonaws.com/stickers1.png",
    "description":"Esta es un stiker que vende Platzi"
},
{
    "id":"5",
    "product":"Camiseta",
    "price":"25",
    "image":"https://arepa.s3.amazonaws.com/camiseta.png",
    "description":"Esta es una camiseta que vende Platzi"
},
{
    "id":"6",
    "product":"Camiseta",
    "price":"25",
    "image":"https://arepa.s3.amazonaws.com/camiseta.png",
    "description":"Esta es una camiseta que vende Platzi"
}
];

const getProducts = () => products;

const addProduct = (product) => {
  products.push(product);
};

const removeProduct = (id) => {
  products = products.filter( product => product.id !== id);
};

const findProductById = (id) => (products.filter( product => product.id === id));

const update = (id, product) => {  
  const productToUpdate = products.find( p => p.id === id);
  product.id = productToUpdate.id;
  removeProduct(id);
  addProduct(product);

  return product;
};

module.exports = {
  'getProducts': getProducts,
  'addProduct': addProduct,
  'removeProduct': removeProduct,
  'findProductById': findProductById,
  'update': update
}