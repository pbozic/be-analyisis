import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp, UUID } from '../../primitives.js';
import { BusinessRefSchema } from '../Business/index.js';
import { TaxiOrderRefSchema } from '../TaxiOrders/taxiOrder.dto.js';

extendZodWithOpenApi(z);

// BusinessClient Base Schema - scalars only, no relations
export const BusinessClientBaseSchema = z.object({
	business_clients_id: UUID,
	created_at: Timestamp,
	updated_at: Timestamp,
	crm_module_id: UUID,
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	telephone: z.string(),
	telephone_code: z.string(),
});

export type BusinessClientBase = z.infer<typeof BusinessClientBaseSchema>;

// BusinessClient Ref Schema - minimal identity for embedding elsewhere
export const BusinessClientRefSchema = z.object({
	business_clients_id: UUID,
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	telephone: z.string(),
});

export type BusinessClientRef = z.infer<typeof BusinessClientRefSchema>;

// BusinessClient Response Schema - Base with embedded refs
export const BusinessClientResponseSchema = BusinessClientBaseSchema;

// BusinessClient with Business - for functions that include business
export const BusinessClientWithBusinessResponseSchema = BusinessClientResponseSchema.extend({
	business: z.lazy(() => BusinessRefSchema),
});

// BusinessClient with Taxi Orders - for functions that include taxi_orders
export const BusinessClientWithOrdersResponseSchema = BusinessClientResponseSchema.extend({
	taxi_orders: z.array(TaxiOrderRefSchema).nullable(),
});

// BusinessClient Detail - for functions with full includes (business + taxi_orders)
export const BusinessClientDetailResponseSchema = BusinessClientResponseSchema.extend({
	business: z.lazy(() => BusinessRefSchema),
	taxi_orders: z.array(TaxiOrderRefSchema).nullable(),
});

// BusinessClient List Response - for paginated/bulk endpoints
export const BusinessClientListResponseSchema = z.object({
	data: z.array(BusinessClientResponseSchema),
	total: z.number().optional(),
	page: z.number().optional(),
	limit: z.number().optional(),
});

export type BusinessClientResponse = z.infer<typeof BusinessClientResponseSchema>;
export type BusinessClientWithBusinessResponse = z.infer<typeof BusinessClientWithBusinessResponseSchema>;
export type BusinessClientWithOrdersResponse = z.infer<typeof BusinessClientWithOrdersResponseSchema>;
export type BusinessClientDetailResponse = z.infer<typeof BusinessClientDetailResponseSchema>;
export type BusinessClientListResponse = z.infer<typeof BusinessClientListResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('BusinessClientBase', BusinessClientBaseSchema);
	registry.register('BusinessClientRef', BusinessClientRefSchema);

	// Register response schemas
	registry.register('BusinessClient', BusinessClientResponseSchema);
	registry.register('BusinessClientWithBusiness', BusinessClientWithBusinessResponseSchema);
	registry.register('BusinessClientWithOrders', BusinessClientWithOrdersResponseSchema);
	registry.register('BusinessClientDetail', BusinessClientDetailResponseSchema);
	registry.register('BusinessClientList', BusinessClientListResponseSchema);

	// Responses
	registry.register('BusinessClientResponse', BusinessClientResponseSchema);
}
