const Joi = require("@hapi/joi");

exports.getAccessTokenSchema = Joi.object({
  requestToken: Joi.string().invalid("", null).required(),
});
