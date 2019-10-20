# escuelajs-reto-08
Reto 8 Octubre 19: Curso de Backend con Node

## Platzi Store Backend

Ahora que tenemos Platzi Store funcionando, debemos crear el Backend que necesita nuestra aplicación, por lo tanto es necesario que terminemos las tareas faltantes.

### Instalación
```
npm install
```

### Ejecución
```
npm run start
```

Ejecutar la aplicación en modo monitor utilizando nodemon, para actualizar los cambios en el servidor sin necesidad de reiniciarlo.

```
npm run watch
```


## Documentación

### Archivo .env
En la raíz del proyecto se encuentra el archivo '.env', en el cual se configuran las variables de entorno que se van a manejar en el proyecto.

```
PORT=3000
```

### Archivo config/index.js
En la raíz del proyecto se encuentra la carpeta config y el archivo 'index.js'. Este archivo exporta un objeto con la configuración de las variables de entorno que están declaradas en el archivo '.env'. Para poder acceder a las variables de entorno definidas se hace uso del paquete de node 'dotenv'.

```javascript
require('dotenv').config();
const config = {
  port: process.env.PORT || 3001,
};
module.exports = { config };
```

### Archivo routes/platiStore.js
En la raíz del proyecto se encuentra la carpeta routes y el archivo 'platziStore.js'. Este archivo tiene el sistema de rutas para acceder a las diferentes operaciones expuestas por la api de platzistore.

```javascript
const express = require('express');
const path = require("path")
const { platziStoreMock } = require('../utils/mocks/platziStoreMock.js');

const platziStoreApi = (app) => {
  const router = express.Router();
  app.use('/api/platzistore', router);

  router.get('/', (req, res) => {
    let userInfo = req.header('user-agent');
    res.send(`UserInfo: ${userInfo}`);
  });

  router.get('/receipts', (req, res) => {
    let file = path.join(__dirname, "../assets/receipt.pdf");
    res.sendFile(file);
  });

  router.get('/products', (req, res) => {
    let storeProducts = platziStoreMock;
    res.json(storeProducts);
  });

  router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = platziStoreMock.filter(item => item.id === id);
    res.json(product);

  })
};
module.exports = platziStoreApi;
```

### Archivo index.js
En la raíz del proyecto esta el archivo index.js. En este archivo se crea el servidor de express, se inicializan las variables de entorno y se hace el llamado al API de platzistore.

```javascript
const express = require("express");
const { config } = require('./config/index');
const platziStoreApi = require('./routes/platziStore');

const port = config.port;
const app = express();

platziStoreApi(app);

app.listen(port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
  console.log(`PlatziStore API http://localhost:${port}/api/platzistore`)
});
```

### Archivo utils/mocks/platziStoreMock.js
Este archivo tiene un objeto json con los productos de Platzi Store. El archivo es utilizado como mock para las pruebas locales.


## RETO

### Primer problema

1) Crea el archivo .env en tu entorno local y añade la configuración necesaria.
2) Instala el paquete 'nodemon' para crear un monitor de tu aplicación.
3) Crea un script llamado 'watch' en tu archivo 'package.json' que ejecute nodemon.

### Segundo Problema

1) Revisa detenidamente el código de 'receipts' para encontrar los posibles errores.
2) Asegura que el archivo PDF es mostrado en el navegador.

### Tercer Problema

1) Construye un Mock de la información de los productos de Platzi Store.
2) Crea la estructura necesaria para manejar distintas rutas en Express.
3) Muestra correctamente en tu servidor de express los productos de Platzi Store.


### Enviar solución de reto
Debes de crear un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Contribuir
Si alguien quiere agregar o mejorar algo, lo invito a colaborar directamente en este repositorio: [escuelajs-reto-08](https://github.com/platzi/escuelajs-reto-08/)

### Licencia
escuelajs-reto-06 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
