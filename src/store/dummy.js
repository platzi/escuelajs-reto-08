const db = {
   "products": [
      {
         id: "1",
         productName: "Camiseta",
         color: "Negro",
         talla: "L"
      },
      {
         id: "2",
         productName: "Jean",
         color: "Café",
         talla: "32"
      },
      {
         id: "3",
         productName: "Chaqueta",
         color: "Roja",
         talla: "L"
      },
      {
         id: "4",
         productName: "Gorra",
         color: "Gris",
         talla: "M"
      },
      {
         id: "5",
         productName: "Esqueleto",
         color: "Negro",
         talla: "L"
      },
      {
         id: "6",
         productName: "Pantaloneta",
         color: "Negro",
         talla: "32"
      }
   ]
};

const list = async table => {
   return db[table] || [];
}

module.exports = {
   list,
}