import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// BusinessType Base Schema - scalars only, no relations
export const BusinessTypeBaseSchema = z.object({
	type_id: UUID,
	name: z.string(),
	description: z.string().nullable(),
	active: z.boolean(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type BusinessTypeBase = z.infer<typeof BusinessTypeBaseSchema>;

// BusinessType Ref Schema - minimal identity for embedding elsewhere
export const BusinessTypeRefSchema = z.object({
	type_id: UUID,
	name: z.string(),
	active: z.boolean(),
});

export type BusinessTypeRef = z.infer<typeof BusinessTypeRefSchema>;

// BusinessType Response Schema - complete
export const BusinessTypeResponseSchema = BusinessTypeBaseSchema;

export type BusinessTypeResponse = z.infer<typeof BusinessTypeResponseSchema>;

// Business to Types Junction Schema
export const BusinessToTypesSchema = z.object({
	business_id: UUID,
	type_id: UUID,
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type BusinessToTypes = z.infer<typeof BusinessToTypesSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register response schemas
	registry.register('BusinessType', BusinessTypeResponseSchema);
	registry.register('BusinessTypeRef', BusinessTypeRefSchema);
	registry.register('BusinessTypeBase', BusinessTypeBaseSchema);
	registry.register('BusinessToTypes', BusinessToTypesSchema);

	// Responses
	registry.register('BusinessTypeResponse', BusinessTypeResponseSchema);
}
