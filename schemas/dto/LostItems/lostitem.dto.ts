import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives';

extendZodWithOpenApi(z);

// Request schemas moved to lostitem.validators.ts

// Base/Detail
export const LostItemBaseSchema = z
	.object({
		lost_item_id: UUID,
		user_id: UUID.nullable().optional(),
		status: z.string().openapi({ example: 'REPORTED' }),
		description: z.string(),
		image_id: UUID.nullable().optional(),
		found: z.boolean().default(false),
		created_at: Timestamp,
		updated_at: Timestamp.optional(),
	})
	.openapi('LostItemBase');
export type LostItemBase = z.infer<typeof LostItemBaseSchema>;

export const LostItemDetailSchema = LostItemBaseSchema.openapi('LostItemDetail');
export type LostItemDetail = z.infer<typeof LostItemDetailSchema>;

export const UpdateLostItemSchema = LostItemBaseSchema.partial()
	.omit({
		created_at: true,
	})
	.openapi('UpdateLostItem');
export type UpdateLostItem = z.infer<typeof UpdateLostItemSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LostItemBase', LostItemBaseSchema);
	registry.register('LostItemDetail', LostItemDetailSchema);
}
