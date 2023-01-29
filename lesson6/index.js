const http = require("http");
const https = require("https");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");
const { Readable } = require("stream");

const server = http.createServer((req, res) => {
  // res.end(req.url);
  for (const key in req.headers) {
    // console.log(key, req.headers[key]);
  }
  const urlData = url.parse(req.url, true);
  // console.log(1111, urlData);
  // console.log(2222, urlData.query);
  // console.log(3333, urlData.query.user);
  //[Object: null prototype] { user: 'Viki', age: '33', ishappy: 'true' }
  // console.log(urlData.query.user); //Viki

  const qs = querystring.parse("years=2023&months=01");
  // console.log(qs);   //[Object: null prototype] { years: '2023', months: '01' }

  // res.statusCode = 404;

  // readimage data then write res
  // fs.createReadStream("./img.jpg", { highWaterMark: 2 }).on("data", (chunk) => {
  //   res.write(chunk);
  // });

  // res.end(req.method);

  const readable = new Readable({
    read(size) {
      this.push("reading data");
      this.push(null);
    },
  });

  readable.pipe(res);
});

server.listen("3000");
