import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';
import { EmployeeRefSchema } from '../employee/employee.dto.js';
import { ServiceRefSchema } from '../service/service.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ServiceAssignmentBaseSchema = z
	.object({
		employee_id: UUID,
		service_id: UUID,
	})
	.openapi({
		title: 'ServiceAssignmentBase',
		description: 'Base service assignment schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ServiceAssignmentRefSchema = z
	.object({
		employee_id: UUID,
		service_id: UUID,
	})
	.openapi({
		title: 'ServiceAssignmentRef',
		description: 'Minimal service assignment reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateServiceAssignmentRequestSchema = z
	.object({
		employee_id: UUID,
		service_id: UUID,
	})
	.openapi({
		title: 'CreateServiceAssignmentRequest',
		description: 'Request schema for creating a new service assignment',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const ServiceAssignmentResponseSchema = ServiceAssignmentBaseSchema.extend({
	employee: EmployeeRefSchema.optional(),
	service: ServiceRefSchema.optional(),
}).openapi({
	title: 'ServiceAssignmentResponse',
	description: 'Complete service assignment response with related entities',
});

// ===== EXPORTED TYPES =====
export type ServiceAssignmentBase = z.infer<typeof ServiceAssignmentBaseSchema>;
export type ServiceAssignmentRef = z.infer<typeof ServiceAssignmentRefSchema>;
export type CreateServiceAssignmentRequest = z.infer<typeof CreateServiceAssignmentRequestSchema>;
export type ServiceAssignmentResponse = z.infer<typeof ServiceAssignmentResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ServiceAssignmentBase', ServiceAssignmentBaseSchema);
	registry.register('ServiceAssignmentRef', ServiceAssignmentRefSchema);
	registry.register('CreateServiceAssignmentRequest', CreateServiceAssignmentRequestSchema);
	registry.register('ServiceAssignmentResponse', ServiceAssignmentResponseSchema);
}
