const express = require("express");
const authUserRoute = require("./auth");
const eventsRoute = require("./events");

const routerApi = (app) => {
  const router = express.Router();
  /*master route */
  app.use("/api/v1", router);
  /*auth routes */
  router.use("/authUser", authUserRoute);
  /*Events route*/
  router.use("/events", eventsRoute);
};

module.exports = routerApi;
