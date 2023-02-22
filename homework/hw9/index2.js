const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();
const app = express();
global.__homeDir = __dirname;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathUserJson = path.join(__homeDir, "./users.json");
console.log("OK__1", pathUserJson);

router
  .route("/users")
  .get((req, res) => {
    console.log("OK___2");
    res.send("Get users");
  })
  .post(async (req, res) => {
    const users = JSON.parse(await fs.readFile(pathUserJson, "utf-8"));
    console.log("OK___3", users, req.body);
    res.send("Post users");
    // if (users[req.body.username]) {
    //   res.status(400).json({
    //     success: false,
    //     data: null,
    //     message: "username exists",
    //   });
    // } else {
    //   users[req.body.username] = {
    //     username: req.body.username,
    //     name: req.body.name,
    //     // image: req.file.path
    //   };
    //   await fs.writeFile(pathUserJson, JSON.stringify(users));
    //   res.status(201).json({ success: true, data: users[req.body.username] });
    // }

    // res.status(201).json({
    //   success: true,
    //   data: {
    //     username: req.body.username,
    //     name: req.body.name,
    //   },
    // });
  });

app.use(router);

app.listen(3000, () => {
  console.log("Done!");
});
