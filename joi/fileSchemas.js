const Joi = require('joi');

const fileSchema = Joi.object({
	url: Joi.string().uri(),
	file_type: Joi.string(),
	mime_type: Joi.string(),
	base64: Joi.string(),
});

module.exports = {
	fileSchema,
};
