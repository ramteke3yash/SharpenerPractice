const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    // Handle the POST request and send a response
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1>");
    res.write("</body></html>");
    return res.end();
  }

  // Handle other URLs
  if (url === "/home") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome home");
    return res.end();
  }

  if (url === "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to About Us page");
    return res.end();
  }

  if (url === "/node") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to my Node Js project");
    return res.end();
  }

  // // Return a 404 response for unrecognized URLs
  // res.statusCode = 404;
  // res.setHeader("Content-Type", "text/plain");
  // res.write("Not Found");
  // res.end();
});

server.listen(3000);
