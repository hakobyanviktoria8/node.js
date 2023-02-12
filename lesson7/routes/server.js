const express = require("express");
const http = require("http");
const router = require("./router");
const app = express();

// routeri mech app hasaneli e
router(app);

http.createServer(app).listen(2023);
