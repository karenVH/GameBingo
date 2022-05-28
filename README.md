# Juego Bingo- EL gran Buda
## Author
- Karen Vásquez Hernández - karen5808266@gmail.com
## Estructura del Frontend
- `juegobingo/src`: 
  - `models`: aquí está el modelo de bases de datos de mongodb para el registro de usuarios
  - `passport`:aquí está para la validación de la contraseña del usuario
  - `routes`: rutas necesarias para acceder al iniciar sesion, registrar usuario, y acceso al juego, peticiones get y post
  - `views`: vistas, de inicio de sesion con el formulario, registro de usuario  y al entrar el perfil 
  - Archivo `database`: conexión a base de datos ccon mongodb
## Tecnologia del Frontend
El frontend realizado para el usuario está hecho con las siguientes tecnologias:
- `Nodejs`
- `EJS`
- `express`
- `mongodb`
-----------
- `Visual code`

## Ejecucion del Frontend
Para arrancar el frontend puedes seguir los siguientes pasos:
1. Clonar el repositorio
2. Abrir en visual code la carpeta frontend
3. arrancar mongodb
4. conectar la base de datos en Compasmongo
5. en el proyecto de frontend ejecutar `npm start`
##
## Estructura del backend
logica del juego
- `src`: Archivos base de la app
- `controller`: aquí está la parte de la logica del juego
- `dao`: estan las consultas
- `Service`
- `gameBingo.sql`: Base de datos

## Tecnologia del Backend
- `Java`
- `Spring Boot`
- `Mysql`
---------------
- `Visual code`

## Ejecución del Backend
Para arrancar el backend puedes seguir los siguientes pasos:
1. Para que la base de datos funciones debe ejecutar en xampp el puerto de Mysql
2. Como el proyecto fue hecho en mysql, instalar las extensiones necesarias: `Mysql syntax` y `Mysql`
3. Crear una conexion en nuestro entorno de trabajo, para la base de datos y poder ejecutar el archivo .sql, encontrado en las carpetas del backend
4. Clonar el proyecto
5. abrir la carpeta del backend 
6. Por ultimo ejecutar el  proyecto spring boot
7. puedes realizar las peticiones get y post pdel juego 

##
## ¿Qué faltó? :(
  - La conexión del backend con el frontend utilizando fetch
  - logica para generar numeros aleatorios para el bingo
  - logica para sacar el ganador del juego
  - El backend en Java, sí requiere información de un usuario, el sistema deberá solicitarlo a NodeJS a través del consumo de un API.
