const fs = require("fs");

const requestHandler = (req, res) => {
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
};

//other way to export multiple things
// module.exports = {
//   handler: requestHandler,
//   someText: "some hard coded text",
// };

// // module.exports.handler = requestHandler;
// module.exports.someText = "some hard coded text";

// exports.handler = requestHandler;
// exports.someText = "some hard coded text";

module.exports = requestHandler;

//exports = requestHandler;
