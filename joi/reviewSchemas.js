const Joi = require("joi");

const reviewBusinessSchema = Joi.object({
    business_id: Joi.string().allow(null).optional(),
    driver_id: Joi.string().optional(),
    delivery_driver_id: Joi.string().optional(),
    comment: Joi.string().allow("").optional(),
    rating: Joi.number().optional(),
    feedback: Joi.object().optional(),
});

const reviewUserSchema = Joi.object({
    user_id: Joi.string().required(),
    comment: Joi.string().allow('').optional(),
    rating: Joi.number().optional(),
    feedback: Joi.object().optional(),
});

module.exports = {
    reviewBusinessSchema,
    reviewUserSchema
};