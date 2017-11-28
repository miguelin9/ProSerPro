var request = require('request');
var status = undefined;

function getSiteStatus(callback){
    request ('http://google.com', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            status_code = response.statusCode ;
        }
        callback(status_code);
    }) ;
}
function showStatusCode(status){
    console.log(status);
}
getSiteStatus(showStatusCode);
console.log('fin de programa');
//para que funcione este modulo instalamos npm install request
//aqui usamos callback y ya es bloqueante asincrona y funciona
