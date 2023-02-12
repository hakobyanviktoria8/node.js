const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // res.send("Node.js Express Tutorial by TUTORIALKART");
  res.write("Hello again. ");
  res.end("End");
});

app.listen(8000);
