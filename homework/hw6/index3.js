const fs = require("fs")
const web = ["html", "js", "css", "tsx"]

fs.mkdir("web", err => {
    err && console.log(err);
    console.log("Done");
    web.map(item => {
        fs.writeFile(`./web/${item}.${item}`, item, err => {
            err && console.log(err);
        })
    })
})

