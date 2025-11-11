import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FILE_TYPE } from '@prisma/client';

// Extend Zod with OpenAPI methods
extendZodWithOpenApi(z);

// =======================
// File Base and Ref Schemas
// =======================

export const FileBaseSchema = z
	.object({
		file_id: z.string().uuid(),
		file_type: z.nativeEnum(FILE_TYPE),
		mime_type: z.string(),
		url: z.string().url().nullable(),
		public: z.boolean(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('FileBase');

export const FileRefSchema = FileBaseSchema.pick({
	file_id: true,
	url: true,
	file_type: true,
	mime_type: true,
}).openapi('FileRef');

export type FileBase = z.infer<typeof FileBaseSchema>;
export type FileRef = z.infer<typeof FileRefSchema>;

// =======================
// File DTO Schemas with OpenAPI
// =======================

export const CreateFileDataSchema = z
	.object({
		file_type: z.nativeEnum(FILE_TYPE).openapi({ example: 'IMAGE' }),
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

export const CreateFileBodySchema = z
	.object({
		fileData: CreateFileDataSchema,
	})
	.openapi('CreateFileBody');

export const UpdateFileBodySchema = z
	.object({
		file_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		fileData: CreateFileDataSchema,
	})
	.openapi('UpdateFileBody');

export type CreateFileDataInput = z.infer<typeof CreateFileDataSchema>;
export type CreateFileBody = z.infer<typeof CreateFileBodySchema>;
export type UpdateFileBody = z.infer<typeof UpdateFileBodySchema>;

// -----------------------
// Function-specific input schemas (DAO-level) - named exports
// -----------------------

export const AddFileToDocumentInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		fileData: CreateFileDataSchema,
		isPublic: z.boolean().optional().openapi({ example: false }),
	})
	.openapi('AddFileToDocumentInput');
export type AddFileToDocumentInput = z.infer<typeof AddFileToDocumentInputSchema>;

export const AddFilesToDocumentInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		files: z.union([CreateFileDataSchema, z.array(CreateFileDataSchema)]).openapi({ example: [] }),
	})
	.openapi('AddFilesToDocumentInput');
export type AddFilesToDocumentInput = z.infer<typeof AddFilesToDocumentInputSchema>;

export const UpdateFileInDocumentInputSchema = z
	.object({
		file_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		updateData: CreateFileDataSchema.partial(),
		isPublic: z.boolean().optional().openapi({ example: false }),
	})
	.openapi('UpdateFileInDocumentInput');
export type UpdateFileInDocumentInput = z.infer<typeof UpdateFileInDocumentInputSchema>;

export const RemoveFileFromDocumentInputSchema = z
	.object({
		file_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveFileFromDocumentInput');
export type RemoveFileFromDocumentInput = z.infer<typeof RemoveFileFromDocumentInputSchema>;

export const RemoveAllFilesFromDocumentInputSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('RemoveAllFilesFromDocumentInput');
export type RemoveAllFilesFromDocumentInput = z.infer<typeof RemoveAllFilesFromDocumentInputSchema>;

export const GetFilesByDocumentIdParamsSchema = z
	.object({
		document_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
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
		file_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetFileParams');
export type GetFileParams = z.infer<typeof GetFileParamsSchema>;

export const UpdateFileByIdInputSchema = z
	.object({
		file_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		file_type: z.nativeEnum(FILE_TYPE).optional(),
		mime_type: z.string().optional(),
		url: z.string().url().optional(),
	})
	.openapi('UpdateFileByIdInput');
export type UpdateFileByIdInput = z.infer<typeof UpdateFileByIdInputSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base and ref schemas
	registry.register('FileBase', FileBaseSchema);
	registry.register('FileRef', FileRefSchema);

	registry.register('CreateFileData', CreateFileDataSchema);
	registry.register('CreateFileBody', CreateFileBodySchema);
	registry.register('UpdateFileBody', UpdateFileBodySchema);

	// Register DAO-level file input schemas
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
