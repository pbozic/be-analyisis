import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// Request schemas moved to store.validators.ts

export const StoreBaseSchema = z
	.object({
		stores_id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'SMabc123def45678', description: 'Public link hash' }),
		enabled: z.boolean().optional(),
		online: z.boolean().optional(),
		overwhelmed: z.boolean().optional(),
		minimum_order: z.number().int().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('StoreBase');
export type StoreBase = z.infer<typeof StoreBaseSchema>;

export const StoreDetailSchema = StoreBaseSchema.openapi('StoreDetail');
export type StoreDetail = z.infer<typeof StoreDetailSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('StoreBase', StoreBaseSchema);
	registry.register('StoreDetail', StoreDetailSchema);
}
