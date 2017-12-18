var Humano = require('./humanos').Humano;

Humano.remove ({id : 2000} , function(err, data) {
  if (err) throw err;
  console.log('Usuarios borrados');
} );
