const portfolioModel = require("../models/portfolioModel");

exports.addPortfolioData = async (portfolioData, user_id) => {
  try {
    const results = await portfolioModel.update(
      {
        user_id,
      },
      {
        ...portfolioData,
      },
      { upsert: true }
    );
    return results;
  } catch (error) {
    throw error;
  }
};
