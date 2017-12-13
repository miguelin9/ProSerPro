var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//midlewear
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//recurso GET (read)
app.get('/', function(req, res){
	res.send('Hola mundo');
});

//recurso GET con parametro id
app.get('/users/:id', function(req, res){//req=peticion res=respuesta
	var id = req.params.id;//asi recogemos el id de la peticion
	console.log('Recibido: ' + id);
	res.send('Recibido: ' + id);
});

app.post('/users/', function(req, res){
	var id = req.body.id;
	console.log('Recibido estamos en el POST: ' + id);
	res.send('Recibido: ' + id);
});

var server = app.listen(3000, function(){
	console.log('Servidor corriendo en el puerto 3000');
});
