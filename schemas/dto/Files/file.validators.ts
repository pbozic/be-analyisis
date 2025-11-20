import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FILE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Request Schemas (used in routes with validate())
// =======================
export const CreateFileDataSchema = z
	.object({
		file_type: z.nativeEnum(FILE_TYPE).openapi({ example: 'IMAGE' }),
		mime_type: z.string().openapi({ example: 'image/png' }),
		base64: z.string().openapi({ example: 'iVBORw0KGgoAAAANSUhEUgAA...' }),
		public: z.boolean().optional().default(false).openapi({ example: false }),
		url: z.string().url().optional().openapi({ example: 'https://s3.amazonaws.com/.../file.png' }),
		// Optional relation ids
		document_id: UUID.optional(),
		user_id: UUID.optional(),
		driver_id: UUID.optional(),
	})
	.openapi('CreateFileData');

export const CreateFileBodySchema = z
	.object({
		fileData: CreateFileDataSchema,
	})
	.openapi('CreateFileBody');

export const UpdateFileBodySchema = z
	.object({
		file_id: UUID,
		fileData: CreateFileDataSchema,
	})
	.openapi('UpdateFileBody');

export type CreateFileDataInput = z.infer<typeof CreateFileDataSchema>;
export type CreateFileBody = z.infer<typeof CreateFileBodySchema>;
export type UpdateFileBody = z.infer<typeof UpdateFileBodySchema>;

// =======================
// DAO-level Input Schemas
// =======================
export const AddFileToDocumentInputSchema = z
	.object({
		document_id: UUID,
		fileData: CreateFileDataSchema,
		isPublic: z.boolean().optional().openapi({ example: false }),
	})
	.openapi('AddFileToDocumentInput');
export type AddFileToDocumentInput = z.infer<typeof AddFileToDocumentInputSchema>;

export const AddFilesToDocumentInputSchema = z
	.object({
		document_id: UUID,
		files: z.union([CreateFileDataSchema, z.array(CreateFileDataSchema)]).openapi({ example: [] }),
	})
	.openapi('AddFilesToDocumentInput');
export type AddFilesToDocumentInput = z.infer<typeof AddFilesToDocumentInputSchema>;

export const UpdateFileInDocumentInputSchema = z
	.object({
		file_id: UUID,
		updateData: CreateFileDataSchema.partial(),
		isPublic: z.boolean().optional().openapi({ example: false }),
	})
	.openapi('UpdateFileInDocumentInput');
export type UpdateFileInDocumentInput = z.infer<typeof UpdateFileInDocumentInputSchema>;

export const RemoveFileFromDocumentInputSchema = z
	.object({
		file_id: UUID,
	})
	.openapi('RemoveFileFromDocumentInput');
export type RemoveFileFromDocumentInput = z.infer<typeof RemoveFileFromDocumentInputSchema>;

export const RemoveAllFilesFromDocumentInputSchema = z
	.object({
		document_id: UUID,
	})
	.openapi('RemoveAllFilesFromDocumentInput');
export type RemoveAllFilesFromDocumentInput = z.infer<typeof RemoveAllFilesFromDocumentInputSchema>;

export const GetFilesByDocumentIdParamsSchema = z
	.object({
		document_id: UUID,
	})
	.openapi('GetFilesByDocumentIdParams');
export type GetFilesByDocumentIdParams = z.infer<typeof GetFilesByDocumentIdParamsSchema>;

export const CreateStandaloneFileInputSchema = z
	.object({
		file_type: z.nativeEnum(FILE_TYPE).openapi({ example: FILE_TYPE.IMAGE }),
		mime_type: z.string().openapi({ example: 'image/png' }),
		isPublic: z.boolean().optional().openapi({ example: false }),
	})
	.openapi('CreateStandaloneFileInput');
export type CreateStandaloneFileInput = z.infer<typeof CreateStandaloneFileInputSchema>;

export const GetFileParamsSchema = z
	.object({
		file_id: UUID,
	})
	.openapi('GetFileParams');
export type GetFileParams = z.infer<typeof GetFileParamsSchema>;

export const UpdateFileByIdInputSchema = z
	.object({
		file_id: UUID,
		file_type: z.nativeEnum(FILE_TYPE).optional(),
		mime_type: z.string().optional(),
		url: z.string().url().optional(),
	})
	.openapi('UpdateFileByIdInput');
export type UpdateFileByIdInput = z.infer<typeof UpdateFileByIdInputSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateFileData', CreateFileDataSchema);
	registry.register('CreateFileBody', CreateFileBodySchema);
	registry.register('UpdateFileBody', UpdateFileBodySchema);
	registry.register('AddFileToDocumentInput', AddFileToDocumentInputSchema);
	registry.register('AddFilesToDocumentInput', AddFilesToDocumentInputSchema);
	registry.register('UpdateFileInDocumentInput', UpdateFileInDocumentInputSchema);
	registry.register('RemoveFileFromDocumentInput', RemoveFileFromDocumentInputSchema);
	registry.register('RemoveAllFilesFromDocumentInput', RemoveAllFilesFromDocumentInputSchema);
	registry.register('GetFilesByDocumentIdParams', GetFilesByDocumentIdParamsSchema);
	registry.register('CreateStandaloneFileInput', CreateStandaloneFileInputSchema);
	registry.register('GetFileParams', GetFileParamsSchema);
	registry.register('UpdateFileByIdInput', UpdateFileByIdInputSchema);
}
