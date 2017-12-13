var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./modelo/usersModelo');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ejercicio');

var routes = require('./rutas/usersRutas');
routes(app);

var port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
