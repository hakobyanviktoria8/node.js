const http = require("http")
const fs = require("fs")

// const server = http.createServer(function(req,res){
//     console.log("create my first server");
//     res.writeHead(200, {"ContentType": "applicatin/json11"})
//     res.end(JSON.stringify({
//         firstName: "Viktorya",
//         lastName: "Hakobyan",
//     }))
// })

// server.listen(2022)


// work asynchronous way
// fs.readFile("../../.gitignore", function(err, data){
//     if(err){
//         return err.message
//     }
//     console.log(data.toString());
// })
// console.log("test");


// the same with synchron way
// const data = fs.readFileSync("../../.gitignore", "utf-8")
// console.log(data);
// console.log("test");


fs.writeFile("createFile.txt", "my new text 1111", function(err){
    console.log(err?.message);
})