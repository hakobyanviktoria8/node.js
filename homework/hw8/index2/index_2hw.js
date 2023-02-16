const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send(`Method GET, ${new Date().getMinutes()}`);
});

app.post("/users", (req, res) => {
  res.send("Method POST");
});

app.put("/users", (req, res) => {
  res.send("Method PUT");
});

app.delete("/users", (req, res) => {
  res.send("Method DELETE");
});

app.listen(3003, () => {
  console.log(`Example app listening on port`);
});
