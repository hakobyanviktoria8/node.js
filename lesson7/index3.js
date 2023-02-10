const http = require("http");
const fs = require("fs");
const userData = require("./user.json");

http
  .createServer((req, res) => {
    const reqUrlData = new URL(req.url, "http://localhost:3000");
    const getQueryFilter = reqUrlData.searchParams.get("filter");
    const getQuerySort = reqUrlData.searchParams.get("sort");

    if (getQueryFilter) {
      // console.log(
      //   reqUrlData.searchParams, //{ 'filter' => 'done', 'sort' => 'all' }
      //   getQueryFilter, //return data done
      //   getQuerySort //all
      // );
      // console.log(
      //   userData.filter((user) => user["first_name"].includes("Ann"))
      // );
      res.end(
        JSON.stringify(
          userData.filter((user) => user["first_name"].includes("Vicky"))
        )
      );
    } else {
      res.end("Not found!");
    }
  })
  .listen(3000);
