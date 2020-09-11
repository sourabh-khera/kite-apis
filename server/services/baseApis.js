const axios = require("axios");
const qs = require("querystring");

const BASE_URL = process.env.KITE_API_BASE_URL;

const getConfig = (url, accessToken) => {
  const contentType =
    url === "/session/token" ? "x-www-form-urlencoded" : "json";
  const authToken = accessToken
    ? { Authorization: `token ${process.env.API_KEY}:${accessToken}` }
    : {};
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": `application/${contentType}`,
      "X-Kite-Version": "3",
      ...authToken,
    },
  };
  return {
    config,
  };
};

exports.webApiGet = (url, accessToken) => {
  const config = getConfig(url, accessToken);
  return {
    request: axios.get(`${BASE_URL}${url}`, config.config),
  };
};

exports.webApiPost = (url, options, accessToken = "") => {
  const config = getConfig(url, accessToken);
  const stringifyOptions =
    url === "/session/token" ? qs.stringify(options) : JSON.stringify(options);
  return {
    request: axios.post(`${BASE_URL}${url}`, stringifyOptions, config.config),
  };
};
