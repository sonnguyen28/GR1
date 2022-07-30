const authRoute = require("./authRoute");
const schoolRoute = require("./schoolRoute");
const addressRoute = require("./addressRoute");
const studentRoute = require("./studentRoute");
//ROUTES

function route(app) {

  app.use("/v1/auth", authRoute);
  app.use("/v1/students", studentRoute);
  app.use("/v1/schools", schoolRoute);
  app.use("/v1/address", addressRoute);

}

module.exports = route;
