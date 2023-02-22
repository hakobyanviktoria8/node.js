const mime = require("mime-types");
const random = require("random");
const multer = require("multer");

const randomName = () => {
  return random.int(100000, 1000000);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // create file before cb call
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname);  //repeat and remove old img
    cb(null, `${randomName()}.${mime.extension(file.mimetype)}`);
  },
});

module.exports.upload = multer({ storage: storage });
