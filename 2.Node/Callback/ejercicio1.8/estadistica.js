// Creamos un cloesure exportable
module.exports = function estadistica (coleccion) {
    var _coleccion = coleccion;

    return {
        numeroElementos:    function () { return _coleccion.length;},
        numeroMasAlto:      function () {
            var numeroAlto = _coleccion[0];
            // comprobar que el array tenga más de un valor para poder comparar
            // si es asi recorremos el array y si hay alguno mayor
            // la variable se queda con el valor
            if (_coleccion.length > 1) {
                for (var i = 0; i < _coleccion.length; i++) {
                    if (_coleccion[i] > numeroAlto) {
                        numeroAlto = _coleccion[i];
                    }
                }
            }
            return numeroAlto;
        },
        numeroBajo : function () {
            var numeroBajo = _coleccion[0];
            if (_coleccion.length > 1) {
                for (var i = 0; i < _coleccion.length; i++) {
                    if (_coleccion[i] < numeroBajo) {
                        numeroBajo = _coleccion[i];
                    }
                }

            }
            return numeroBajo;
        },
        repite : function (num) {
            var contador = 0;
            for (var i = 0; i < _coleccion.length; i++) {
                if (_coleccion[i] == num) {
                    contador++;
                }
            }
            return contador;
        },
        ordenar  : function () { return _coleccion.sort((a, b) => a - b ); },//a partir de aquí la coleccion esta cambiado cada vez que se llame ya que sort es mutante
        promedio : function () {
            var sum = _coleccion.reduce((previous, current) => current += previous);
            return sum/_coleccion.length;
        }

    }
}
