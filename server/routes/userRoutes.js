const express = require("express");

const authService = require("../services/authService");
const { getAccessToken } = require("../controllers/userController");

const route = express.Router();

route.get("/accessToken", getAccessToken);

module.exports = route;
