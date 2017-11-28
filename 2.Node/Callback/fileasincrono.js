var fs = require('fs');
var data = fs.readFile('/etc/passwd','utf8',function(err, datos){
    if (err) {
        console.log('Error en la lectura ' + err);
    }
    console.log(datos);
});
console.log('Fin del programa');
/*
En este caso si muestra los datos ya que la orden de mostrarlos no se ejecuta hasta que ha termiando de leerlo
pero hay que ver que el console de fin de programa se muestra antes
*/
