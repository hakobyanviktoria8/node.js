const fsExtra = require("fs-extra");
const fs = require("fs").promises;

async function moveDir(dirName) {
  const files = await fs.readdir(dirName);

  for (let file of files) {
    const stat = await fs.stat(`${dirName}/${file}`);

    if (stat.isFile() && stat.size > 1) {
      await fsExtra.move(`${dirName}/${file}`, `./newDirectory/${file}`);
    }
  }
}

moveDir("./web").catch((err) => console.error(err));
