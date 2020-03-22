const Joi = require('joi');

module.exports = (schema, key = 'body') => (req, res, next) => {
    console.log('Validating USer');
    const { error } = Joi.validate(req[key], schema);

    if (error) {
        return res.send(error);
    }

    next();
};
