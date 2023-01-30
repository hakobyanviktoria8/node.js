fs = require("fs");
const writenData = {
  version: "1.1.1",
  date: "30.01.23",
};

fs.writeFile("write.json", JSON.stringify(writenData), (err) => {
  err && console.log(err.message);
});
