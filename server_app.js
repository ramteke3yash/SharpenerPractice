const http = require("http");

const server = http.createServer((req, res) => {
  console.log("yash");
});

server.listen(4000);
