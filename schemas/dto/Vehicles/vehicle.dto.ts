import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { VEHICLE_CATEGORY, VEHICLE_CLASS } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives';
import { BasicUserDataSchema } from '../User/user.js';
extendZodWithOpenApi(z);

// =============================
// Vehicle Response DTOs (DAO)
// =============================

export const DriverRefOutSchema = z
	.object({
		driver_id: UUID,
		user: z.lazy(() => BasicUserDataSchema),
	})
	.openapi('DriverRefOut');
export type DriverRefOut = z.infer<typeof DriverRefOutSchema>;

export const DocumentRefSchema = z
	.object({
		document_id: UUID,
		label: z.string().min(1),
	})
	.openapi('DocumentRef');
export type DocumentRef = z.infer<typeof DocumentRefSchema>;

export const VehicleBaseSchema = z
	.object({
		vehicle_id: UUID,
		transport_module_id: UUID.nullable().optional(),
		active: z.boolean().nullable().optional(),
		class: z.nativeEnum(VEHICLE_CLASS).nullable().optional(),
		category: z.nativeEnum(VEHICLE_CATEGORY).nullable().optional(),
		make: z.string().nullable().optional(),
		model: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		license_plate: z.string().nullable().optional(),
		business_premise_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('VehicleBase');
export type VehicleBase = z.infer<typeof VehicleBaseSchema>;

export const VehicleRefSchema = z
	.object({
		vehicle_id: UUID,
		label: z.string().min(1),
	})
	.openapi('VehicleRef');
export type VehicleRef = z.infer<typeof VehicleRefSchema>;

export const VehicleDetailSchema = VehicleBaseSchema.extend({
	current_driver: DriverRefOutSchema.nullable().optional(),
	drivers: z.array(DriverRefOutSchema).optional().default([]),
	documents: z.array(DocumentRefSchema).optional().default([]),
}).openapi('VehicleDetail');
export type VehicleDetail = z.infer<typeof VehicleDetailSchema>;

// Mappers moved to vehicle.mappers.ts

// Driver reference for assignment arrays (used in validators)
export const DriverRefSchema = z
	.object({
		driver_id: UUID,
	})
	.openapi('DriverRef');
export type DriverRef = z.infer<typeof DriverRefSchema>;

// Request schemas moved to vehicle.validators.ts

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DriverRefOut', DriverRefOutSchema);
	registry.register('DocumentRef', DocumentRefSchema);
	registry.register('VehicleBase', VehicleBaseSchema);
	registry.register('VehicleRef', VehicleRefSchema);
	registry.register('VehicleDetail', VehicleDetailSchema);
	registry.register('DriverRef', DriverRefSchema);
}
