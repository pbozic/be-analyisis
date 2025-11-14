import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Request Schemas (used in routes with validate())
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

// UpdateDeviceAssignmentSchema is in Driver/driver.validators.ts (used by driver routes)
// Import it from there if needed, or move it here if it's more appropriate

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('AssignDeviceToDriverRequest', AssignDeviceToDriverRequestSchema);
	registry.register('EndDeviceAssignmentRequest', EndDeviceAssignmentRequestSchema);
}
