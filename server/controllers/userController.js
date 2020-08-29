const userService = require("../services/userService");
const logger = require("../configurations/logger");
const isEmpty = require("lodash/isEmpty");
const { HTTP_CODE, MESSAGES } = require("../constants");
const { getAccessTokenSchema } = require("../joiSchema");
const { sendAndLogError } = require("../utils");

exports.getAccessToken = async (req, res) => {
  try {
    const value = await getAccessTokenSchema.validateAsync(req.query);
    const response = await userService.getAccessToken(value.requestToken);
    if (!isEmpty(response.data)) {
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
