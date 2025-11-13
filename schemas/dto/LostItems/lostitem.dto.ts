import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// Request schemas moved to lostitem.validators.ts

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

// Mappers moved to lostitem.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LostItemBase', LostItemBaseSchema);
	registry.register('LostItemDetail', LostItemDetailSchema);
}
