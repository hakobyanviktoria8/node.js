const fs = require("fs")

const readableStream = fs.createReadStream("./output1111.txt")
const writeData = fs.createWriteStream("./output.txt")

readableStream.on("data", (chunk)=> {
    writeData.write(chunk.toString().replace(/\_/gm, ""))
})

fs.unlink("./output1111.txt", err => {
    err && console.log(err.message);
})
        
// const fs = require("fs")
// const {Transform} = require("stream")

// const readableStream = fs.createReadStream("./output1111.txt")
// const writeData = fs.createWriteStream("./output.txt")  

// const transformData = new Transform({
//     transform(chunk, encoding, next){
//         this.push(chunk.toString().replace(/\_/gm, " "))
//         next()
//     }
// })

// readableStream.pipe(transformData).pipe(writeData)

// fs.unlinkSync("./output1111.txt")