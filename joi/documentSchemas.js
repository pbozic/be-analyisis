import Joi from 'joi';

import { fileSchema } from './fileSchemas.js';
const documentDataSchemaExpirable = Joi.object({
	document_type: Joi.string(),
	expiration_date: Joi.date().iso(),
	additional_info: Joi.object().optional(),
});
const documentDataSchema = Joi.object({
	document_type: Joi.string(),
	expiration_date: Joi.date().iso().optional(),
	additional_info: Joi.object().optional(),
});
const expirableDocumentsArraySchema = Joi.array()
	.items({
		documentData: documentDataSchemaExpirable.required(),
		files: Joi.array().items(fileSchema).required(),
	})
	.required();
const documentsArraySchema = Joi.array()
	.items({
		documentData: documentDataSchema.required(),
		files: Joi.array().items(fileSchema).required(),
	})
	.required();
export { expirableDocumentsArraySchema };
export { documentsArraySchema };
export { documentDataSchemaExpirable };
export { documentDataSchema };
export default {
	expirableDocumentsArraySchema,
	documentsArraySchema,
	documentDataSchemaExpirable,
	documentDataSchema,
};
