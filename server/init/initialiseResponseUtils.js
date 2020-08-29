const { MESSAGES, HTTP_CODE  } = require('../constants');

/**
 * create's custom function on request and response object
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {object} next - next middle ware object
 */
exports.apiResponseGenerator = (req, res, next) => {

    /**
     * sends response based on parameters
     * @param {object} dataObj - data to be sent in response
     * @param {object} headers - header object
     * @param {number} status - status of response
     */
    const sendResponse = (dataObj, headers, status) => {
        // status = HTTP_CODE.SUCCESS;
        headers = headers || { 'Content-Type': 'application/json' };
        res.writeHead(status, headers);
        res.end(JSON.stringify(dataObj));
    };

    /**
     * sends response based on parameters(Error Validations)
     * @param {object} data - data to be sent in response
     * @param {object} headers - header object
     */
    res.sendValidationError = (data, headers) => {
        sendResponse({
            error: {
                detail: MESSAGES.validations.VALIDATION_ERROR,
                message: data || MESSAGES.validations.INVALID_PAYLOAD
            }
        }, headers, HTTP_CODE.VALIDATION_ERROR);
    };

    /**
     * sends response based on parameters(Error in processing)
     * @param {number} status - status of response
     * @param {string} message - message to be sent in response
     * @param {object} data - data to be sent in response
     * @param {string} code - custom code to be sent in response
     * @param {object} headers - header object
     */
    res.sendError = (status, message, data = {}, headers) => {
        const response = {
            // code: status,
            error: {}
        };
        response.error.message = message || MESSAGES.api.SOMETHING_WENT_WRONG;
        sendResponse(response, headers, status);
    };

    /**
     * sends response based on parameters(Success in processinh)
     * @param {number} status - status of response
     * @param {string} payload - data to be sent in response
     * @param {object} message - message to be sent in response
     * @param {string} code - custom code to be sent in response
     * @param {object} headers - header object
     */
    res.sendSuccess = (status, payload, message, code, headers) => {
        const response = {
            // code: status,
            data: payload,
            message: message || MESSAGES.api.SUCCESS

        };
        sendResponse(response, headers, status);
    };

    next();
};
