const fs = require("fs")
const os = require("os")

const name = os.userInfo().username
const data = JSON.stringify(os.userInfo())
// find user data and make folder
fs.writeFile(`./${name}.json`,data, (err) => {
    err && console.log(err.message);
    console.log("Done");
})

const months =  new Date().getMonth() + 1
const day =  new Date().getDate()
const hours =  new Date().getHours()
const minutes =  new Date().getMinutes()
// rename create folder name
fs.rename(`./${name}.txt`, `./${months}_${day}_${hours}_${minutes}.txt`, (err) => {
    err && console.log(err.message);
    console.log("Done rename");
})


