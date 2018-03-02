var User = require('../model/user.js');

create = function(req, res, next) {
  var newUser = new User({_id: 5, name: 'Peter Quill 5'});
  User.createUser(newUser, function(err, params) {
    if (err) throw err;
    res.send(params);
  });
}

read = function (req, res, next) {
  User.find('all', function(err, params){
    if (err) throw err;
    console.log('read all user');
    res.send(params);
  });
}

update = function(req, res, next) {
  const id = req.params.id;
  User.update({_id: id}, {name: 'Trinh'}, function(err, params) {
    if (err) throw err;
    res.send(params);
  });
}

delete_user = function(req, res, next) {
  const id = req.params.id;
  User.remove({_id: id}, function(err, params) {
    if (err) throw err;
    res.send(params);
  });
}

module.exports = {
  create,
  read,
  update,
  delete_user
}
