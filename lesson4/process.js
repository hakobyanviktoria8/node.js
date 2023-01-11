process.on("exit", function(){
    console.log("exit");
})
console.log(process.env.NODE_ENV)

// ___we use production and development____
const config = require("./../config.json")[process.env.NODE_ENV]
const http = require("http")


const server = http.createServer((req,res) => {
    res.end("OK")
})

server.listen(config?.port, config?.host)


// nextTick done when find stack empty, before logs
process.nextTick(()=>{
    console.log("nextTick")
});

// process
console.log(process.version)