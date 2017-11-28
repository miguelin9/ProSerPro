/*var cadena = "hola que tal";
console.log("¿Es un número?")
if(isNaN(cadena)){
	console.log("\tNo");
	var reves = "";
	for(i = cadena.length; i>=0; i--){
		reves+=cadena.charAt(i);
	}
	console.log("La cadena al reves:");
	console.log("\t"+reves);

	console.log("Número de caracteres de la cadena:");
	console.log("\t"+cadena.length);

	console.log("La cadena en mayúscula:");
	console.log("\t"+cadena.toUpperCase());

	console.log("Es palíndromo:");
	if(cadena==reves){
		console.log("\tSi");
	}else{
		console.log("\tNo");
	}
}else{
	console.log("\tSi");
}
*/

//Coge los argumentos y los muestra, en javaScript empieza por el argumento 2 ya que cuenta node y el archivo.
/*
for(var i = 0; i < process.argv.length; i++){
	console.log("Argumento " + i + ": " + process.argv[i]);
}
*/

//comprovamos que exista un parametro mínimo (aparte de node y el archivo)
if (process.argv.length < 3){
	console.log("Falta argumento");
	process.exit(1);//para salir del programa se puede ver desde terminal con echo $?
}
console.log("NIF/DNI introducido: " + process.argv[2]); //mostramos el argumento

const dni = process.argv[2];

function procesarDni (valorDni){
	//todo lo que defino aquí es privado
	var dni = valorDni;
  	var expresion_regular_dni = /^\d{8}$/;//dni
	var expresion_regular_nif = /^\d{8}[a-zA-Z]?$/;//nif

	return{
		isCorrecto : function(){
			if(expresion_regular_dni.test(dni) == true || expresion_regular_nif.test(dni) == true){
				return true;
			}else{
				return false;
			}
		},
		whatIs : function(){
			if(expresion_regular_dni.test(dni) == true){
				cadena="TRWAGMYFPDXBNJZSQVHLCKET";
				posicion = dni % 23;
				letra = cadena.substring(posicion,posicion+1);
				return "Es un DNI \nSu letra sería: "+letra;
			}
			if(expresion_regular_nif.test(dni) == true){
				numero = dni.substr(0,dni.length-1);
				letra = dni.substr(dni.length-1,1);
				numero = numero % 23;
				cadena='TRWAGMYFPDXBNJZSQVHLCKET';
				correcto=cadena.substring(numero,numero+1);
				if (correcto!=letra.toUpperCase()) {
				   return "Es un NIF pero la letra no es valida."
				 }else{
				   return "Es un NIF valido."
				 }
				return "Es un NIF";
			}
			return "Ninguno";
		}
	};
}

var dni1 = procesarDni(dni);
console.log("Es correcto: " +dni1.isCorrecto());
console.log("DNI ó NIF: " +dni1.whatIs());
