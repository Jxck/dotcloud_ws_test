var socket = io.connect();

socket.on('connect', function() {
  console.log('connected');
  console.log('transport is', socket.socket.transport);
  socket.emit('msg send', 'data');
  socket.on('msg push', function (msg) {
    console.log(msg);
  });
});
