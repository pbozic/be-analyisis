// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Employee } from './Employee.js';
import type { Service } from './Service.js';
import { EmployeeResponseSchema } from './Employee';
import { ServiceResponseSchema } from './Service';

extendZodWithOpenApi(z);

export const CreateServiceAssignmentSchema = z
	.object({
		employee_id: z.string().uuid(),
		service_id: z.string().uuid(),
	})
	.openapi('CreateServiceAssignment');

export type CreateServiceAssignmentInput = z.infer<typeof CreateServiceAssignmentSchema>;

export const UpdateServiceAssignmentSchema = CreateServiceAssignmentSchema.partial().openapi('UpdateServiceAssignment');
export type UpdateServiceAssignmentInput = z.infer<typeof UpdateServiceAssignmentSchema>;

export const ServiceAssignmentResponseSchema = z
	.object({
		employee_id: z.string(),
		service_id: z.string(),
		employee: EmployeeResponseSchema,
		service: ServiceResponseSchema,
	})
	.openapi('ServiceAssignmentResponse');

export type ServiceAssignmentResponse = z.infer<typeof ServiceAssignmentResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateServiceAssignment', CreateServiceAssignmentSchema);
	registry.register('UpdateServiceAssignment', UpdateServiceAssignmentSchema);
	registry.register('ServiceAssignmentResponse', ServiceAssignmentResponseSchema);
}

export type ServiceAssignment = {
	employee_id: string;
	service_id: string;
	employee?: Employee;
	service?: Service;
};
