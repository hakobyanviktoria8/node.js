// create function as argument app

module.exports = (app) => {
  app.use("/", require("./routesIndex"));
  app.use("/posts", require("./routesPosts"));
};
