const fs = require("fs");

async function readAndMove(dirName) {
  const readData = await fs.readFile(dirName);
  console.log(111, readData);
}

readAndMove("./web1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
