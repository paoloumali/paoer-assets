var express = require('express');
var app = express();

// static
app.use(express.static(__dirname + '/public'));

// error handler
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.send(500, 'Something broke!');
});

// controllers
app.get('/hello.txt', function(req, res){
	res.send('Hello World');
});

// server on port 5000
var server = app.listen(5000, function(){
	console.log('Listening on port %d', server.address().port)
});

