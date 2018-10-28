var socket;
var textID = 'textbox';

socket = io.connect('https://cryptic-scrubland-20094.herokuapp.com');

socket.on('content', get);

function get(data) {
	document.getElementById(textID).value = data
	//console.log('received:', data);
}

function post() {
	var content = document.getElementById(textID).value;
	socket.emit('content', content)
	//console.log('sent:', content);
}