var User = require('./user.js').User;

User.findOneAndUpdate({first_name : 'joaquín'}, {first_name : 'Joaquin'}, function(err, user){
    if (err) throw err;
    console.log(user);
});
