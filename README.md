## Todo List Advanced - API Side
### Requiere
- npm 10.8.1
- node v22.3.0
- mysql server 8.4

### Probado en 
Windows 10 Pro Versión	10.0.19045 compilación 19045

## Descripcion
Desarrollar una aplicación web avanzada de TODO List con autenticación de
usuarios, gestión de tareas, y funcionalidades avanzadas.

## Descripcion de environment
- APP_PORT: puerto en que se ejecutara el proyecto; por ejemplo 3000
- MYSQL_HOST: host de mysql; por ejemplo localhost
- MYSQL_PORT: puerto en que se ejecuta mysql: 3306
- MYSQL_USER: usuario con el que se conecta mysql; por ejemplo root
- MYSQL_PASSWORD: contraseña del usuario de mysql
- MYSQL_DATABASE: base de datos del proyecto
- JWT_KEY: token de jwt
- MAIL_HOST= servidor de correos
- MAIL_PORT= puerto del servidor de correos
- MAIL_USERNAME= usuario del servidor de correos
- MAIL_PASSWORD= password del servidor de correos
- MAIL_FROM_ADDRESS= correo con el que el usuario recibe el correo

## Installacion
- Primero crea la base de datos en mysql

```CREATE DATABASE `todo_list` /*!40100 COLLATE 'utf8mb4_general_ci' */```

- luego en la raiz del proyecto ejecuta ```npm run start``` para iniciar el proyecto
<small><br><b>Importante:</b> la primera vez que se ejecute va a crear las tablas y las relaciones en caso de no existir</small>

## Endpoints
se comparte la url que contiene los endpoints relacionado a la API
#### da clic [aqui](https://www.postman.com/azaelterminallogistics/workspace/public-todo-list/collection/36454749-2db06f40-5d13-4c5c-922a-2edd4f4e82e9)