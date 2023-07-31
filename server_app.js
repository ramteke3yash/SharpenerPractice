// const http = require("http");
// const fs = require("fs");
// const { buffer } = require("stream/consumers");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === "/") {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write(
//       "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       fs.writeFileSync("message.txt", message);
//       res.statusCode = 302;
//       res.setHeader("Location", "/");
//       return res.end();
//     });
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My first Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js Server!</h1>");
//   res.write("</body></html>");
//   return res.end();
// });

// server.listen(3000);

//   // Handle other URLs
//   if (url === "/home") {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("Welcome home");
//     return res.end();
//   }

//   if (url === "/about") {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("Welcome to About Us page");
//     return res.end();
//   }

//   if (url === "/node") {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("Welcome to my Node Js project");
//     return res.end();
//   }
// });

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Message</title></head>");
    res.write("<body>");

    // Read the content of the "message.txt" file and include it in the response
    fs.readFile("message.txt", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.write("<h1>No message found.</h1>");
      } else {
        res.write(`<h1>${data}</h1>`);
      }
      res.write(
        "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
      );
      //res.write("</body></html>");
      res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
