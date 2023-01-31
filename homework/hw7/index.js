// if req.url === /user => log("Yes")

const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/user") {
      console.log("Yes");
    }
    res.end();
  })
  .listen(3000);
