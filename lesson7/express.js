console.log("start with express framwork");

const http = require("http");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("log", req.query); //log { id: '2' } query ...?id=2
  //postman Body -> x-www-form-urlencoded
  console.log(req.body); //[Object: null prototype] { data: 'secret' }
  next();
});
app.use("/posts", (req, res, next) => {
  res.write("Posts page");
  next();
});
app.use("/about", (req, res, next) => {
  res.end("About page");
});
app.use("/", (req, res, next) => {
  res.end("Home page");
});

http.createServer(app).listen(2023);
