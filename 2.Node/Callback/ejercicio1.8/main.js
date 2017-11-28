// debe entrar dos parametros el primero el numero que mirara cuantas veces se repite
// y el segundo sera la cadena para el ejercicio cadena.js
var estadistica = require('./estadistica');
var cadena = require('./cadena.js');

//console.log(process.argv.length);
if (process.argv.length != 4) {
    console.log("Debe entrar dos parametros el primero el numero que mirara cuantas veces se repite y el segundo sera la cadena para el ejercicio cadena.js");
    process.exit(1);
}
var coleccion = [1,2,3,4,5,6,7,8,9,21,2];
var objeto = estadistica (coleccion);
var repite = process.argv[2];
var palabra = process.argv[3];
var cadena1 = cadena (palabra);

console.log("Número de elementos: " + objeto.numeroElementos());
console.log("Número más alto: " + objeto.numeroMasAlto());
console.log("Número más bajo: " + objeto.numeroBajo());
console.log("El número " + repite + " se repite: " + objeto.repite(repite) + " veces.");
console.log("La cadena ordenada: " + objeto.ordenar());
console.log("El valor promedio de la colección es: " + objeto.promedio());

console.log("------------------------------------------------------");

console.log("Longitud de la cadena: " +palabra+ " es: " +cadena1.longitudCadena());
console.log("La cadena: " +palabra+ " ¿es un número? " +cadena1.cadenaEsNumero());
console.log("La cadena: " +palabra+ " ¿en mayúscula? " +cadena1.cadenaEnMayuscula());
console.log("La cadena: " +palabra+ " ¿al reves? " +cadena1.cadenaAlReves());
console.log("La cadena: " +palabra+ " ¿es palíndromo? " +cadena1.esPalindromo());
