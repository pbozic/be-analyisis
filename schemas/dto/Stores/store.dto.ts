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
export const StoresModuleRefSchema = StoreBaseSchema.pick({
	stores_id: true,
	enabled: true,
	online: true,
	overwhelmed: true,
}).openapi('StoresModuleRef');
export type StoresModuleRef = z.infer<typeof StoresModuleRefSchema>;
export const StoreDetailSchema = StoreBaseSchema.openapi('StoreDetail');
export type StoreDetail = z.infer<typeof StoreDetailSchema>;

// Mappers moved to store.mappers.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('StoreBase', StoreBaseSchema);
	registry.register('StoresModuleRef', StoresModuleRefSchema);
	registry.register('StoreDetail', StoreDetailSchema);
}
