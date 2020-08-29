var bunyan = require('bunyan');

const logger = bunyan.createLogger({
    name: 'Reporting Apllication Services API',
    serializers: {
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res,
    },
    src: true,
});

module.exports = logger