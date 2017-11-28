var lectura = require('./leerCSV');

lectura(function (datos1, datos2, datos3, datos4) {
    console.log(datos1[999]);
    console.log(datos2);
    console.log(datos3);
    console.log(datos4);
})
