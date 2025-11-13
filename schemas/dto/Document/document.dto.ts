import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { FileRefSchema } from '../Files/file.dto.js';

extendZodWithOpenApi(z);

// === Common Document Schemas (moved from common/Document.dto.ts) ===
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

// Base: scalars only
export const DocumentBaseSchema = z
	.object({
		document_id: UUID,
		business_id: UUID.nullable().optional(),
		user_id: UUID.nullable().optional(),
		driver_id: UUID.nullable().optional(),
		vehicle_id: UUID.nullable().optional(),
		delivery_driver_id: UUID.nullable().optional(),
		document_type: z.string().optional(),
		additional_info: z.any().nullable().optional(),
		issue_date: Timestamp.nullable().optional(),
		expiration_date: Timestamp.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DocumentBase');

export type DocumentBase = z.infer<typeof DocumentBaseSchema>;

// Ref: minimal identity
export const DocumentRefSchema = z
	.object({
		document_id: UUID,
	})
	.openapi('DocumentRef');

export type DocumentRef = z.infer<typeof DocumentRefSchema>;

// Response: extends base with files relation (FileRef)
export const DocumentResponseSchema = DocumentBaseSchema.extend({
	files: z.array(FileRefSchema).optional(),
}).openapi('DocumentResponse');

export type DocumentResponse = z.infer<typeof DocumentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register common document schemas
	registry.register('DocumentData', DocumentDataSchema);
	registry.register('FileUpload', FileUploadSchema);
	registry.register('DocumentWithFiles', DocumentWithFilesSchema);
	registry.register('ProfilePictureDocument', ProfilePictureDocumentSchema);

	// Register document schemas
	registry.register('DocumentBase', DocumentBaseSchema);
	registry.register('DocumentRef', DocumentRefSchema);
	registry.register('DocumentResponse', DocumentResponseSchema);
}

export default { DocumentBaseSchema, DocumentRefSchema, DocumentResponseSchema };
