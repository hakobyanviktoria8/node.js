const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// req.body is undefined, we i body-parser
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// or express.encoded then json

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router
  .route("/posts")
  .get((req, res) => {
    res.send(`Met ${req.method}, ${new Date().toDateString()}`);
  })
  .post(
    upload.single("image"),
    (req, res, next) => {
      req.file = {};
      console.log("first midlwer", req.file);
      next();
    },
    (req, res) => {
      console.log(req.body);
      res.send(`Met ${req.method}, ${new Date().toDateString()}`);
    }
  );

router.route("/posts/:uid").put((req, res) => {
  console.log(`User id: ${req.params.uid}`);
  res.send("OK");
});

app.use(router);

app.listen(3333, function () {
  console.log("Ready");
});
