const fs = require("fs").promises

async function foo() {
    const readData = await fs.readFile("./output.txt")
    const newData = readData.toString().replace(/\s+/gm, ", ")
    await fs.writeFile("./input.txt", newData)
    await fs.unlink("./output.txt")
}

foo()
    .then(data => console.log(data))
    .catch(err => console.log(err))

