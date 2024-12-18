const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Add error event listener
server.on('error', err => {
  console.error('Server error:', err);
  // Add any additional error handling logic here (e.g., restarting the server)
});

server.listen(8080); 