const path = require("path");
const util = require("util");
const v8 = require("v8");

// console.log(path.basename(__dirname));

const newPath = path.join(__dirname, "www", "viki", ".com");
console.log(newPath);

// show time
util.log(newPath);

util.log(v8.getHeapStatistics());

console.log(1111111, util);
