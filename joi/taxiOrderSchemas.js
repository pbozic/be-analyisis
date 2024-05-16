const Joi = require("joi");

const createOrderSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
});

module.exports = {
    createOrderSchema,
};
