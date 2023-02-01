const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const messages = [
  { name: "Viki", message: "Hello new day" },
  { name: "Ani", message: "Hello new life" },
];

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  // console.log("body", req.body);  //body { name: 'Viktorya', message: 'Hello new shanse' }
  messages.push(req.body);
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("user connected");
});

const server = http.listen(3003, () => {
  console.log("server is runing", server.address().port); //server is runing 3003
});
