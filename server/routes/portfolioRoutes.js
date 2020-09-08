const express = require("express");

const authService = require("../services/authService");
const {
  getPositions,
  getHoldings,
} = require("../controllers/portfolioController");

const route = express.Router();

route.get("/holdings", authService.isAuthenticated, getHoldings);
route.get("/positions", authService.isAuthenticated, getPositions);

module.exports = route;
