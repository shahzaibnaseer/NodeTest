const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Our HomePage");
  }
});

server.listen(5000);
