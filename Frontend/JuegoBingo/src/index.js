const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash'); 

//inicializacion
const app = express();
require('./database');
require('./passport/local-auth');

//usar la libreria ejs para nuestras vistas html
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//Configuraracion de puerto
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//objeto como configuración de la sesión
app.use(session({
    secret: 'myscretsession',
    resave: false,
    saveUninitialized: false
}));
//Inicializamos Passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Mensajes usados para toda la app
app.use((req, res, next) =>{
    app.locals.signupMenssage = req.flash('signupMenssage');
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.user = req.user;
    next();
})

//Modulo de rutas
app.use('/', require('./routes/routes'));

//empezando servidor
app.listen(app.get('port'), ()=>{
    console.log('El puerto está corriendo', app.get('port'));
});