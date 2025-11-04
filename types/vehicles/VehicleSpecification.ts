import { VEHICLE_CATEGORY, VEHICLE_CLASS } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Vehicle } from './Vehicle.js';
import { VehicleResponseSchema } from './Vehicle';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type VehicleSpecification = {
	vehicle_specification_id: string;
	class: VEHICLE_CLASS;
	category: VEHICLE_CATEGORY;
	people: string;
	start_cost: string;
	per_kilometre: string;
	per_minute: string;
	vehicle_id?: string | null;
	vehicle?: Vehicle | null;
};

export const CreateVehicleSpecificationSchema = z
	.object({
		vehicle_specification_id: z.string().uuid(),
		class: z.nativeEnum(VEHICLE_CLASS),
		category: z.nativeEnum(VEHICLE_CATEGORY),
		people: z.string(),
		start_cost: z.string(),
		per_kilometre: z.string(),
		per_minute: z.string(),
		vehicle_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateVehicleSpecification');

export type CreateVehicleSpecificationInput = z.infer<typeof CreateVehicleSpecificationSchema>;

export const UpdateVehicleSpecificationSchema =
	CreateVehicleSpecificationSchema.partial().openapi('UpdateVehicleSpecification');
export type UpdateVehicleSpecificationInput = z.infer<typeof UpdateVehicleSpecificationSchema>;

export const VehicleSpecificationResponseSchema = z
	.object({
		vehicle_specification_id: z.string(),
		class: z.nativeEnum(VEHICLE_CLASS),
		category: z.nativeEnum(VEHICLE_CATEGORY),
		people: z.string(),
		start_cost: z.string(),
		per_kilometre: z.string(),
		per_minute: z.string(),
		vehicle_id: z.string().nullable().optional(),
		vehicle: VehicleResponseSchema.nullable().optional(),
	})
	.openapi('VehicleSpecificationResponse');

export type VehicleSpecificationResponse = z.infer<typeof VehicleSpecificationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateVehicleSpecification', CreateVehicleSpecificationSchema);
	registry.register('UpdateVehicleSpecification', UpdateVehicleSpecificationSchema);
	registry.register('VehicleSpecificationResponse', VehicleSpecificationResponseSchema);
}
