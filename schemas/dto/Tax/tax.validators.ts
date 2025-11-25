import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Tax Rate Request Schemas
// =======================
export const TaxRateInputSchema = z
	.object({
		name: z.string().min(1),
		description: z.string().nullable().optional(),
		country: z.string().nullable().optional(),
		rate: z.number(),
		active: z.boolean(),
		activated_at: Timestamp.nullable().optional(),
		valid_from: Timestamp,
	})
	.openapi('TaxRateInput');

export type TaxRateInput = z.infer<typeof TaxRateInputSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TaxRateInput', TaxRateInputSchema);
}
