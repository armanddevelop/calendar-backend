const express = require("express");
const authUserRoute = require("./auth");

const routerApi = (app) => {
  const router = express.Router();
  /*master route */
  app.use("/api/v1", router);
  /*other routes */
  router.use("/authUser", authUserRoute);
};

module.exports = routerApi;
