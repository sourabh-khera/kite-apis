const { HTTP_CODE, MESSAGES } = require('../constants');

exports.sendAndLogError = (res, error, message = '') => {
  const { details } = error;
  logger.error(error);
  const validationError = details && details.length ? details[0].message : [];
  if (validationError.length) {
    res.sendValidationError({ validationError })
  } else {
    res.sendError(HTTP_CODE.UN_PROCESSABLE_ENTITY, MESSAGES.api.SOMETHING_WENT_WRONG);
  }
}