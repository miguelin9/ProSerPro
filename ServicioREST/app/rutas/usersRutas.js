module.exports = function(app){
    var userControl = require('../controlador/usersControlador');

    app.route('/app/users')
        .get(userControl.listarTodosUsers)
        .post(userControl.crearUser);

    app.route('/app/users/:id')
        .get(userControl.leerUser)
        .put(userControl.actualizarUser)
        .delete(userControl.borrarUser);

};
