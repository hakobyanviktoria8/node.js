console.log("Lesson 7");
var http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url === "/sun" ? "Yes" : "No");
    res.end()
  })
  .listen(8080);
