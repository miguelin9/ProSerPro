var Humano = require('./humanos').Humano;

var humano = Humano({
  id : 2000,
  sexo : 'Male',
  edad : 45,
  nombre : 'Nuevo usuario'
});


humano.save(function (err) {
  if (err) throw err;
  console.log('Creado usuario nuevo con id ' + humano.id);

})
