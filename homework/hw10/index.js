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
    // const posts = await Posts.find().populate("author");
    // if we want more information
    const posts = await Posts.find().populate({
      path: "author",
      select: "username name -_id",
    });
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

router
  .route("/posts/:id")
  .get(async (req, res) => {
    const post = await Posts.findOne({ _id: req.params.id });

    if (post) {
      res.status(202).json({
        success: true,
        data: post,
        message: "Get post data",
      });
    } else {
      res.status(202).json({
        success: false,
        data: null,
        message: "post not found",
      });
    }
  })
  .delete(async (req, res) => {
    const post = await Posts.findByIdAndRemove(req.params.id);
    res.status(202).json({
      success: true,
      message: `post data deleted`,
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
