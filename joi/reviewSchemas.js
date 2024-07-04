const Joi = require("joi");

const reviewBusinessSchema = Joi.object({
    business_id: Joi.string().required(),
    comment: Joi.string().required(),
    rating: Joi.number().required(),
});
const reviewUserSchema = Joi.object({
    user_id: Joi.string().required(),
    comment: Joi.string().required(),
    rating: Joi.number().required(),
});
module.exports = {
    reviewBusinessSchema,
    reviewUserSchema
};
