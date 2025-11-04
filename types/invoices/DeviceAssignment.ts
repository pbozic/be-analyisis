import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ElectronicDevice } from './ElectronicDevice.js';
import { ElectronicDeviceResponseSchema } from './ElectronicDevice';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDeviceAssignmentSchema = z
	.object({
		device_assignment_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		business_premise_id: z.string().uuid(),
		electronic_device_id: z.string().uuid(),
		valid_from: z.unknown(),
		valid_to: z.unknown().nullable().optional(),
	})
	.openapi('CreateDeviceAssignment');

export type CreateDeviceAssignmentInput = z.infer<typeof CreateDeviceAssignmentSchema>;

export const UpdateDeviceAssignmentSchema = CreateDeviceAssignmentSchema.partial().openapi('UpdateDeviceAssignment');
export type UpdateDeviceAssignmentInput = z.infer<typeof UpdateDeviceAssignmentSchema>;

export const DeviceAssignmentResponseSchema = z
	.object({
		device_assignment_id: z.string(),
		driver_id: z.string(),
		business_premise_id: z.string(),
		electronic_device_id: z.string(),
		valid_from: z.string().datetime(),
		valid_to: z.string().datetime().nullable().optional(),
		device: ElectronicDeviceResponseSchema,
		created_at: z.string().datetime(),
	})
	.openapi('DeviceAssignmentResponse');

export type DeviceAssignmentResponse = z.infer<typeof DeviceAssignmentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDeviceAssignment', CreateDeviceAssignmentSchema);
	registry.register('UpdateDeviceAssignment', UpdateDeviceAssignmentSchema);
	registry.register('DeviceAssignmentResponse', DeviceAssignmentResponseSchema);
}

export type DeviceAssignment = {
	device_assignment_id: string;
	driver_id: string;
	business_premise_id: string;
	electronic_device_id: string;
	valid_from: Date;
	valid_to?: Date | null;
	device?: ElectronicDevice;
	created_at: Date;
};
