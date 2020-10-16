const Mongoose = require("mongoose");
const { string } = require("@hapi/joi");

const porfolioModel = new Mongoose.Schema(
  {
    user_id: {
      type: Mongoose.Schema.Types.String,
      ref: "User",
      required: true,
    },
    holdings: {
      type: Array,
      validate: {
        validator: (array) => {
          return array.every((v) => typeof v === "object");
        },
      },
    },
    positions: {
      net: {
        type: Array,
        validator: (array) => {
          return array.every((v) => typeof v === "object");
        },
      },
      day: {
        type: Array,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = Mongoose.model("Portfolio", porfolioModel);
