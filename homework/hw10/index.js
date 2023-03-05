const express = require("express");
const mongoose = require("mongoose");
const Posts = require("./../../models/posts");
const router = express.Router();
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

router
  .route("/posts")
  .get(cors(), async (req, res) => {
    const posts = await Posts.find().populate("author");
    res.status(201).json({
      success: true,
      data: posts,
      message: "Return all posts",
    });
  })
  .post(async (req, res) => {
    const post = await new Posts({
      title: req.body.title,
      description: req.body.description,
      author: req.body.userId,
    }).save();

    res.status(222).json({
      success: true,
      data: post,
      message: "Create new post",
    });
  });

app.use(router);

mongoose
  .connect("mongodb://nodejs:passw0rd@192.168.99.100:27017/nodejs")
  .then(() =>
    app.listen(3000, function () {
      console.log("Ready");
    })
  );
