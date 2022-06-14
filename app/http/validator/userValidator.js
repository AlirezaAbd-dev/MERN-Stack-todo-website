const Joi = require('joi')
const joi = require('joi')
require('joi-objectid')

function registerValidator(data) {
    const schema = joi.object({
        user: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(data)
}

function loginValidator(data) {
    const schema = joi.object({
        user: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(data)
}

function todoValidator(data) {
    const schema = joi.object({
        title: Joi.string().required(),
        checked: Joi.boolean().default(false)
    })
    return schema.validate(data)
}

module.exports = { registerValidator, loginValidator, todoValidator}