const os = require("os")
const generateFileName = require("./file-name")
const fs = require("fs")

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


fs.writeFile(
    `${os.platform()}.txt`, 
    `Hello new life ${new Date().getDate()}`, 
    function(err){
        console.log(err?.message);

})