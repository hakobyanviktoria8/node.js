const fs = require("fs");

const data = fs.readFileSync("./test.txt");
console.log("data", data.toString()); //1
console.log("This work after!"); //2
