console.log("start with express framwork");

const http = require("http");
const express = require("express");

const app = express();

app.use("/about", (req, res, next) => {
  res.end("About page");
});
app.use("/", (req, res, next) => {
  res.end("Home page");
});

http.createServer(app).listen(2023);
