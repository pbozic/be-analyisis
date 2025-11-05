import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { AddressRefSchema } from '../Address/address.js';
import { BusinessUserRefSchema } from '../BusinessUser/businessUser.js';
import { BusinessTypeRefSchema } from './businessType.js';

extendZodWithOpenApi(z);

// Business Base Schema - scalars only, no relations
export const BusinessBaseSchema = z.object({
	business_id: UUID,
	address_id: UUID.nullable(),
	is_business_unit: z.boolean(),
	business_group_name: z.string().nullable(),
	name: z.string(),
	description: z.string().nullable(),
	tax_id: z.string(),
	registration_id: z.string(),
	email: z.string().email(),
	telephone: z.string(),
	telephone_code: z.string(),
	website_url: z.string().nullable(),
	working_hours: z.record(z.any()).nullable(),
	popular: z.boolean(),
	new: z.boolean(),
	parent_business_id: UUID.nullable(),
	stripe_account_id: z.string().nullable(),
	stripe_customer_id: z.string().nullable(),
	word_buy_stripe_subscription_id: z.string().nullable(),
	first_activated_at: z.string().datetime().nullable(),
	active: z.boolean(),
	sales_representative_id: z.string().nullable(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type BusinessBase = z.infer<typeof BusinessBaseSchema>;

// Business Ref Schema - minimal identity for embedding elsewhere
export const BusinessRefSchema = z.object({
	business_id: UUID,
	name: z.string(),
	email: z.string().email(),
	telephone: z.string(),
	active: z.boolean(),
});

export type BusinessRef = z.infer<typeof BusinessRefSchema>;

// Business Response Schema - complete with embedded refs
export const BusinessResponseSchema = BusinessBaseSchema.extend({
	address: AddressRefSchema.nullable(),
	parent_business: BusinessBaseSchema.nullable(),
	child_businesses: z.array(BusinessBaseSchema).optional(),
	business_users: z.array(BusinessUserRefSchema).optional(),
	types: z.array(BusinessTypeRefSchema).optional(),
	// Additional computed fields that might be added in controllers
	paymentMethods: z.array(z.any()).optional(),
});

export type BusinessResponse = z.infer<typeof BusinessResponseSchema>;

// Business List Response Schema for listing endpoints
export const BusinessListResponseSchema = z.array(BusinessResponseSchema);

export type BusinessListResponse = z.infer<typeof BusinessListResponseSchema>;

// Business Search Response Schema - simplified for search results
export const BusinessSearchResponseSchema = z.object({
	business_id: UUID,
	name: z.string(),
	description: z.string().nullable(),
	email: z.string().email(),
	telephone: z.string(),
	website_url: z.string().nullable(),
	active: z.boolean(),
	popular: z.boolean(),
	new: z.boolean(),
	address: AddressRefSchema.nullable(),
});

export type BusinessSearchResponse = z.infer<typeof BusinessSearchResponseSchema>;

// Business Admin Response Schema - includes sensitive admin data
export const BusinessAdminResponseSchema = BusinessResponseSchema.extend({
	stripe_account_id: z.string().nullable(),
	stripe_customer_id: z.string().nullable(),
	word_buy_stripe_subscription_id: z.string().nullable(),
	sales_representative_id: z.string().nullable(),
	tax_id: z.string(),
	registration_id: z.string(),
});

export type BusinessAdminResponse = z.infer<typeof BusinessAdminResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register response schemas
	registry.register('Business', BusinessResponseSchema);
	registry.register('BusinessRef', BusinessRefSchema);
	registry.register('BusinessBase', BusinessBaseSchema);
	registry.register('BusinessList', BusinessListResponseSchema);
	registry.register('BusinessSearch', BusinessSearchResponseSchema);
	registry.register('BusinessAdmin', BusinessAdminResponseSchema);

	// Responses
	registry.register('BusinessResponse', BusinessResponseSchema);
	registry.register('BusinessListResponse', BusinessListResponseSchema);
	registry.register('BusinessSearchResponse', BusinessSearchResponseSchema);
	registry.register('BusinessAdminResponse', BusinessAdminResponseSchema);
}
