var User = require('./user.js').User;
var db   = require('./user.js').db;

var newUser = User({
    id     : 2000,
    sexo   : 'Hombre',
    edad   : 26,
    nombre : 'Miguel',
    fecha  : Date.now()
});

newUser.save(function(err, date){
    if (err) throw err;
    console.log(date);
});
//db.disconnect();
