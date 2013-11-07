var io = require('socket.io').listen(2000);

io.sockets.on('connection', function (socket) {
	socket.on('message', function (data) {
		console.log(data);
		socket.broadcast.emit('messages', data);
	});
});