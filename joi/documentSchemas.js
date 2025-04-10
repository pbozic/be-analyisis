const Joi = require("joi");
const { fileSchema } = require("./fileSchemas");

const documentDataSchemaExpirable = Joi.object({
	document_type: Joi.string(),
	expiration_date: Joi.date().iso(),
	additional_info: Joi.object().optional()
});

const documentDataSchema = Joi.object({
	document_type: Joi.string(),
	expiration_date: Joi.date().iso().optional(),
	additional_info: Joi.object().optional()
});

const expirableDocumentsArraySchema = Joi.object({
	documentData: documentDataSchemaExpirable.required(),
	files: Joi.array().items(fileSchema).required()
})
const documentsArraySchema = Joi.object({
	documentData: documentDataSchema.required(),
	files: Joi.array().items(fileSchema).required()
})

module.exports = {
	expirableDocumentsArraySchema,
	documentsArraySchema,
	documentDataSchemaExpirable,
	documentDataSchema,
};