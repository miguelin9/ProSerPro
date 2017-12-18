var Humano = require('./humanos').Humano;

Humano.find({edad : {$gt : 98 ,  $lt : 100}} ,function(err, humanos){
  if (err) throw err;
  console.log("Humanos con mas de 98 y menos de 100 " + humanos.length);
});
