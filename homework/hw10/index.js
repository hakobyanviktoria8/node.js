const express = require("express");
const mongoose = require("mongoose");
const Posts = require("./../../models/posts");
const Users = require("./../../models/users");
const router = express.Router();
const cors = require("cors");
const { body, check } = require("express-validator");
const { ObjectId } = require("mongoose").Types;
const ResponseManager = require("./../../managers/response-manager");
const AppError = require("./../../managers/app-error");
const validationResult = require("./../../managers/validation-result");
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
      select: "username name _id",
    });
    res.status(201).json({
      success: true,
      data: posts,
      message: "Return all posts",
    });
  })
  .post(
    body("userId").custom((value, { req, res }) => {
      return ObjectId.isValid(value);
    }),
    check("title", "title exist").exists(),
    validationResult,

    async (req, res) => {
      const responseHandler = ResponseManager.getResponseHandler(res);
      const user = await Users.findById(req.body.userId);
      
      try {
        responseHandler.onSuccess(
          {
            title: req.body.title,
            description: req.body.description,
            author: user._id,
          },
          "Post new created",
          222
        );
      } catch (error) {
        responseHandler.onError(error);
      }

      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   console.log("errors.isEmpty 111111111111");
      //   return res.status(400).json({ errors: errors.mapped() });
      //   // return responseHandler.onError(
      //   //   new AppError("Validation Error!", 400),
      //   //   errors.array()
      //   // );
      // }
      // userId is a /posts POST property, and I acssess them
      // const user = await Users.findById(req.body.userId);

      // if (user) {
      //   console.log(1111111, user);
      //   const post = await new Posts({
      //     title: req.body.title,
      //     description: req.body.description,
      //     author: user._id,
      //   }).save();

      //   // res.status(222).json({
      //   //   success: true,
      //   //   data: post,
      //   //   message: "Create new post",
      //   // });

      //   responseHandler.onSuccess(post, "Post new created", 222);
      // }
    }
  );

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
