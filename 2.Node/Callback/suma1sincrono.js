function suma (sumando1, sumando2){
    setTimeout (function(){
        var resultado = sumando1 + sumando2;
        return resultado;
    }, 500); // setTimeOut por definicion tiene una funcion como parametro y un tiempo de espera

}

var resultado = suma(2,3);
console.log(resultado);

// este caso es sincrono
