const { webApiPost } = require("./baseApis");
const crypto = require("crypto");

exports.getAccessToken = async (requestToken) => {
  try {
    const hash = crypto.createHash("sha256");
    const url = "/session/token";
    const data = `${process.env.API_KEY}${process.env.SECRET_KEY}${requestToken}`;
    const hashKey = hash.update(data).digest("hex");
    const response = await webApiPost(url, {
      api_key: process.env.API_KEY,
      request_token: requestToken,
      checksum: hashKey,
    }).request;
    return response;
    console.log(response, "resp----");
  } catch (error) {
    console.log(error, "----");
    throw error;
  }
};
