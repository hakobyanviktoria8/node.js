const fs = require("fs").promises
const http = require("http")

// if we have a json file, we can read json data inside that file
// const jsData = require("./jsonData.json")
// console.log(jsData);

function createFunc() {
    fs.readFile("./jsonData.json")
    .then (data => {
        const d = JSON.parse(data.toString())

        const server = http.createServer(function (req, res) {
            res.writeHead(200);
            res.end('Hello, World!');
        });
        server.listen(d.port, d.host)}
    )
    .catch (err => console.log(err.message))
}

module.exports = createFunc