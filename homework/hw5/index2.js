const fs = require("fs")

const readData =  fs.createReadStream("./input.txt", {
    encoding: "utf-8"
})

const writeData = fs.createWriteStream("./output2.txt")

readData.on("data", (chunk) => {
    console.log([...chunk].map((x,i) => chunk.charCodeAt(i)))
    writeData.write([...chunk].map((x,i) => chunk.charCodeAt(i)).join(","))
})

readData.on("end", ()=> {
    console.log("end");
})