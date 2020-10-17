const Mongoose = require("mongoose");

Mongoose.connect(process.env.MONGO_URL);

(() => {
  Mongoose.connection.on("open", (err, data) => {
    logger.info("mongo connection successful");
  });
  Mongoose.connection.on("error", (err, data) => {
    logger.error(`mongo connection not successful ---- ${err}`);
  });
})();
