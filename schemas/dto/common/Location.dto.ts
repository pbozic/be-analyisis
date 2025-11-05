import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

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

// === Type exports ===
export type Coordinates = z.infer<typeof CoordinatesSchema>;
export type LocationUpdate = z.infer<typeof LocationUpdateSchema>;
export type LocationWithAddress = z.infer<typeof LocationWithAddressSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('Coordinates', CoordinatesSchema);
	registry.register('LocationUpdate', LocationUpdateSchema);
	registry.register('LocationWithAddress', LocationWithAddressSchema);
}
