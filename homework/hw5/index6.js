const fs = require("fs")

fs.readFile("./input6.txt", 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(11,data);
    fs.writeFile("./output6.txt", data, (err) => err && console.log(err))
    // added file content end part
    fs.appendFile("./output6.txt", " test1111111111", (err) => err && console.log(err))
    fs.appendFile("./output6.txt", " test22222222", (err) => err && console.log(err))
})

