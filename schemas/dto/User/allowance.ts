import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// Allowance Base Schema - scalars only, no relations
export const AllowanceBaseSchema = z.object({
	allowance_id: UUID,
	group_user_id: UUID.nullable(),
	business_users_id: UUID.nullable(),
	amount_taxi_wallet: z.number(),
	amount_transfer_wallet: z.number(),
	amount_delivery_wallet: z.number(),
	amount_any_wallet: z.number(),
	amount_taxi_purchase_order: z.number().nullable(),
	amount_transfer_purchase_order: z.number().nullable(),
	amount_delivery_purchase_order: z.number().nullable(),
	amount_any_purchase_order: z.number().nullable(),
	created_at: Timestamp,
	updated_at: Timestamp,
});

export type AllowanceBase = z.infer<typeof AllowanceBaseSchema>;

// Allowance Ref Schema - minimal identity for embedding elsewhere
export const AllowanceRefSchema = z.object({
	allowance_id: UUID,
	amount_taxi_wallet: z.number(),
	amount_transfer_wallet: z.number(),
	amount_delivery_wallet: z.number(),
	amount_any_wallet: z.number(),
});

export type AllowanceRef = z.infer<typeof AllowanceRefSchema>;

// Allowance Response Schema - complete without deep relations
export const AllowanceResponseSchema = AllowanceBaseSchema.extend({
	// Relations would be added as needed but keeping minimal for BusinessUser context
});

export type AllowanceResponse = z.infer<typeof AllowanceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register response schemas
	registry.register('Allowance', AllowanceResponseSchema);
	registry.register('AllowanceRef', AllowanceRefSchema);
	registry.register('AllowanceBase', AllowanceBaseSchema);

	// Responses
	registry.register('AllowanceResponse', AllowanceResponseSchema);
}
