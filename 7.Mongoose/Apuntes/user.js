// exportamos el modulo
var mongoose = require('mongoose');

// creamos la conexión a la base de datos
var db = mongoose.connect('mongodb://localhost/ejercicio');

// creamos el schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id         : Number,
    first_name : String,
    last_name  : String,
    email      : String
});

// pasamos la collection de la DDBB y el Schema
var User = mongoose.model('Users', userSchema);

// exportamos para poder usarlo fuera
module.exports.User = User;
module.exports.db   = db;
