const Joi = require('joi');

const CreateProductDto = Joi.object().keys({
    name: Joi.string(),
    species: Joi.string().required(),
    price: Joi.number().required(),
    gender: Joi.string(),
    weight: Joi.number(),
    birth_date: Joi.number().required(),
    color: Joi.string(),
    breed: Joi.string().required(),
    temper: Joi.string()
    }
);

module.exports = {
    CreateProductDto,
};
