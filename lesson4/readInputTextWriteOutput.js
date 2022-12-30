const fs = require("fs")

function readFunc(){
    fs.readFile("./input.txt", function(err, data){
        let text1 = data.toString().slice(0, Math.ceil(data.toString().length/2))
        let text2 = data.toString().slice(Math.ceil(data.toString().length/2))
        
        console.log(data.toString().length, text1.length, text2.length);
        Promise.all([
            fs.writeFile("output1.txt", text1, function(err){
                console.log(err?.message);
            }),
            fs.writeFile("output2.txt", text2, function(err){
                console.log(err?.message);
            })
        ])
    })
}

module.exports= readFunc