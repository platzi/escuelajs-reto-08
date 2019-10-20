# escuelajs-reto-08
Reto 8 Octubre 19: Curso de Backend con Node

## Platzi Store Backend

Ahora que tenemos Platzi Store funcionando, debemos crear el Backend que necesita nuestra aplicación, por lo tanto es necesario que terminemos las tareas faltantes.

### Instalación
```
npm install
```

### Ejecución
Para utlizar el archivo .env con las variables para la ejecución del proyecto es necesario crearlo tomando como base el archivo **.env.example** _(Este archivo no se sube al repositorio por seguridad ya que en este archivo se guardan la información de credenciales de base de datos.)_

#### Producción
```
npm run start
```

#### Modo Desarrollo
Para ejecutar el proceso en modo de desarrollo y el modo nodemon (paquete que nos ayuda a ve los cambios realizados en el proyecto en modo real)
```
npm run watch
```

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
