const fs = require("fs")
const { Transform } = require("stream")

function func() {
    const readFile =  fs.createReadStream("./input.txt")
    const writeFile =  fs.createWriteStream("./output4.txt")
    const transform = new Transform({
        transform(chunk, encoding, next){
            this.push(chunk.toString().split(" ").map(x=>x[0].toUpperCase().concat(x.slice(1))).join(" "));
            next()
        }
    })
    readFile.pipe(transform).pipe(writeFile)
}

func()