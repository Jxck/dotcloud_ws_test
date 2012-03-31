var express = require('express')
  , io = require('socket.io')
  ;

var app = module.exports = express.createServer();

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

io = io.listen(app);

io.sockets.on('connection', function (socket) {
  console.log('connected');
  socket.on('msg send', function (msg) {
    socket.emit('msg push', msg);
    socket.broadcast.emit('msg push', msg);
  });
  socket.on('disconnect', function() {
    console.log('disconnected');
  });
});

app.listen(8080);
