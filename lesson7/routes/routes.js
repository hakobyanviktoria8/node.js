const express = require("express");

const routerPosts = express.Router();

routerPosts
  .route("/posts")
  .get((req, res) => {
    res.end("Methods GET Posts");
  })
  .post((req, res) => {
    res.end("Methods POST Posts");
  });

module.exports = routerPosts;
