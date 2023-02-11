const fs = require("fs");
const { EventEmitter } = require("events");

const readable = fs.createReadStream("user.json");
readable
  .on("data", (chunk) => {
    console.log(chunk.toString());
  })
  .emit("data", "hi");

const customEvent = new EventEmitter();
// customEvent
//   .on("start", () => {
//     console.log("start 1");
//   })
//   .on("start", (n) => {
//     console.log("start 2", n);
//   })
//   .emit("start", 2);

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     console.log("Request for " + req.method + " received.");

//     // Print the name of the file for which request is made.
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(`<form action="/" method="Post">
//         <textarea name="content" id="" cols="30" rows="10"></textarea>
//         <input type="submit" name="" >
//     </form>`);
//   })
//   .listen(3000);
