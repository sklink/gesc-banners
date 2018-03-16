var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/graphics', function(req, res){
  res.sendFile(__dirname + '/graphics.html');
});

io.on('connection', function(socket){
  socket.on('switch', function(team) {
  	console.log('Switching logos...', team);
  	io.emit('switch', team);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});