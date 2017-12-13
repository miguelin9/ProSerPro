module.exports = function(app){
    var userControl = require('../controlador/usersControlador');

    app.route('/app/users')
        .get(userControl.listarTodosUsers);

};
