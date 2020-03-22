const Joi = require('joi');

const LoginDto = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
});
