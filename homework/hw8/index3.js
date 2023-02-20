const express = require("express");

const app = express();
//First middleware before response is sent
app.use(function (req, res, next) {
  console.log("Start");
  next();
});

//Route handler
app.get("/", function (req, res, next) {
  res.send("Middle");
  console.log("middle");
  next();
});
app.get("/comment", function (req, res, next) {
  res.send("Middle comment");
  console.log("middle comment");
  next();
});
app.get("/comment/:id", function (req, res, next) {
  res.send("Middle comment");
  console.log("middle comment", req.params.id);
  next();
});

app.use("/", function (req, res) {
  console.log("End");
});

app.listen(3000, () => {
  console.log("Done");
});
