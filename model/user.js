'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  }},
  {
    versionKey: false
});

var User = module.exports = mongoose.model('user', UserSchema);

module.exports.createUser = function(newUser, callback) {
  newUser.save(callback);
}
