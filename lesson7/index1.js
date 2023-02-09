const http = require("http");
const url = require("url");
const fs = require("fs");

// url.parse is a old version
// http
//   .createServer((req, res) => {
//     const reqUrl = url.parse(req.url, true);
//     const qry = reqUrl.query.file;

//     console.log(qry);

//     if (qry === "text") {
//       // fs.readFile("./text.txt", (err, data) => {
//       //   err && console.log(11111, err.message);
//       //   console.log(22222222, data.toString());
//       // });
//       // or with stream
//       fs.createReadStream("./text.txt").pipe(res);
//       res.end("Success!");
//     } else {
//       res.statusCode = 404;
//       res.end("Not found!");
//     }
//   })
//   .listen(8080);

// use new URL
http
  .createServer((req, res) => {
    const reqUrl = new URL(req.url, "http://localhost:8080");
    const qry = reqUrl.searchParams.get("file");
    if (qry === "text") {
      fs.createReadStream("./text.txt").pipe(res);
    } else {
      res.statusCode = 404;
      res.end("Not found!");
    }
  })
  .listen(8080);
