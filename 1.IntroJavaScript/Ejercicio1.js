//comprovamos que exista un parametro mínimo (aparte de node y el archivo) *programación segura
if (process.argv.length < 3){
	process.exit(1);//para salir del programa
}
console.log("Cadena leída: " + process.argv[2]); //mostramos el argumento

const cadena = process.argv[2]; //se crea constante para no poder modificarla

function procesarCadena (valorCadena){ //es un cierre (clousure)
	//todo lo que defino aquí es privado
	var _cadena = valorCadena;// variable local
	
	return{
		longitudCadena    : function() {return _cadena.length;},//ponemos coma para seguir poniendo funciones
		cadenaEsNumero    : function() {return !isNaN(_cadena);},
		cadenaEnMayuscula : function() {return _cadena.toUpperCase();},
		cadenaAlReves     : function() {return _cadena.split("").reverse().join("");},
		esPalindromo      : function() {return _cadena === this.cadenaAlReves()}
	};
}

const cadena1 = procesarCadena(cadena);//defino un objeto

console.log("Longitud de la cadena: " +cadena+ " es: " +cadena1.longitudCadena());
console.log("La cadena: " +cadena+ " ¿es un número? " +cadena1.cadenaEsNumero());
console.log("La cadena: " +cadena+ " ¿en mayúscula? " +cadena1.cadenaEnMayuscula());
console.log("La cadena: " +cadena+ " ¿al reves? " +cadena1.cadenaAlReves());
console.log("La cadena: " +cadena+ " ¿es palíndromo? " +cadena1.esPalindromo());
