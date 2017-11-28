//comprovamos que exista un parametro mínimo (aparte de node y el archivo) *programación segura
if (process.argv.length < 3){
console.log("Falta o error en argumento.");
	process.exit(1);//para salir del programa
}

//constructor
function Cadena(cadena) {
	this.cadena = cadena;
}

//añadiendo métodos con prototype
Cadena.prototype = {
	longitudCadena    : function() {return this.cadena.length;},//ponemos coma para seguir poniendo funciones
	cadenaEsNumero    : function() {return !isNaN(this.cadena);},
	cadenaEnMayuscula : function() {return this.cadena.toUpperCase();},
	cadenaAlReves     : function() {return this.cadena.split("").reverse().join("");},
};

//otra forma de añadir métodos con prototype
Cadena.prototype.esPalindromo = function(){return this.cadena === this.cadenaAlReves()};

//creamos el objeto con el argumento que le entra
var cadena1 = new Cadena(process.argv[2]);

//mostramos por pantalla
console.log("Longitud de la cadena: " +cadena1.cadena+ " es: " +cadena1.longitudCadena());
console.log("La cadena: " +cadena1.cadena+ " ¿es un número? " +cadena1.cadenaEsNumero());
console.log("La cadena: " +cadena1.cadena+ " ¿en mayúscula? " +cadena1.cadenaEnMayuscula());
console.log("La cadena: " +cadena1.cadena+ " ¿al reves? " +cadena1.cadenaAlReves());
console.log("La cadena: " +cadena1.cadena+ " ¿es palíndromo? " +cadena1.esPalindromo());

//serializamos el objeto
console.log("Vamos a serializar el objeto con JSON.stringify()");
serializar = JSON.stringify(cadena1);
console.log(serializar);

//restauramos el objeto
console.log("Vamos a restaurar el objeto con JSON.parse()");
parsear = JSON.parse(serializar);
console.log(parsear);

//creo un método para serializar
Cadena.prototype.serializar = function() {return JSON.stringify(this.cadena);};
console.log("Serializando con el método");
console.log(cadena1.serializar());
