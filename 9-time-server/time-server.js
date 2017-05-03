var net = require('net');

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i;
}

function now () {
  var d = new Date();
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes());
}

var server = net.createServer(function listener(socket) {
  // socket handling logic
  socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
