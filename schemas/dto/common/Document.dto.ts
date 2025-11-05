import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// === Document Data ===
export const DocumentDataSchema = z
	.object({
		document_type: z.string().min(1),
		issue_date: z.string().date().optional(),
		expiration_date: z.string().date().optional(),
		additional_info: z.string().optional(),
		public: z.boolean().optional(),
	})
	.openapi({
		title: 'DocumentData',
		description: 'Schema for document metadata',
	});

// === File Upload ===
export const FileUploadSchema = z
	.object({
		name: z.string().min(1),
		mime_type: z.string().min(1),
		base64: z.string().min(1),
		file_type: z.string().optional(),
		public: z.boolean().optional(),
	})
	.openapi({
		title: 'FileUpload',
		description: 'Schema for file upload with base64 data',
	});

// === Document with Files ===
export const DocumentWithFilesSchema = z
	.object({
		documentData: DocumentDataSchema,
		files: z.array(FileUploadSchema),
	})
	.openapi({
		title: 'DocumentWithFiles',
		description: 'Complete document with associated files',
	});

// === Profile Picture Document ===
export const ProfilePictureDocumentSchema = z
	.object({
		image: z.object({
			documentData: z.object({
				document_type: z.literal('PROFILE_PICTURE'),
				public: z.boolean().default(true),
			}),
			files: z
				.array(
					z.object({
						file_type: z.string(),
						mime_type: z.string(),
						base64: z.string(),
					})
				)
				.min(1),
		}),
	})
	.openapi({
		title: 'ProfilePictureDocument',
		description: 'Schema for profile picture document with files',
	});

// === Type exports ===
export type DocumentData = z.infer<typeof DocumentDataSchema>;
export type FileUpload = z.infer<typeof FileUploadSchema>;
export type DocumentWithFiles = z.infer<typeof DocumentWithFilesSchema>;
export type ProfilePictureDocument = z.infer<typeof ProfilePictureDocumentSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DocumentData', DocumentDataSchema);
	registry.register('FileUpload', FileUploadSchema);
	registry.register('DocumentWithFiles', DocumentWithFilesSchema);
	registry.register('ProfilePictureDocument', ProfilePictureDocumentSchema);
}
