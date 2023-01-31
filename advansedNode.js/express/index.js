const express = require("express");
const app = express();

// console.log(app);
app.use(express.static(__dirname));
app.get("/message", (req, res) => {
  res.send("Hello");
});

const server = app.listen(3003, () => {
  console.log("server is runing", server.address().port);
});
