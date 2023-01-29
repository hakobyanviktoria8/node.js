const path = require("path");

console.log(__filename);
console.log(path.basename(__filename));

for (const key in global) {
  console.log(key);
}
