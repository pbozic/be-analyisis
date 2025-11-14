import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { ElectronicDeviceRefSchema } from '../ElectronicDevice/index.js';

extendZodWithOpenApi(z);

// =======================
// Base Schema - scalars only, no relations
// =======================
export const DeviceAssignmentBaseSchema = z
	.object({
		device_assignment_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		driver_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		electronic_device_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		valid_from: Timestamp.openapi({ example: '2025-01-01T08:00:00.000Z' }),
		valid_to: Timestamp.nullable().optional().openapi({ example: '2025-01-02T18:00:00.000Z' }),
		created_at: Timestamp.openapi({ example: '2025-01-01T12:00:00.000Z' }),
	})
	.openapi('DeviceAssignmentBase');

export type DeviceAssignmentBase = z.infer<typeof DeviceAssignmentBaseSchema>;

// =======================
// Ref Schema - minimal identity for embedding elsewhere
// =======================
export const DeviceAssignmentRefSchema = z
	.object({
		device_assignment_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		driver_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		valid_from: Timestamp.openapi({ example: '2025-01-01T08:00:00.000Z' }),
		valid_to: Timestamp.nullable().optional().openapi({ example: '2025-01-02T18:00:00.000Z' }),
	})
	.openapi('DeviceAssignmentRef');

export type DeviceAssignmentRef = z.infer<typeof DeviceAssignmentRefSchema>;

// =======================
// Response Schema with Relations
// =======================
export const DeviceAssignmentResponseSchema = DeviceAssignmentBaseSchema.extend({
	device: ElectronicDeviceRefSchema,
}).openapi('DeviceAssignmentResponse');

export type DeviceAssignmentResponse = z.infer<typeof DeviceAssignmentResponseSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DeviceAssignmentBase', DeviceAssignmentBaseSchema);
	registry.register('DeviceAssignmentRef', DeviceAssignmentRefSchema);
	registry.register('DeviceAssignmentResponse', DeviceAssignmentResponseSchema);
}
