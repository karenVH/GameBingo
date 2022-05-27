const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;

//inicializo esquema
const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.methods.encryptPassword = (password) =>{
    /*Cuando reciba la contraseña, el modulo bcrypt lo cifra y retorna*/
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('users', userSchema);