import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === DeviceAssignment DTOs (Response) ===
export {
	DeviceAssignmentBaseSchema,
	DeviceAssignmentRefSchema,
	DeviceAssignmentResponseSchema,
	type DeviceAssignmentBase,
	type DeviceAssignmentRef,
	type DeviceAssignmentResponse,
	registerSchemas as registerDeviceAssignmentSchemas,
} from './deviceAssignment.dto.js';

// === DeviceAssignment Validators (Request Body, Query, Params) ===
export {
	AssignDeviceToDriverRequestSchema,
	EndDeviceAssignmentRequestSchema,
	type AssignDeviceToDriverRequest,
	type EndDeviceAssignmentRequest,
	registerSchemas as registerDeviceAssignmentValidatorSchemas,
} from './deviceAssignment.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDeviceAssignmentSchemas(registry);
	registerDeviceAssignmentValidatorSchemas(registry);
}
