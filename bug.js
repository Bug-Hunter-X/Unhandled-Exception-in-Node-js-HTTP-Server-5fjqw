const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//This is a very basic example, and there is no error handling.  If you run this code without error handling, and something goes wrong like you try to access the server from a network location that is not accessible, your Node.js application will crash without a meaningful message.
//Adding an error listener will prevent the nodejs app from crashing unexpectedly. 