module.exports = function cadena(cadena) {
	var _cadena = cadena;
 	return {
		longitudCadena    : function() {return _cadena.length;},//ponemos coma para seguir poniendo funciones
		cadenaEsNumero    : function() {return !isNaN(_cadena);},
		cadenaEnMayuscula : function() {return _cadena.toUpperCase();},
		cadenaAlReves     : function() {return _cadena.split("").reverse().join("");},
		esPalindromo	  : function() {return _cadena === this.cadenaAlReves();}
	}
}
