const express = require("express");
const routerPosts = express.Router();

routerPosts
  .route("/")
  .get((req, res) => {
    res.end("Methods GET, Router Posts");
  })
  .post((req, res) => {
    res.end("Methods POST, Router Posts");
  })
  .put((req, res) => {
    res.end("Methods PUT, Router Posts");
  });

module.exports = routerPosts;
