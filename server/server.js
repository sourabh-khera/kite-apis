require("dotenv").config();
const express = require("express");
const initExpress = require("./init/expressInit");
const initRoutes = require("./init/routesInit");
const initialiseDB = require("./init/initDB");
global.logger = require("./configurations/logger");

const app = express();

/*
 * express settings
 */

initExpress(app);

/*
 * server application routes
 *
 */

initRoutes(app);

//initialise DB instance

initialiseDB();

// All undefined asset or api routes should return a 404

app
  .route("*")
  .get((req, res) => res.status(404).send({ message: "not found!!" }))
  .post((req, res) => res.status(404).send({ message: "not found!!" }))
  .put((req, res) => res.status(404).send({ message: "not found!!" }))
  .delete((req, res) => res.status(404).send({ message: "not found!!" }));

app.listen(app.get("port"));

module.exports = app;
