const zlib = require("zlib")
const fs = require("fs")
const {Transform} = require("stream")

const gzip = zlib.createGzip()
const readStream = fs.createReadStream("./input.txt",{
    highWaterMark: 4
})
const writeStream = fs.createWriteStream("output.gz")
const writeStreamText = fs.createWriteStream("outputProcess.txt")

readStream.pipe(gzip).pipe(writeStream)


const transform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

// process grel consolum heto tpel
process.stdin.pipe(transform).pipe(process.stdout)
process.stdin.pipe(transform).pipe(writeStreamText)