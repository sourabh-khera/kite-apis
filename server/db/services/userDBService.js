const userModel = require("../models/userModel");

exports.addNewUser = async (userDetails) => {
  try {
    const {
      user_id,
      user_name,
      email,
      exchanges,
      products,
      order_types,
      broker,
      user_type,
    } = userDetails;
    const results = await userModel.create({
      _id: user_id,
      user_name,
      email,
      exchanges,
      products,
      order_types,
      broker,
      user_type,
    });
    return results;
  } catch (error) {
    throw error;
  }
};
