import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ServiceCategoryBaseSchema = z
	.object({
		service_category_id: UUID,
		reservation_module_id: UUID,
		name: z.unknown().openapi({ example: { en: 'Hair Services', sl: 'Storitve za lase' } }),
		parent_id: UUID.nullable().optional(),
		color: z.string().nullable().optional().openapi({ example: '#F59E0B' }),
	})
	.openapi({
		title: 'ServiceCategoryBase',
		description: 'Base service category schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ServiceCategoryRefSchema = z
	.object({
		service_category_id: UUID,
		name: z.unknown().openapi({ example: { en: 'Hair Services', sl: 'Storitve za lase' } }),
		color: z.string().nullable().optional().openapi({ example: '#F59E0B' }),
	})
	.openapi({
		title: 'ServiceCategoryRef',
		description: 'Minimal service category reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateServiceCategoryRequestSchema = z
	.object({
		name: z.record(z.string()).openapi({ example: { en: 'Hair Services', sl: 'Storitve za lase' } }),
		parent_id: UUID.optional(),
		color: z.string().optional().openapi({ example: '#F59E0B' }),
		reservation_module_id: UUID,
	})
	.openapi({
		title: 'CreateServiceCategoryRequest',
		description: 'Request schema for creating a new service category',
	});

export const UpdateServiceCategoryRequestSchema = CreateServiceCategoryRequestSchema.partial().openapi({
	title: 'UpdateServiceCategoryRequest',
	description: 'Request schema for updating an existing service category',
});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ServiceCategoryResponseSchema = ServiceCategoryBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
	parent_category: z
		.lazy(() => ServiceCategoryRefSchema)
		.nullable()
		.optional(),
}).openapi({
	title: 'ServiceCategoryResponse',
	description: 'Complete service category response with related entities',
});

// ===== EXPORTED TYPES =====
export type ServiceCategoryBase = z.infer<typeof ServiceCategoryBaseSchema>;
export type ServiceCategoryRef = z.infer<typeof ServiceCategoryRefSchema>;
export type CreateServiceCategoryRequest = z.infer<typeof CreateServiceCategoryRequestSchema>;
export type UpdateServiceCategoryRequest = z.infer<typeof UpdateServiceCategoryRequestSchema>;
export type ServiceCategoryResponse = z.infer<typeof ServiceCategoryResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ServiceCategoryBase', ServiceCategoryBaseSchema);
	registry.register('ServiceCategoryRef', ServiceCategoryRefSchema);
	registry.register('CreateServiceCategoryRequest', CreateServiceCategoryRequestSchema);
	registry.register('UpdateServiceCategoryRequest', UpdateServiceCategoryRequestSchema);
	registry.register('ServiceCategoryResponse', ServiceCategoryResponseSchema);
}
