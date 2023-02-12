const fs = require("fs");
const { EventEmitter } = require("events");

const homeWork1 = new EventEmitter();

homeWork1.on("read", () => {
  const readStream = fs.createReadStream("./text.txt", "utf-8");
  readStream.pipe(process.stdout);
}).emit("read")
