// const Stream = require("stream")
const fs = require("fs")
const {Readable, Writable, Transform, Duplex} = require("stream")

// Stream.Readable   //read data
// Stream.Writable   //write data
// Stream.Duplex     //mix read and write 
// Stream.Transform   //change data

// create stream which read input.txt text
const readStream = fs.createReadStream("./input.txt",{
    highWaterMark:4
})
const writeStream = fs.createWriteStream("./output.txt")

// readStream.on("data", function(chunk){
//     writeStream.write(chunk.toString().toUpperCase())
// })

// change text to uppercase
const transform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

// we can use pipe read data, then change it with transform, then write new file
readStream.pipe(transform).pipe(writeStream)


// create stream this buffer
console.log(Buffer.from([1,2,3]));





// use Stream example
new Readable({
    read(size) {
        this.push('')
    }
})

new Writable({
    write(chunk, encoding, callback) {
        console.log(111111111111, chunk);
    }
})

class ArrayReadable extends Readable {
    constructor(array) {
        super();
        this.array = array;
        this.index = 0;
    }
// overide anenq Readablei read@
    _read(size) {
        if (this.index < this.array.length) {
            this.push(this.array[this.index].toString());
            this.index++;
        } else {
            this.push(null);
        }
    }
}

const customStream = new ArrayReadable([1, 2, 3, 4]);

customStream.on('data', (item) => {
    console.log(item.toString());
});

customStream.on('end', () => {
    console.log('end');
})