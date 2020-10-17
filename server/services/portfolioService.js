const { webApiGet } = require("./baseApis");

exports.getHoldings = async (accessToken) => {
  try {
    const url = "/portfolio/holdings";
    const response = await webApiGet(url, accessToken).request;
    return response;
  } catch (error) {
    throw error;
  }
};

exports.getPositions = async (accessToken) => {
  try {
    const url = "/portfolio/positions";
    const response = await webApiGet(url, accessToken).request;
    return response;
  } catch (error) {
    throw error;
  }
};
