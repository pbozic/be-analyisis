import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { CoordinatesSchema } from './Location.dto.js';

extendZodWithOpenApi(z);

// === Business Address ===
export const BusinessAddressSchema = z
	.object({
		address: z.string().min(1),
		city: z.string().min(1),
		postal_code: z.string().min(1),
		country: z.string().length(2).default('SI'),
		latitude: z.number().optional(),
		longitude: z.number().optional(),
	})
	.openapi({
		title: 'BusinessAddress',
		description: 'Business address with coordinates',
	});

// === Address with Details ===
export const AddressWithDetailsSchema = BusinessAddressSchema.extend({
	details: z.record(z.any()).optional(),
}).openapi({
	title: 'AddressWithDetails',
	description: 'Address with additional details',
});

// === Full Address ===
export const FullAddressSchema = z
	.object({
		line1: z.string().min(1),
		line2: z.string().optional(),
		city: z.string().min(1),
		postalCode: z.string(),
		country: z.string().length(2),
		municipality: z.string().optional(),
		coordinates: CoordinatesSchema.optional(),
	})
	.openapi({
		title: 'FullAddress',
		description: 'Complete address with optional coordinates',
	});

// === Optional Full Address ===
export const OptionalFullAddressSchema = z
	.object({
		line1: z.string().min(1).optional(),
		line2: z.string().optional(),
		city: z.string().min(1).optional(),
		postal_code: z.string().optional(),
		country: z.string().length(2).optional(),
		municipality: z.string().optional(),
		coordinates: CoordinatesSchema.optional(),
	})
	.openapi({
		title: 'OptionalFullAddress',
		description: 'Optional address fields for updates',
	});

// === Address Collections ===
/**
 * Address collection for business registrations
 * Contains business address and optional delivery address
 */
export const BusinessAddressCollectionSchema = z
	.object({
		business: BusinessAddressSchema.optional(),
		delivery: BusinessAddressSchema.optional(),
	})
	.optional()
	.openapi({
		title: 'BusinessAddressCollection',
		description: 'Collection of business addresses including main business address and optional delivery address',
	});

// === Type exports ===
export type BusinessAddress = z.infer<typeof BusinessAddressSchema>;
export type AddressWithDetails = z.infer<typeof AddressWithDetailsSchema>;
export type FullAddress = z.infer<typeof FullAddressSchema>;
export type OptionalFullAddress = z.infer<typeof OptionalFullAddressSchema>;
export type BusinessAddressCollection = z.infer<typeof BusinessAddressCollectionSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BusinessAddress', BusinessAddressSchema);
	registry.register('AddressWithDetails', AddressWithDetailsSchema);
	registry.register('FullAddress', FullAddressSchema);
	registry.register('OptionalFullAddress', OptionalFullAddressSchema);
	registry.register('BusinessAddressCollection', BusinessAddressCollectionSchema);
}
