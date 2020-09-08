const portfolioService = require("../services/portfolioService");
const isEmpty = require("lodash/isEmpty");
const { HTTP_CODE, MESSAGES } = require("../constants");
const { getAccessTokenSchema } = require("../joiSchema");
const { sendAndLogError } = require("../utils");

exports.getHoldings = async (req, res) => {
  try {
    logger.info("Starting execution of getHoldings");
    const response = await portfolioService.getHoldings(req.accessToken);
    if (!isEmpty(response.data) && response.data.status === "success") {
      const { data } = response.data;
      res.sendSuccess(HTTP_CODE.SUCCESS, { holdings: data });
    } else {
      res.sendError(HTTP_CODE.NOT_FOUND, MESSAGES.api.NO_RESOURCE_FOUND);
    }
  } catch (error) {
    sendAndLogError(res, error);
  }
};

exports.getPositions = async (req, res) => {
  try {
    logger.info("Starting execution of getPositions");
    const response = await portfolioService.getPositions(req.accessToken);
    if (!isEmpty(response.data) && response.data.status === "success") {
      const { data } = response.data;
      res.sendSuccess(HTTP_CODE.SUCCESS, { positions: data });
    } else {
      res.sendError(HTTP_CODE.NOT_FOUND, MESSAGES.api.NO_RESOURCE_FOUND);
    }
  } catch (error) {
    sendAndLogError(res, error);
  }
};
