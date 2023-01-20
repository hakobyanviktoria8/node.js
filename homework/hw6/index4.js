const fs = require("fs").promises;

async function readAndMove(dirName) {
  const readData = await fs.readdir(dirName);
  await fs.mkdir(`${dirName}_111`, (err) => {
    err && console.log(err.message);
    console.log("Done mkdir");
  });
  await readData.map((item) =>
    fs.writeFile(`${dirName}_111/${item}`, "test", (err, data) => {
      err && console.log(err);
    })
  );
}

readAndMove("./web1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
