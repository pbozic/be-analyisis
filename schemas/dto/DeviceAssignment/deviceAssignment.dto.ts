import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { ElectronicDeviceRefSchema } from '../ElectronicDevice';

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
// Request Schemas
// =======================
export const AssignDeviceToDriverRequestSchema = z
	.object({
		driver_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		electronic_device_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		valid_from: Timestamp.optional().openapi({ example: '2025-01-01T08:00:00.000Z' }),
	})
	.openapi('AssignDeviceToDriverRequest');

export type AssignDeviceToDriverRequest = z.infer<typeof AssignDeviceToDriverRequestSchema>;

export const EndDeviceAssignmentRequestSchema = z
	.object({
		driver_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		electronic_device_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
	})
	.openapi('EndDeviceAssignmentRequest');

export type EndDeviceAssignmentRequest = z.infer<typeof EndDeviceAssignmentRequestSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerDeviceAssignmentSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('DeviceAssignmentBase', DeviceAssignmentBaseSchema);
	registry.register('DeviceAssignmentRef', DeviceAssignmentRefSchema);

	// Register request schemas
	registry.register('AssignDeviceToDriverRequest', AssignDeviceToDriverRequestSchema);
	registry.register('EndDeviceAssignmentRequest', EndDeviceAssignmentRequestSchema);

	// Register response schemas
	registry.register('DeviceAssignment', DeviceAssignmentResponseSchema);
	registry.register('DeviceAssignmentResponse', DeviceAssignmentResponseSchema);
}
