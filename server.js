var express = require('express')
var app = express()

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'THE DUMP'});
})

var server = app.listen(process.env.PORT || 5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})