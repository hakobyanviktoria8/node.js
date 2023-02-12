const express = require("express");
const routerIndex = express.Router();

routerIndex
  .route("/")
  .get((req, res) => {
    res.end("Methods GET index");
  })
  .post((req, res) => {
    res.end("Methods POST index");
  });

module.exports = routerIndex;
