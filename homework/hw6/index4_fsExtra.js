const fsExtra = require("fs-extra");
const fs = require("fs").promises;

async function moveDir(dirName) {
  const files = await fs.readdir(dirName);
  await fs.mkdir("./newDirectory");

  for (let file of files) {
    const start = await fs.stat(`${dirName}/${file}`);

    if (start.isFile() && start.size > 1) {
      console.log("Done", 1);
      await fs.rename(`${dirName}/${file}`, `./newDirectory/${file}`);

      console.log("Done", 2);
    }
  }
}

moveDir("./web1").catch((err) => console.error(err));
