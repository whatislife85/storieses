var express = require('express');
var socket = require('socket.io');
console.log('Socket Server Running');

var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
var io = socket(server);

io.sockets.on('connection', newConn);

function newConn(socket) {
	console.log('new conn:', socket.id);
	socket.on('content', function(data) {
		socket.broadcast.emit('content', data);
		//console.log(data);
	});
};

