const jwt = require('jsonwebtoken');

const { HTTP_CODE, MESSAGES } = require('../constants');
const { sendAndLogError } = require('../utils');
const { tokenExpiryTime } = require('../configurations');

/**
* @param {object} req object
* @param {res} res object
* @param {next} next function of this middleware
*/

exports.isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.sendError(HTTP_CODE.UNAUTHORIZED, MESSAGES.api.AUTH_ERROR);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.sendError(HTTP_CODE.VALIDATION_ERROR, MESSAGES.api.AUTH_ERROR);
      }
      // if everything good, save to request for use in other routes
      const data = jwt.decode(token);
      req.user = data;
      next();
    })
  }
  catch (error) { sendAndLogError(res, error) }
}

/**
 * Returns a jwt token signed by the app secret
 * @param {string} id user's unique id
 */
exports.signToken = userClaim => jwt.sign(userClaim, process.env.JWT_SECRET, { expiresIn: tokenExpiryTime });

