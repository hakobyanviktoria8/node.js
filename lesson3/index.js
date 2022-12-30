const os = require("os")
const generateFileName = require("./file-name")
const fs = require("fs").promises

// console.log(os.totalmem());
// console.log(os.networkInterfaces());
const network = os.networkInterfaces();


// network['Wi-Fi'].forEach(item=> item.family==="IPv4" && console.log(item.address))

// fs.writeFile(`${generateFileName()}.txt`, os.cpus().length.toString(), function(err){
//     console.log(err?.message);
// })

// read input.txt file text and write output.tx file
// fs.readFile("./input.txt", function(err, data){
//     let newText = data.toString().split(" ").join("-")

//     fs.writeFile("output.txt", newText, function(err){
//         console.log(err?.message);
//     })
// })


// fs.writeFile(
//     `${os.platform()}.txt`, 
//     `Hello new life ${new Date().getDate()}`, 
//     function(err){
//         console.log(err?.message);

// })

// async function foo() {
//     try {
//         let data =  await fs.readFile("win32.txt")
//         console.log(data.toString());
//         await fs.writeFile("111111.txt", data.toString().toUpperCase())        
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         console.log("Go");
//     }
// }
// foo()

// promis All
Promise.all([
    fs.readFile("./input.txt"),
    fs.readFile("./output.txt"),
]).then(function(data){
    console.log(data.toString());
    fs.writeFile("./mixContentPromisAll.txt", data.toString())
    Promise.all([
        fs.writeFile("pAll1.txt", data[0].toString()),
        fs.writeFile("pAll2.txt", data[1].toString())
    ])
}).then(function(){
    console.log("Ok");
}).catch(function(err){
    console.log(err.message);
}).finally(function(){
    console.log("finaly");
})