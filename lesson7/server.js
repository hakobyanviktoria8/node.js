const express = require("express");
const http = require("http");
const routesIndex = require("./routes/index");
const routerPosts = require("./routes/routes");

const app = express();

app.use(routesIndex);
app.use(routerPosts);

http.createServer(app).listen(2023);
