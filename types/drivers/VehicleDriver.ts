// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Vehicle } from '../vehicles/Vehicle.js';
import type { Driver } from './Driver.js';
import { VehicleResponseSchema } from '../vehicles/Vehicle';
import { DriverResponseSchema } from './Driver';

extendZodWithOpenApi(z);

export const CreateVehicleDriverSchema = z
	.object({
		vehicle_drivers_id: z.string().uuid(),
		vehicle_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		can_drive: z.boolean(),
	})
	.openapi('CreateVehicleDriver');

export type CreateVehicleDriverInput = z.infer<typeof CreateVehicleDriverSchema>;

export const UpdateVehicleDriverSchema = CreateVehicleDriverSchema.partial().openapi('UpdateVehicleDriver');
export type UpdateVehicleDriverInput = z.infer<typeof UpdateVehicleDriverSchema>;

export const VehicleDriverResponseSchema = z
	.object({
		vehicle_drivers_id: z.string(),
		vehicle_id: z.string(),
		driver_id: z.string(),
		can_drive: z.boolean(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		vehicle: VehicleResponseSchema,
		driver: DriverResponseSchema,
	})
	.openapi('VehicleDriverResponse');

export type VehicleDriverResponse = z.infer<typeof VehicleDriverResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateVehicleDriver', CreateVehicleDriverSchema);
	registry.register('UpdateVehicleDriver', UpdateVehicleDriverSchema);
	registry.register('VehicleDriverResponse', VehicleDriverResponseSchema);
}

export type VehicleDriver = {
	vehicle_drivers_id: string;
	vehicle_id: string;
	driver_id: string;
	can_drive: boolean;
	created_at: Date;
	updated_at: Date;
	vehicle?: Vehicle;
	driver?: Driver;
};
