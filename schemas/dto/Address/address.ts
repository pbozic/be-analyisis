import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.ts';

extendZodWithOpenApi(z);

// === Common Location Schemas (moved from common/Location.dto.ts) ===
// === Coordinates ===
export const CoordinatesSchema = z
	.object({
		latitude: z.number().min(-90).max(90),
		longitude: z.number().min(-180).max(180),
	})
	.openapi({
		title: 'Coordinates',
		description: 'Latitude and longitude coordinates',
	});

// === Location Update ===
export const LocationUpdateSchema = z
	.object({
		coordinates: CoordinatesSchema,
		address: z.string().optional(),
		timestamp: Timestamp.optional(),
		accuracy: z.number().optional(),
		speed: z.number().optional(),
		heading: z.number().optional(),
	})
	.openapi({
		title: 'LocationUpdate',
		description: 'Schema for updating location with coordinates and metadata',
	});

// === Location with Address ===
export const LocationWithAddressSchema = z
	.object({
		address: z.string().min(1),
		coordinates: CoordinatesSchema,
	})
	.openapi({
		title: 'LocationWithAddress',
		description: 'Location with required address and coordinates',
	});

// === Common Address Schemas (moved from common/Address.dto.ts) ===
// === Business Address ===
export const BusinessAddressSchema = z
	.object({
		address: z.string().min(1),
		city: z.string().min(1),
		postal: z.string().min(1),
		country: z.string().length(2).default('SI'),
		latitude: z.number().optional(),
		longitude: z.number().optional(),
	})
	.openapi({
		title: 'BusinessAddress',
		description: 'Business address with coordinates',
	});

export const AddressResponseSchemaFromCommon = BusinessAddressSchema.extend({
	address_id: UUID,
}).openapi({
	title: 'AddressResponse',
	description: 'Business address response with ID',
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
export type Coordinates = z.infer<typeof CoordinatesSchema>;
export type LocationUpdate = z.infer<typeof LocationUpdateSchema>;
export type LocationWithAddress = z.infer<typeof LocationWithAddressSchema>;
export type BusinessAddress = z.infer<typeof BusinessAddressSchema>;
export type AddressWithDetails = z.infer<typeof AddressWithDetailsSchema>;
export type FullAddress = z.infer<typeof FullAddressSchema>;
export type OptionalFullAddress = z.infer<typeof OptionalFullAddressSchema>;
export type BusinessAddressCollection = z.infer<typeof BusinessAddressCollectionSchema>;

// === Address Base Schema (scalars only, no relations) ===
export const AddressBaseSchema = z
	.object({
		address_id: UUID,
		address: z.string().min(1).openapi({ example: 'Trg republike 3, Ljubljana' }),
		latitude: z.string().openapi({ example: '46.0511' }),
		longitude: z.string().openapi({ example: '14.5051' }),
		street: z.string().nullable().openapi({ example: 'Trg republike' }),
		house_number: z.string().nullable().openapi({ example: '3' }),
		city: z.string().nullable().openapi({ example: 'Ljubljana' }),
		country: z.string().nullable().openapi({ example: 'Slovenia' }),
		postal: z.string().nullable().openapi({ example: '1000' }),
	})
	.openapi({
		title: 'AddressBase',
		description: 'Base address schema with all scalar fields',
	});

export type AddressBase = z.infer<typeof AddressBaseSchema>;

// === Address Ref Schema (minimal identity for embedding elsewhere) ===
export const AddressRefSchema = z
	.object({
		address_id: UUID,
		address: z.string().min(1),
		latitude: z.string(),
		longitude: z.string(),
		city: z.string().nullable(),
		postal: z.string().nullable(),
	})
	.openapi({
		title: 'AddressRef',
		description: 'Minimal address reference for embedding in other responses',
	});

export type AddressRef = z.infer<typeof AddressRefSchema>;

// === Address Response Schema (extends Base, no relations to avoid circular imports) ===
export const AddressResponseSchema = AddressBaseSchema.openapi({
	title: 'AddressResponse',
	description: 'Complete address response with all fields',
});

export type AddressResponse = z.infer<typeof AddressResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register common location schemas
	registry.register('Coordinates', CoordinatesSchema);
	registry.register('LocationUpdate', LocationUpdateSchema);
	registry.register('LocationWithAddress', LocationWithAddressSchema);

	// Register common address schemas
	registry.register('BusinessAddress', BusinessAddressSchema);
	registry.register('AddressResponse', AddressResponseSchemaFromCommon);
	registry.register('AddressWithDetails', AddressWithDetailsSchema);
	registry.register('FullAddress', FullAddressSchema);
	registry.register('OptionalFullAddress', OptionalFullAddressSchema);
	registry.register('BusinessAddressCollection', BusinessAddressCollectionSchema);

	// Register address schemas
	registry.register('AddressBase', AddressBaseSchema);
	registry.register('AddressRef', AddressRefSchema);
	registry.register('AddressResponse', AddressResponseSchema);
}
