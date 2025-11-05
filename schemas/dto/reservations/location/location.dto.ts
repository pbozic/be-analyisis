import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const LocationBaseSchema = z
	.object({
		location_id: UUID,
		reservation_module_id: UUID,
		name: z.string().openapi({ example: 'Main Office' }),
		address_id: UUID.nullable().optional(),
		phone: z.string().nullable().optional().openapi({ example: '+38612345678' }),
		color: z.string().nullable().optional().openapi({ example: '#3B82F6', description: 'Hex color code' }),
		accepts_online: z
			.boolean()
			.openapi({ example: true, description: 'Whether this location accepts online bookings' }),
		closed_on_holidays: z
			.boolean()
			.openapi({ example: true, description: 'Whether this location is closed on holidays' }),
		working_days: z.unknown().openapi({ description: 'Working days configuration' }),
	})
	.openapi({
		title: 'LocationBase',
		description: 'Base location schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const LocationRefSchema = z
	.object({
		location_id: UUID,
		name: z.string().openapi({ example: 'Main Office' }),
		phone: z.string().nullable().optional().openapi({ example: '+38612345678' }),
		color: z.string().nullable().optional().openapi({ example: '#3B82F6' }),
	})
	.openapi({
		title: 'LocationRef',
		description: 'Minimal location reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateLocationRequestSchema = z
	.object({
		name: z.string().min(1, 'Name is required').openapi({ example: 'Main Office' }),
		address: z
			.object({
				address: z.string().min(1).openapi({ example: 'Trg republike 3, Ljubljana' }),
				latitude: z.string().min(1).openapi({ example: '46.0569' }),
				longitude: z.string().min(1).openapi({ example: '14.5058' }),
			})
			.optional()
			.openapi({ description: 'Physical address details' }),
		phone: z.string().optional().nullable().openapi({ example: '+38612345678' }),
		color: z.string().optional().openapi({ example: '#3B82F6' }),
		address_id: UUID.optional(),
		accepts_online: z.boolean().default(false).openapi({ example: true }),
		closed_on_holidays: z.boolean().default(false).openapi({ example: true }),
		working_days: z.any().openapi({ description: 'Working days configuration object' }),
		reservation_module_id: UUID,
	})
	.openapi({
		title: 'CreateLocationRequest',
		description: 'Request schema for creating a new location',
	});

export const UpdateLocationRequestSchema = CreateLocationRequestSchema.partial().openapi({
	title: 'UpdateLocationRequest',
	description: 'Request schema for updating an existing location',
});

export const DeleteLocationRequestSchema = z
	.object({
		location_id: UUID,
	})
	.openapi({
		title: 'DeleteLocationRequest',
		description: 'Request schema for deleting a location',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const LocationResponseSchema = LocationBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
}).openapi({
	title: 'LocationResponse',
	description: 'Complete location response with related entities',
});

// ===== EXPORTED TYPES =====
export type LocationBase = z.infer<typeof LocationBaseSchema>;
export type LocationRef = z.infer<typeof LocationRefSchema>;
export type CreateLocationRequest = z.infer<typeof CreateLocationRequestSchema>;
export type UpdateLocationRequest = z.infer<typeof UpdateLocationRequestSchema>;
export type DeleteLocationRequest = z.infer<typeof DeleteLocationRequestSchema>;
export type LocationResponse = z.infer<typeof LocationResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LocationBase', LocationBaseSchema);
	registry.register('LocationRef', LocationRefSchema);
	registry.register('CreateLocationRequest', CreateLocationRequestSchema);
	registry.register('UpdateLocationRequest', UpdateLocationRequestSchema);
	registry.register('DeleteLocationRequest', DeleteLocationRequestSchema);
	registry.register('LocationResponse', LocationResponseSchema);
}
