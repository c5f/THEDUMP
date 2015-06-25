'use strict';

var express = require('express');
var app = express();
var path = require('path');

console.log('testing');

// Client code //////////////////////////////////////
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.render('index', {title: 'THE DUMP'});
});
/////////////////////////////////////////////////////

// Service code /////////////////////////////////////
var knex = require('knex')({
	client: 'pg',
	connection: process.env.DATABASE_URL
});

var bookshelf = require('bookshelf')(knex);
app.set('bookshelf', bookshelf);

var User = bookshelf.Model.extend({
  tableName: 'users'
});

app.get('/db', function(req, res) {
  new User().fetchAll()
    .then(function(users) {
      res.send(users.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
});
////////////////////////////////////////////////////

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
