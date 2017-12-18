var Humano = require('./humanos').Humano;

Humano.find({edad : { $lt : 18} , nombre : /^A/} ,function(err, humanos){
  if (err) throw err;
  console.log("Humanos menores que su nombre empiezan por A " + humanos.length);
});
