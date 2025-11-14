import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === File DTOs (Response) ===
export {
	FileBaseSchema,
	FileRefSchema,
	FileResponseSchema,
	type FileBase,
	type FileRef,
	type FileResponse,
	registerSchemas as registerFileSchemas,
} from './file.dto.js';

// === File Validators (Request Body, Query, Params) ===
export {
	CreateFileDataSchema,
	CreateFileBodySchema,
	UpdateFileBodySchema,
	AddFileToDocumentInputSchema,
	AddFilesToDocumentInputSchema,
	UpdateFileInDocumentInputSchema,
	RemoveFileFromDocumentInputSchema,
	RemoveAllFilesFromDocumentInputSchema,
	GetFilesByDocumentIdParamsSchema,
	CreateStandaloneFileInputSchema,
	GetFileParamsSchema,
	UpdateFileByIdInputSchema,
	type CreateFileDataInput,
	type CreateFileBody,
	type UpdateFileBody,
	type AddFileToDocumentInput,
	type AddFilesToDocumentInput,
	type UpdateFileInDocumentInput,
	type RemoveFileFromDocumentInput,
	type RemoveAllFilesFromDocumentInput,
	type GetFilesByDocumentIdParams,
	type CreateStandaloneFileInput,
	type GetFileParams,
	type UpdateFileByIdInput,
	registerSchemas as registerFileValidatorSchemas,
} from './file.validators.js';

// === File Mappers ===
export * from './file.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerFileSchemas(registry);
	registerFileValidatorSchemas(registry);
}
