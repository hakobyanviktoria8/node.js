const fs = require("fs").promises;
const web1 = ["html", "js", "css", "tsx"];

async function createFiles(dirName, arr) {
  await fs.mkdir(`./${dirName}`);

  const promisAll = [];

  for (const item of arr) {
    promisAll.push(fs.writeFile(`./${dirName}/${item}.${item}`, item));
  }
  console.log(promisAll);
  await Promise.all(promisAll);
}

createFiles("web1", web1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
