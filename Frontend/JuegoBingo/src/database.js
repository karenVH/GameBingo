const mongoose = require('mongoose');
const { mongodb } = require('./keys');

//Coneccion de la base de datos llamado desde la Url ubicada en URI
mongoose.connect(mongodb.URI, {useNewUrlParser: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err, 'la base de datos no está conectada'));