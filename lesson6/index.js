const http = require("http");
const https = require("https");
const url = require("url");

const server = http.createServer((req, res) => {
  // res.end(req.url);
  for (const key in req.headers) {
    // console.log(key, req.headers[key]);
  }
  const urlData = url.parse(req.url, true);
  console.log(urlData.query.user);
  //[Object: null prototype] { user: 'Viki', age: '33', ishappy: 'true' }
  console.log(urlData.query.user); //Viki
  res.end(req.method);
});

server.listen("3000");
