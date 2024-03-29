const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");
const mime = require("mime-types");

// req.body is undefined, we i body-parser
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// or express.encoded then json
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname);  //repeat and remove old img
    cb(null, `${Date.now()}.${mime.extension(file.mimetype)}`);
  },
});
const upload = multer({ storage: storage });

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

      res
        .status(201)
        .json({
          success: true,
          data: {
            name: req.body.name,
          },
        });
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
