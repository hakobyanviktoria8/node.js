const express = require("express");
const http = require("http");
const routesIndex = require("./routesIndex");
const routerPosts = require("./routesPosts");

const app = express();

app.use(routesIndex);
app.use(routerPosts);

http.createServer(app).listen(2023);
