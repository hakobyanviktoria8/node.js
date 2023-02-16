const express = require("express");
const http = require("http");
const app = express();

app.use("/users", (req, res) => {
  res.end("Router /users, method GETmm");
});

http.createServer(app).listen(3000);
