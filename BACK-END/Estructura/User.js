
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*encriptacion contraseña, libreria*/
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    image: { type: String },
    username: { type: String },
    name: { type: String },
    surname: { type: String },
    birthday: { type: String },
    email: { type: String },
    password: { type: String }/*para no enviar la contraseña al cliente*/
})



module.exports = mongoose.model('User', UserSchema);
