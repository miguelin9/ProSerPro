function suma (sumando1, sumando2, callback){
    setTimeout (function(){
        var resultado = sumando1 + sumando2;
        callback (resultado);
    }, 500); // setTimeOut por definicion tiene una funcion como parametro y un tiempo de espera

}

var resultado = suma(2,3, function(datos){
    console.log(datos);
});

console.log('fin del programa');

// forma asincrona
// siempre muestra primero el fin del programa por que lo de antes es un proceso bloqueante
