const userService = require("../services/userService");
const isEmpty = require("lodash/isEmpty");
const { HTTP_CODE, MESSAGES } = require("../constants");
const { getAccessTokenSchema } = require("../joiSchema");
const { sendAndLogError } = require("../utils");
const logger = require("../configurations/logger");

exports.getAccessToken = async (req, res) => {
  try {
    logger.info("Starting execution of getAccessToken");
    const value = await getAccessTokenSchema.validateAsync(req.query);
    logger.info(`request token = ${value.requestToken}`);
    const response = await userService.getAccessToken(value.requestToken);
    if (!isEmpty(response.data) && response.data.status === "success") {
      const {
        data: { access_token },
      } = response.data;
      res.sendSuccess(HTTP_CODE.SUCCESS, { access_token });
    } else {
      res.sendError(
        HTTP_CODE.UN_PROCESSABLE_ENTITY,
        MESSAGES.validations.INVALID_PAYLOAD
      );
    }
  } catch (error) {
    sendAndLogError(res, error);
  }
};
