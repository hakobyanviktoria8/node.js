const { EventEmitter } = require("events");
const fs = require("fs").promises;
const homeWork1 = new EventEmitter();

homeWork1
  .on("read", async () => {
    const readData = await fs.readFile("./text.txt", "utf-8");
    console.log(readData);
  })
  .emit("read", console.log("read data"));
