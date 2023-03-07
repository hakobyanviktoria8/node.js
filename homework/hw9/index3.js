const express = require("express");
// const multer = require("multer");
const path = require("path");
const { upload } = require("./helpers");
const fs = require("fs").promises;
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
global.__homeDir = __dirname;
const User = require("./../../models/users");
const { isNull } = require("util");
const UsersCtrl = require("../../controllers/users.ctrl");

app.use(cors());

const pathUserJson = path.join(__homeDir, "./users.json");

router
  .route("/users")
  .get(cors(), async (req, res) => {
    // if we want to add params
    const option = {};
    const limitData = {};

    if (req.query.name) {
      option.name = req.query.name;
    }

    if (req.query.limit) {
      limitData.limit = Number(req.query.limit);
    }

    // const users = await User.find(option).limit(1); or limit take attribute
    const users = await User.find(option, null, limitData);

    // let users = Object.values(
    //   JSON.parse(await fs.readFile(pathUserJson, "utf-8"))
    // );
    // if (req.query.name) {
    //   // did'n work
    //   // const regEx = `/${req.query.name}/gi`;
    //   // users = users.filter(({ name }) => !!name.match(regEx));
    //   users = users.filter((user) => user.name.includes(req.query.name));
    // }
    // if (req.query.limit) {
    //   users = users.slice(0, +req.query.limit);
    // }
    res.status(201).json({
      success: true,
      data: users,
      message: "Return all users",
    });
  })
  .post(cors(), upload.single("image"), async (req, res) => {
    try {
      // use users controllers methods
      const userData = await UsersCtrl.add({
        username: req.body.username,
        name: req.body.name,
        image: req.body.image,
      });

      res.status(201).json({
        success: true,
        data: userData,
        message: "User created",
      });
    } catch (error) {
      // say user exist but added image, it isn't right work
      // const user = await User.findOne({ _id: req.params.id });
      // await fs.unlink(path.join(`${__homeDir}/upload/`, user.image));

      res.status(401).json({
        success: false,
        data: null,
        message: error.message,
      });
      console.log(1111111, error);
    }

    // const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    // // console.log("OK__2_post",  users);

    // if (users[req.body.username]) {
    //   await fs.unlink(path.join(__homeDir, req.file.path));
    //   res
    //     .status(401)
    //     .json({ success: false, data: null, message: "User exists" });
    // } else {
    //   users[req.body.username] = {
    //     username: req.body.username,
    //     name: req.body.name,
    //     image: req.body.image,
    //   };
    //   await fs.writeFile(pathUserJson, JSON.stringify(users));
    //   res.status(201).json({
    //     success: true,
    //     data: users[req.body.username],
    //     message: "User created",
    //   });
    // }
  });

router
  .route("/users/:id")
  .get(async (req, res) => {
    // const user = await User.findOne({ _id: req.params.id });
    // use UserController
    const user = await UsersCtrl.getById(req.params.id);

    if (user) {
      res.status(202).json({
        success: true,
        data: user,
        message: "Get user data",
      });
    } else {
      res.status(202).json({
        success: false,
        data: null,
        message: "User not found",
      });
    }

    // const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    // if (users[req.params.id]) {
    //   res.status(202).json({
    //     success: true,
    //     data: users[req.params.id],
    //     message: "Get user data",
    //   });
    // } else {
    //   res.status(202).json({
    //     success: false,
    //     data: null,
    //     message: "User not found",
    //   });
    // }
  })
  .put(upload.single("image"), async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (user) {
        await fs.unlink(path.join(`${__homeDir}/upload/`, user.image));
        user.name = req.body.name;
        user.image = req.file.originalname;
        await user.save();

        res.status(201).json({
          success: true,
          data: user,
          message: "User data updated",
        });
      } else {
        res
          .status(401)
          .json({ success: false, data: null, message: "User not found" });
      }
    } catch (error) {
      console.log(error);
    }

    // const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    // const user = users[req.params.id];

    // if (user) {
    //   user.name = req.body.name;
    //   await fs.unlink(path.join(`${__homeDir}/upload/`, user["image"]));
    //   user.image = req.file.originalname;
    //   await fs.writeFile(pathUserJson, JSON.stringify(users));
    //   res.status(201).json({
    //     success: true,
    //     data: user,
    //     message: "User data updated",
    //   });
    // } else {
    //   res
    //     .status(401)
    //     .json({ success: false, data: null, message: "User not found" });
    // }
  })
  .delete(async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    res.status(202).json({
      success: true,
      message: `User data deleted`,
    });
    if (!user) {
      res.status(401).json({
        success: false,
        message: `User not found!`,
      });
    }
    // const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    // delete users[req.params.id];
    // await fs.writeFile(pathUserJson, JSON.stringify(users));
    // res.status(202).json({
    //   success: true,
    //   message: `User data deleted`,
    // });
  });

app.use(router);

mongoose
  .connect("mongodb://nodejs:passw0rd@192.168.99.100:27017/nodejs")
  .then(() =>
    app.listen(3000, function () {
      console.log("Ready");
    })
  );
