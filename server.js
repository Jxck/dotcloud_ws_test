var connect = require('connect');

connect().use(function(req, res) {
  res.end('hello dotcloud :)')
}).listen(8080);
