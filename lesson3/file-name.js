const random = require("random")

function generateFileName(){
    let name = ""
    for(let i = 0; i < 8; i++){
        const num = random.int(0,9)
        name += num
    }
    return name
} 

module.exports = generateFileName