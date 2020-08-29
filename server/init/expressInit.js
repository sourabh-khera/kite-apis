const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const { apiResponseGenerator } = require('./initialiseResponseUtils');


module.exports = (app) => {
  app.set('port', (process.env.PORT || 4000));
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    // Secure your Express apps by setting various HTTP headers
    app.use(helmet());
    app.use(compression());
  }
  app.use(apiResponseGenerator);
  app.use(express.json());


  logger.info(`===> Starting Server . . . ===>  Environment: ${process.env.NODE_ENV} ===>  Listening on port: ${app.get('port')}`);
};
