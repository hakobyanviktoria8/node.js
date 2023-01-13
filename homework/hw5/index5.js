const fs = require("fs").promises

async function func1(){
    const data = await (await fs.readFile("./input.txt")).toString()
    const writeData = await fs.writeFile("./output5.txt", 
    data.split(" ").map(x=>x[0].toUpperCase().concat(x.slice(1))).join(" "))
}

func1()
.then(()=>console.log("Done"))
.catch(err => console.log(err?.message))