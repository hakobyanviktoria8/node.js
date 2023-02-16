const express = require("express");
const app = express();
const router = express.Router();

router.route("/posts").all((req, res) => {
  res.send(`Met ${req.method}, ${new Date().toDateString()}`);
});

router.route("/posts/:uid").put((req, res) => {
  console.log(`User id: ${req.params.uid}`);
  res.send("OK");
});

app.use(router);

app.listen(3333, function () {
  console.log("Ready");
});
