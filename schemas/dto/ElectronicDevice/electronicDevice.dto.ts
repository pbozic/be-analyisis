import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';
import { BusinessPremiseRefSchema } from '../BusinessPremise';

extendZodWithOpenApi(z);

// =======================
// Base Schema - scalars only, no relations
// =======================
export const ElectronicDeviceBaseSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		electronic_device_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().nullable().optional().openapi({ example: 'Tablet Device 01' }),
		active: z.boolean().openapi({ example: true }),
		created_at: Timestamp.openapi({ example: '2025-01-01T12:00:00.000Z' }),
		updated_at: Timestamp.openapi({ example: '2025-01-10T12:00:00.000Z' }),
	})
	.openapi('ElectronicDeviceBase');

export type ElectronicDeviceBase = z.infer<typeof ElectronicDeviceBaseSchema>;

// =======================
// Ref Schema - minimal identity for embedding elsewhere
// =======================
export const ElectronicDeviceRefSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		electronic_device_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().nullable().optional().openapi({ example: 'Tablet Device 01' }),
		active: z.boolean().openapi({ example: true }),
	})
	.openapi('ElectronicDeviceRef');

export type ElectronicDeviceRef = z.infer<typeof ElectronicDeviceRefSchema>;

// =======================
// Response Schema with Relations
// =======================
export const ElectronicDeviceResponseSchema = ElectronicDeviceBaseSchema.extend({
	business_premise: BusinessPremiseRefSchema,
	assignments: z
		.array(
			z.object({
				device_assignment_id: UUID,
				driver_id: UUID,
				valid_from: Timestamp,
				valid_to: Timestamp.nullable().optional(),
			})
		)
		.openapi({ example: [] }),
}).openapi('ElectronicDeviceResponse');

export type ElectronicDeviceResponse = z.infer<typeof ElectronicDeviceResponseSchema>;

// =======================
// Request Schemas
// =======================
export const CreateElectronicDeviceRequestSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		data: z
			.object({
				electronic_device_id: UUID.optional().openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
				name: z.string().nullable().optional().openapi({ example: 'Tablet Device 01' }),
				active: z.boolean().optional().openapi({ example: true }),
			})
			.optional()
			.default({}),
	})
	.openapi('CreateElectronicDeviceRequest');

export type CreateElectronicDeviceRequest = z.infer<typeof CreateElectronicDeviceRequestSchema>;

export const DisableElectronicDeviceRequestSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		electronic_device_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
	})
	.openapi('DisableElectronicDeviceRequest');

export type DisableElectronicDeviceRequest = z.infer<typeof DisableElectronicDeviceRequestSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerElectronicDeviceSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('ElectronicDeviceBase', ElectronicDeviceBaseSchema);
	registry.register('ElectronicDeviceRef', ElectronicDeviceRefSchema);

	// Register request schemas
	registry.register('CreateElectronicDeviceRequest', CreateElectronicDeviceRequestSchema);
	registry.register('DisableElectronicDeviceRequest', DisableElectronicDeviceRequestSchema);

	// Register response schemas
	registry.register('ElectronicDevice', ElectronicDeviceResponseSchema);
	registry.register('ElectronicDeviceResponse', ElectronicDeviceResponseSchema);
}
