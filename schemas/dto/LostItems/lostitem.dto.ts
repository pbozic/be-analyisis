import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DOCUMENT_TYPE } from '@prisma/client';

import { CreateFileDataSchema } from '../Files/file.dto.ts';

extendZodWithOpenApi(z);

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

// (Document response schema removed - only create/input schema retained)

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
		user: z
			.object({ user_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }) })
			.optional(),
	})
	.openapi('ReportFoundItemRequest');

// =======================
// Response schemas for Lost Items
// =======================
export type ReportFoundItemRequest = z.infer<typeof ReportFoundItemRequestSchema>;

// Base/Detail
export const LostItemBaseSchema = z
	.object({
		lost_item_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		status: z.string().openapi({ example: 'REPORTED' }),
		description: z.string(),
		image_id: z.string().uuid().nullable().optional(),
		found: z.boolean().default(false),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('LostItemBase');
export type LostItemBase = z.infer<typeof LostItemBaseSchema>;

export const LostItemDetailSchema = LostItemBaseSchema.openapi('LostItemDetail');
export type LostItemDetail = z.infer<typeof LostItemDetailSchema>;

// Mapper
export function toLostItemDetail(row: unknown): LostItemDetail {
	const r = row as {
		lost_item_id: string;
		user_id?: string | null;
		status: string;
		description: string;
		image_id?: string | null;
		found?: boolean | null;
		created_at: string | Date;
		updated_at: string | Date;
	};
	return LostItemDetailSchema.parse({
		lost_item_id: r.lost_item_id,
		user_id: r.user_id ?? null,
		status: r.status,
		description: r.description,
		image_id: r.image_id ?? null,
		found: Boolean(r.found),
		created_at: new Date(r.created_at).toISOString(),
		updated_at: new Date(r.updated_at).toISOString(),
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DocumentCreate', DocumentCreateSchema);
	registry.register('ReportFoundItemImages', ReportFoundItemImagesSchema);
	registry.register('ReportFoundItemRequest', ReportFoundItemRequestSchema);

	// Responses
	registry.register('LostItemBase', LostItemBaseSchema);
	registry.register('LostItemDetail', LostItemDetailSchema);
}
