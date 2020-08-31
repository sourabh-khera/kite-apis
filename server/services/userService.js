const { webApiPost } = require("./baseApis");
const crypto = require("crypto");
const logger = require("../configurations/logger");

exports.getAccessToken = async (requestToken) => {
  try {
    const hash = crypto.createHash("sha256");
    const url = "/session/token";
    const data = `${process.env.API_KEY}${requestToken}${process.env.SECRET_KEY}`;
    const hashKey = hash.update(data).digest("hex");
    const response = await webApiPost(url, {
      api_key: process.env.API_KEY,
      request_token: requestToken,
      checksum: hashKey,
    }).request;
    return response;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
