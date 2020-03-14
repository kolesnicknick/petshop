const Joi = require('joi');

const CreateUserDto = Joi.object().keys({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
});

const UpdateUserDto = Joi.object().keys({
    firstName: Joi.string().min(1),
    lastName: Joi.string().min(1),
    email: Joi.string().email(),
});

module.exports = {
    CreateUserDto,
    UpdateUserDto,
};
