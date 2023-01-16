const fs = require("fs")
const {Transform} = require("stream")

const readableStream = fs.createReadStream("./input.txt", {
    encoding:"utf-8"
})

const transFormData = new Transform({
    transform(chunk, encoding, callback){
        console.log(11111, chunk.toString());
        this.push(chunk.toString().replace(/\,/gm,"_"))
        callback()
    }
})

const writeData = fs.createWriteStream("./output1111.txt")

readableStream.pipe(transFormData).pipe(writeData)