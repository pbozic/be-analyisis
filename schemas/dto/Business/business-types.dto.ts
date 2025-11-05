import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Business Type DTOs
// =======================

export const BusinessTypeSchema = z
	.object({
		type_id: UUID,
		type: z.string(),
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('BusinessType');
export type BusinessType = z.infer<typeof BusinessTypeSchema>;

// Junction: business_to_types linking a business to a type
export const BusinessToTypesSchema = z
	.object({
		business_id: UUID,
		type_id: UUID,
		created_at: z.string().datetime().optional(),
		updated_at: z.string().datetime().optional(),
	})
	.openapi('BusinessToTypes');
export type BusinessToTypes = z.infer<typeof BusinessToTypesSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BusinessType', BusinessTypeSchema);
	registry.register('BusinessToTypes', BusinessToTypesSchema);
}
