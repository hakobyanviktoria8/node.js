const path = require("path");
const { inc, dec, count, getCount } = require("./actionModule");

// console.log(__filename);
// console.log(path.basename(__filename));

for (const key in global) {
  // console.log(key);
}

// call actionModule
console.log(1, getCount());
inc();
inc();
console.log(2, getCount());
dec();
console.log(3, getCount());
