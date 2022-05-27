const express = require('express');
const router = express.Router();
const passport = require('passport'); 


//
router.get('/', (req,res,next) =>{
    res.render('index');
});

//Envia una ventana para el registro de usuario
router.get('/signup', (req,res, next) =>{
    res.render('signup');
});
// Aquí validamos los datos enviados por el registro de usuario
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

//Envia una ventana para el inicio de usuario
router.get('/signin', (req,res, next) =>{
    res.render('signin'); 
});
// Aquí validamos los datos enviados por el inicio de usuario
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

//Para cerrar sesion
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.get('/profile', isAuthenticated,(req, res, next) => {
    res.render('profile');
});
//middelware para que al cerrar sesion, no permita acceder sin poner usuario y contraseña
function isAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
};

router.get('/profile', (req,res,next)=>{
    res.render('profile')
})

module.exports = router;
