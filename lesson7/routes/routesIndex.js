const express = require("express");
const routerIndex = express.Router();

routerIndex
  .route("/")
  .get((req, res) => {
    res.end("Methods GET, Router Index");
  })
  .post((req, res) => {
    res.end("Methods POST, Router Index");
  })
  .put((req, res) => {
    res.end("Methods PUT, Router Index");
  })
  .delete((req, res) => {
    res.end("Methods DELETE, Router Index");
  });

module.exports = routerIndex;
