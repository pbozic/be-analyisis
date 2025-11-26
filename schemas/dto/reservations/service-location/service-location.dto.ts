import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';
import { ServiceRefSchema } from '../service/service.dto.js';
import { LocationRefSchema } from '../location/location.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ServiceLocationBaseSchema = z
	.object({
		service_location_id: UUID,
		service_id: UUID,
		location_id: UUID,
	})
	.openapi({
		title: 'ServiceLocationBase',
		description: 'Base service location schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ServiceLocationRefSchema = z
	.object({
		service_location_id: UUID,
		service_id: UUID,
		location_id: UUID,
	})
	.openapi({
		title: 'ServiceLocationRef',
		description: 'Minimal service location reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateServiceLocationRequestSchema = z
	.object({
		service_id: UUID,
		location_id: UUID,
	})
	.openapi({
		title: 'CreateServiceLocationRequest',
		description: 'Request schema for creating a new service location',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const ServiceLocationResponseSchema = ServiceLocationBaseSchema.extend({
	service: z.lazy(() => ServiceRefSchema).optional(),
	location: z.lazy(() => LocationRefSchema).optional(),
}).openapi({
	title: 'ServiceLocationResponse',
	description: 'Complete service location response with related entities',
});

// ===== EXPORTED TYPES =====
export type ServiceLocationBase = z.infer<typeof ServiceLocationBaseSchema>;
export type ServiceLocationRef = z.infer<typeof ServiceLocationRefSchema>;
export type CreateServiceLocationRequest = z.infer<typeof CreateServiceLocationRequestSchema>;
export type ServiceLocationResponse = z.infer<typeof ServiceLocationResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ServiceLocationBase', ServiceLocationBaseSchema);
	registry.register('ServiceLocationRef', ServiceLocationRefSchema);
	registry.register('CreateServiceLocationRequest', CreateServiceLocationRequestSchema);
	registry.register('ServiceLocationResponse', ServiceLocationResponseSchema);
}
