// como un import en java se usa el require y se vuelca a una variable
var fs = require('fs');
// con esa libreria podemos leer un fichero
var data = fs.readFile('/etc/passwd');
console.log(data);
console.log('fin del programa');
/*
En este caso node manda a un hilo a leer el archivo y el programa sigue por lo que sale que data es undefined
ya que no ha terminado de leerlo para solucionar eso usamos las callback
*/
