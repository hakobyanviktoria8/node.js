const express = require("express");
const app = express();
const router = express.Router();

router.route("/posts").all((req, res) => {
  res.send(`Met ${req.method}, ${new Date().toDateString()}`);
});

app.use(router);

app.listen(3333, function () {
  console.log("Ready");
});
