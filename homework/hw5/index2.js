const fs = require("fs")
const {Transform} = require("stream")

const readData =  fs.createReadStream("./input.txt", {
    encoding: "utf-8"
})

const writeData = fs.createWriteStream("./output2.txt")

// readData.on("data", (chunk) => {
//     console.log([...chunk].map((x,i) => chunk.charCodeAt(i)))
//     writeData.write([...chunk].map((x,i) => chunk.charCodeAt(i)).join(","))
// })

const transform = new Transform({
    transform(chunk, encoding, callback){
        this.push([...chunk.toString()].map((x,i) => chunk.toString().charCodeAt(i)).join(","))
        callback()
    }
})

readData.pipe(transform).pipe(writeData)

readData.on("end", ()=> {
    console.log("end");
})