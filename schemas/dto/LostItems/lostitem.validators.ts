import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DOCUMENT_TYPE } from '@prisma/client';

import { CreateFileDataSchema } from '../Files';

extendZodWithOpenApi(z);

// Request schemas moved from lostitem.dto.ts

// =======================
// Document DTOs (used when reporting images)
// =======================
export const DocumentCreateSchema = z
	.object({
		document_type: z.nativeEnum(DOCUMENT_TYPE).openapi({ example: DOCUMENT_TYPE.LOST_ITEM }),
		public: z.boolean().optional().default(false),
		expiration_date: z.string().datetime().optional().nullable(),
		issue_date: z.string().datetime().optional().nullable(),
		additional_info: z.any().optional(),
	})
	.openapi('DocumentCreate');

// =======================
// Request schemas for Lost Items
// =======================
export const ReportFoundItemImagesSchema = z
	.object({
		documentData: DocumentCreateSchema,
		files: z.array(CreateFileDataSchema).openapi({ example: [] }),
	})
	.openapi('ReportFoundItemImages');

export const ReportFoundItemRequestSchema = z
	.object({
		description: z.string().min(1).openapi({ example: 'Black wallet found near Main Street' }),
		found: z.boolean().optional().openapi({ example: true }),
		images: ReportFoundItemImagesSchema.optional(),
		// The controller expects a user object with at least user_id when calling the DAO.
		user: z.object({ user_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }) }),
	})
	.openapi('ReportFoundItemRequest');

export type ReportFoundItemRequest = z.infer<typeof ReportFoundItemRequestSchema>;

export const UpdateLostItemRequestSchema = z
	.object({
		description: z.string().min(1).optional(),
		status: z.string().min(1).optional(),
	})
	.openapi('UpdateLostItem');

export type UpdateLostItemRequest = z.infer<typeof UpdateLostItemRequestSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DocumentCreate', DocumentCreateSchema);
	registry.register('ReportFoundItemImages', ReportFoundItemImagesSchema);
	registry.register('ReportFoundItemRequest', ReportFoundItemRequestSchema);
	registry.register('UpdateLostItemRequest', UpdateLostItemRequestSchema);
}
