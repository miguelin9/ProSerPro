var fs = require('fs'); //exportamos el modulo fs para leer ficheros
var coleccionPersona = require('./coleccionPersona')

module.exports = function lectura(callback) {
    var personas = [];//creamos el array de personas
    fs.readFile('datos.csv','utf8', function (err, datos){
        if (err) throw err;
        var lineas = datos.split('\n');
        for (var i = 1; i < lineas.length - 1; i++) {
            var trozo = lineas[i].split(',');
            var persona = {};//creamos una persona y la rellenamos
            persona.nombre   = trozo[0];
            persona.apellido = trozo[1];
            persona.email    = trozo[2];
            persona.sexo     = trozo[3];
            persona.edad     = parseInt(trozo[4]);
            personas.push(persona);//añadimos la persona al array personas
            //console.log(trozo);
        }
        var arrayPersonas = coleccionPersona(personas);
        var coleccionPersonasMismoSexo = arrayPersonas.personasIgualSexo('M');
        //console.log(coleccionPersonasMismoSexo);
        var coleccionPersonasMasEdad = arrayPersonas.personasMasEdad(100);
        //console.log(coleccionPersonasMasEdad);
        var personasExtremos = arrayPersonas.personasMasEdadMenos();
        //console.log(personasExtremos);
        callback(personas, coleccionPersonasMismoSexo, coleccionPersonasMasEdad, personasExtremos);
    });
}
