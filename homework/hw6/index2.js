const fs = require("fs");

// read input.txt data
fs.readFile("./input.txt", "utf-8", (err, data) => {
  err && console.log(11111, err.message);
  const newData = data.replace(/\,/gm, " ");
  console.log(111, data, newData);
  fs.writeFile("./output.txt", newData, (err) => {
    err && console.log(2222222, err.message);
  });
});
fs.unlink("./input.txt", (err) => {
  err && console.log(33333333, err.message);
});
  