const {Readable} = require("stream")
const fs = require("fs")

const readStreamText = fs.createReadStream("./input.txt", {
    highWaterMark: 10,
    encoding: "utf-8"
})
const writeStreamText = fs.createWriteStream("./output.txt")

readStreamText.on("data", function(chunk){    
    writeStreamText.write(chunk.replace(/[^\w\s]/gm, ""))
    console.log(chunk.replace(/[^\w\s]/gm, ""));
})

readStreamText.on("end", ()=> {
    console.log("end");
})