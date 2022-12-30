const fs = require("fs").promises
const random = require("random")
const createFunc = require("./createServer")

// new Promise(function(resolve, reject){
//     const num = random.int(1,10)
//     console.log(num);
//     if(num < 5) {
//         resolve (num)
//     } else {
//         reject(new Error("Error"))
//     }
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(11111, err.message);
// })

// function foo (){
//    return new Promise(function(resolve, reject){
//         const num = random.int(1,10)
//         console.log(num);
//         if(num < 5) {
//             resolve (num)
//         } else {
//             reject(new Error("Error"))
//         }
//     })
// }

// foo()
//     .then(data => console.log(111, data))
//     .catch(err => console.log(222, err.message))


// read json file data, create server with host and port
createFunc()