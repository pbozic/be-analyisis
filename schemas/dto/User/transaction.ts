import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// Transaction Base Schema - scalars only, no relations
export const TransactionBaseSchema = z.object({
	transaction_id: UUID,
	user_id: UUID,
	transaction_type: z.string(),
	amount: z.number(),
	currency: z.string().default('RSD'),
	description: z.string().nullable(),
	status: z.string(),
	payment_method: z.string().nullable(),
	external_reference: z.string().nullable(),
	metadata: z.record(z.any()).nullable(),
	created_at: Timestamp,
	updated_at: Timestamp,
});

export type TransactionBase = z.infer<typeof TransactionBaseSchema>;

// Transaction Ref Schema - minimal identity for embedding elsewhere
export const TransactionRefSchema = z.object({
	transaction_id: UUID,
	transaction_type: z.string(),
	amount: z.number(),
	currency: z.string(),
	status: z.string(),
	created_at: Timestamp,
});

export type TransactionRef = z.infer<typeof TransactionRefSchema>;

// Transaction Response Schema - Base with embedded refs
export const TransactionResponseSchema = TransactionBaseSchema;

export type TransactionResponse = z.infer<typeof TransactionResponseSchema>;

// Transaction List Response - for paginated/bulk endpoints
export const TransactionListResponseSchema = z.object({
	data: z.array(TransactionResponseSchema),
	total: z.number().optional(),
	page: z.number().optional(),
	limit: z.number().optional(),
});

export type TransactionListResponse = z.infer<typeof TransactionListResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('TransactionBase', TransactionBaseSchema);
	registry.register('TransactionRef', TransactionRefSchema);

	// Register response schemas
	registry.register('Transaction', TransactionResponseSchema);
	registry.register('TransactionList', TransactionListResponseSchema);

	// Responses
	registry.register('TransactionResponse', TransactionResponseSchema);
}
