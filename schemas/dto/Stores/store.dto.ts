import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Stores Controller Input Schemas
// =======================

export const StoreOnlineBodySchema = z.object({ online: z.boolean() }).openapi('StoreOnlineBody');
export type StoreOnlineBody = z.infer<typeof StoreOnlineBodySchema>;

export const StoreOverwhelmedBodySchema = z.object({ overwhelmed: z.boolean() }).openapi('StoreOverwhelmedBody');
export type StoreOverwhelmedBody = z.infer<typeof StoreOverwhelmedBodySchema>;

export const StoreBaseSchema = z
	.object({
		stores_id: UUID,
		enabled: z.boolean().optional(),
		online: z.boolean().optional(),
		overwhelmed: z.boolean().optional(),
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

export function toStoreDetail(row: unknown): StoreDetail {
	const r = row as {
		stores_id: string;
		enabled?: boolean;
		online?: boolean;
		overwhelmed?: boolean;
		created_at?: string | Date | null;
		updated_at?: string | Date | null;
	};
	return StoreDetailSchema.parse({
		stores_id: r.stores_id,
		enabled: r.enabled,
		online: r.online,
		overwhelmed: r.overwhelmed,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('StoreOnlineBody', StoreOnlineBodySchema);
	registry.register('StoreOverwhelmedBody', StoreOverwhelmedBodySchema);

	registry.register('StoreBase', StoreBaseSchema);
	registry.register('StoreDetail', StoreDetailSchema);
}
