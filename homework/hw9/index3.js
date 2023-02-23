const express = require("express");
// const multer = require("multer");
const path = require("path");
const { upload } = require("./helpers");
const fs = require("fs").promises;

const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
global.__homeDir = __dirname;

const pathUserJson = path.join(__homeDir, "./users.json");
console.log("OK__1", pathUserJson);

router
  .route("/users")
  .get((req, res) => {
    res.send(`Get data`);
  })
  .post(upload.single("image"), async (req, res) => {
    const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    // console.log("OK__2_post",  users);

    if (users[req.body.username]) {
      await fs.unlink(path.join(__homeDir, req.file.path));
      res
        .status(401)
        .json({ success: false, data: null, message: "User exists" });
    } else {
      users[req.body.username] = {
        username: req.body.username,
        name: req.body.name,
        image: req.file.originalname,
      };
      await fs.writeFile(pathUserJson, JSON.stringify(users));
      res.status(201).json({
        success: true,
        data: users[req.body.username],
        message: "User created",
      });
    }
  });
router
  .route("/users/:username")
  .get(async (req, res) => {
    const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    if (users[req.params.username]) {
      res.status(202).json({
        success: true,
        data: users[req.params.username],
        message: "Get user data",
      });
    } else {
      res.status(202).json({
        success: false,
        data: null,
        message: "User not found",
      });
    }
  })
  .put(upload.single("image"), async (req, res) => {
    const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    const user = users[req.params.username];
    // console.log("OK__3_post", users);

    if (user) {
      user.name = req.body.name;
      await fs.unlink(path.join(`${__homeDir}/upload/`, user["image"]));
      user.image = req.file.originalname;
      await fs.writeFile(pathUserJson, JSON.stringify(users));
      res.status(201).json({
        success: true,
        data: user,
        message: "User created",
      });
    } else {
      res
        .status(401)
        .json({ success: false, data: null, message: "User not found" });
    }
  })
  .delete(async (req, res) => {
    const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    delete users[req.params.username];
    await fs.writeFile(pathUserJson, JSON.stringify(users));
    res.status(202).json({
      success: true,
      message: `User data deleted`,
    });
  });

app.use(router);

app.listen(3000, function () {
  console.log("Ready");
});
