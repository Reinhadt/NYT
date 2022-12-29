const express = require("express");
const bodyParser = require("body-parser");
const routes = require('../api')
const cors = require("cors");
const {errorResponder} = require('../api/middlewares/errorHandler')

module.exports = (app) => {
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
  // Load API routes
  //todo: separate api routes from regular routes creating a router for api
  app.use('/api', routes());

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["code"] = 404;
    next(err);
  });

  app.use(errorResponder)

};
