const fs = require("fs");

fs.readFile("./test.json", "utf-8", (err, data) => {
  err && console.log(err.message);
  console.log(data);
  console.log(data.name); //undefined
  // need json.parse(data), then use as a obj
});

// when import file we can call obj.name
const jsonObj = require("./test.json");
console.log(jsonObj.name); //Viki

// read directory
fs.readdir("c:/", (err, data) => {
  console.log(data); //log c folder data
});
