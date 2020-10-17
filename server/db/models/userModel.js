const Mongoose = require("mongoose");
const { string } = require("@hapi/joi");

const userModel = new Mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    user_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user_type: { type: String, required: true },
    broker: { type: String, required: true },
    exchanges: {
      type: Array,
      required: true,
      validate: {
        validator: (array) => {
          return array.every((v) => typeof v === "string");
        },
      },
    },
    products: {
      type: Array,
      required: true,
      validate: {
        validator: (array) => {
          return array.every((v) => typeof v === "string");
        },
      },
    },
    order_types: {
      type: Array,
      required: true,
      validate: {
        validator: (array) => {
          return array.every((v) => typeof v === "string");
        },
      },
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("User", userModel);
