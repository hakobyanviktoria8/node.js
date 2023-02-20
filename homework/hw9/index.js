const express = require("express");
const mime = require("mime-types");
const random = require("random");

const app = express();
const multer = require("multer");

const randomName = () => {
  return random.int(0, 1000000);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname);  //repeat and remove old img
    cb(null, `${randomName()}.${mime.extension(file.mimetype)}`);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("avatar"), (req, res, next) => {
  console.log("first midlwer", req.file);
  res.status(201).json({
    success: true,
  });
});

app.listen(3000, () => {
  console.log("Done!");
});
