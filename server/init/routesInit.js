const cors = require("cors");

const user = require("../routes/userRoutes");
const portfolio = require("../routes/portfolioRoutes");

const { versionInfo } = require("../configurations");

module.exports = (app) => {
  //to enable cross-origin policy
  app.use(cors());

  //user routes
  app.use(`/api/${versionInfo}/user`, user);

  //portfilio routes
  app.use(`/api/${versionInfo}/portfolio`, portfolio);
};
