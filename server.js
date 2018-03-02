var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  index = require('./routes/index'),
  users = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo_test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/users', users);
app.listen(port);

console.log('users RESTful API server started on: ' + port);
