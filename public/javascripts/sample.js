var socket = io.connect();

socket.on('connect', function() {
  console.log('connected');
  socket.emit('msg send', 'data');
  socket.on('msg push', function (msg) {
    console.log(msg);
  });
});
