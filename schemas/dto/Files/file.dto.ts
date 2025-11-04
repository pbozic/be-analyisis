import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FILE_TYPE } from '@prisma/client';

// Extend Zod with OpenAPI methods
extendZodWithOpenApi(z);

// =======================
// File DTO Schemas with OpenAPI
// =======================

export const CreateFileDataSchema = z
	.object({
		file_type: z.nativeEnum(FILE_TYPE).openapi({ example: FILE_TYPE.OTHER }),
		mime_type: z.string().openapi({ example: 'image/png' }),
		base64: z.string().openapi({ example: 'iVBORw0KGgoAAAANSUhEUgAA...' }),
		public: z.boolean().optional().default(false).openapi({ example: false }),
		url: z.string().url().optional().openapi({ example: 'https://s3.amazonaws.com/.../file.png' }),
		// Optional relation ids
		document_id: z.string().uuid().optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		user_id: z.string().uuid().optional().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
		driver_id: z.string().uuid().optional().openapi({ example: 'aa0e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('CreateFileData');

export const CreateFileBodySchema = z.object({
	fileData: CreateFileDataSchema,
}).openapi('CreateFileBody');

export const UpdateFileBodySchema = z
	.object({
		file_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		fileData: CreateFileDataSchema,
	})
	.openapi('UpdateFileBody');

export type CreateFileDataInput = z.infer<typeof CreateFileDataSchema>;
export type CreateFileBody = z.infer<typeof CreateFileBodySchema>;
export type UpdateFileBody = z.infer<typeof UpdateFileBodySchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateFileData', CreateFileDataSchema);
	registry.register('CreateFileBody', CreateFileBodySchema);
	registry.register('UpdateFileBody', UpdateFileBodySchema);
}
