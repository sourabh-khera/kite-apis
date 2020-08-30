const axios = require("axios");
const qs = require("querystring");

const BASE_URL = process.env.KITE_API_BASE_URL;

const getConfig = async (url) => {
  const contentType =
    url === "/session/token" ? "x-www-form-urlencoded" : "json";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": `application/${contentType}`,
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
  const config = getConfig(url);
  const stringifyOptions =
    url === "/session/token" ? qs.stringify(options) : JSON.stringify(options);
  return {
    request: axios.post(`${BASE_URL}${url}`, stringifyOptions, config.config),
  };
};
