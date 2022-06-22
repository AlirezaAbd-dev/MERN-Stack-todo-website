const winston = require("winston")

module.exports = (error, req, res, next) => {
    console.log(error.stack)
    winston.error(error.message, error)
    res.status(500).send('خطایی سمت سرور رخ داده است!')
  };
