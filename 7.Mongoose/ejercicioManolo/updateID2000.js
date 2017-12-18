var Humano = require('./humanos').Humano;

Humano.update ({id : 2000}, {edad : 18}, {multi : true}, function(err, data) {
  if (err) throw err;
  console.log('Usuarios actualizados');
} );
