var request = require('request');
var status = undefined;

request ('http://google.com' , function(error, response, body) {
    if (!error && response.statusCode === 200) {
        status = response.statusCode;
    }
});

console.log(status);
console.log('fin de programa');
//para que funcione este modulo instalamos npm install request
// el código es correcto pero al ser un proceso bloqueante
// cuando se ejecuta el log status esta undifined.
