const { append } = require('express/lib/response');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})

//Autenticar usuario
passport.use('local-signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    //guardar usuarios asincrono
}, async (req, email, password, done) => {

    //Validación para que el email sea unico
    const user = await User.findOne({ email: email });
    //Si existe que muestre un mensaje de existente
    if (user) {
        return done(null, false, req.flash('signupMenssage', 'El correo que ingresaste ya existe, intenta con otro'))
    } else {
    //Si no existe que lo guarde 
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
}));

//Autenticación de inicio de Sesión
passport.use('local-signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    //Consultamos primeramente en la base de datos
    const user = await User.findOne({email: email});
    //Si el correo registrado no se encuentra registrado en la bases de datos
    if(!user) {
        return done(null, false, req.flash('signinMessage', 'El usuario no está registrado, intente con otro'))
    };
    //Si la contraseña ingresada no es correcta
    if(!user.comparePassword(password)){
        return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'))
    };
    return done(null, user);
}))