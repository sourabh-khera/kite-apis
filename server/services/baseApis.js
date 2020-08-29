const axios = require("axios");

const BASE_URL = process.env.KITE_API_BASE_URL;

const getConfig = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  return {
    config,
  };
};

exports.webApiGet = (url) => {
  const config = getConfig();
  return {
    request: axios.get(`${BASE_URL}${url}`, config.config),
  };
};

exports.webApiPost = (url, options) => {
  const config = getConfig();
  return {
    request: axios.post(
      `${BASE_URL}${url}`,
      JSON.stringify(options),
      config.config
    ),
  };
};
