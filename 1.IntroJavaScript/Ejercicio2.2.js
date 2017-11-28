if (process.argv.length < 3){
	console.log("Falta argumento");
	process.exit(1);//para salir del programa se puede ver desde terminal con echo $?
}
console.log("NIF/DNI introducido: " + process.argv[2]); //mostramos el argumento

// Usamos un constructor
function Documento(documento){
	this.documento = documento;
}

// Creamos los metodos con prototype
Documento.prototype.isCorrecto = function(){
	if(/^\d{8}$/.test(this.documento) == true || /^\d{8}[a-zA-Z]?$/.test(this.documento) == true){
		return true;
	}else{
		return false;
	}
}

// Otra forma de prototype
Documento.prototype = {
	whatIs : function(){
		if(/^\d{8}$/.test(dni) == true){
			cadena="TRWAGMYFPDXBNJZSQVHLCKET";
			posicion = this.documento % 23;
			letra = cadena.substring(posicion,posicion+1);
			return "Es un DNI \nSu letra sería: "+letra;
		}
		if(/^\d{8}[a-zA-Z]?$/.test(dni) == true){
			numero = this.documento.substr(0,dni.length-1);
			letra = this.documento.substr(dni.length-1,1);
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
}

var dni1 = new Documento(process.argv[2]);
console.log("Es correcto: " +dni1.isCorrecto());
console.log("DNI ó NIF: " +dni1.whatIs());
