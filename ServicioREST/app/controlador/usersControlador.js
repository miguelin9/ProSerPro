var mongoose = require('mongoose');

var User = mongoose.model('Users');

exports.listarTodosUsers = function(req, res){
    User.find({}, function(err, datos){
        if (err) res.send(err);
        res.json(datos);
    });
};

exports.crearUser = function(req, res){
    var new_user = new User(req.body);
    new_user.save(function(err, datos){
        if (err) res.send(err);
        res.json(datos);
    });
};

exports.leerUser = function(req, res){
    User.find({id:req.params.id}, function(err, datos){
        if (err) res.send(err);
        res.json(datos);
    });
};
//comprobar que no exista el id o el email, con un if
//con el req.params y req.body
exports.actualizarUser = function(req, res){
    User.findOneAndUpdate({id:req.params.id}, req.body, {new:true}, function(err, datos){
        if (err) res.send(err);
        res.json(datos);
    });
};

exports.borrarUser = function(req, res){
    User.remove({id:req.params.id}, function(err, datos){
        if (err) res.send(err);
        res.json({ message: 'Usuario eliminado correctamente'});
    });
};
