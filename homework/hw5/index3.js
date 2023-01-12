const {Transform} = require("stream")
const fs = require("fs")

const readData = fs.createReadStream("./output3.txt",{
    encoding:"utf-8"
})

const writeData = fs.createWriteStream("./output3_1.txt")

class RemoveSpecialChars extends Transform {
    _transform = (chunk, encoding, next) => {
        this.push(chunk.toString().replace(/[^a-zA-Z0-9\s]/g,""))
        next()
    }
}

const obj = new RemoveSpecialChars()

// log data write ot3
process.stdin.pipe(obj).pipe(writeData)
readData.pipe(obj).pipe(writeData)