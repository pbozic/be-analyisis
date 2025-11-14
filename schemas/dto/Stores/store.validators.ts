import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// =======================
// Stores Controller Input Schemas
// =======================
export const StoreOnlineBodySchema = z.object({ online: z.boolean() }).openapi('StoreOnlineBody');
export type StoreOnlineBody = z.infer<typeof StoreOnlineBodySchema>;

export const StoreOverwhelmedBodySchema = z.object({ overwhelmed: z.boolean() }).openapi('StoreOverwhelmedBody');
export type StoreOverwhelmedBody = z.infer<typeof StoreOverwhelmedBodySchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('StoreOnlineBody', StoreOnlineBodySchema);
	registry.register('StoreOverwhelmedBody', StoreOverwhelmedBodySchema);
}
