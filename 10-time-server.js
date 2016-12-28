var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {

  var formattedDate = strftime('%F %I:%M');
  socket.end(formattedDate + "\n");

}).listen(+process.argv[2]);
