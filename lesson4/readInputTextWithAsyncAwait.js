const fs = require("fs").promises

async function readFuncSub2(){
    const data1 = await fs.readFile("./input.txt", "utf-8")
    
    const text1 = data1.slice(0, data1.length/2)
    const text2 = data1.slice(data1.length/2)
    console.log(data1, text1, text2);

    await Promise.all([
        fs.writeFile("text1.txt", text1),
        fs.writeFile("text2.txt", text2)
    ])
}

module.exports = readFuncSub2