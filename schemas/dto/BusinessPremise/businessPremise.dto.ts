import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { PREMISE_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

// =======================
// Base Schema - scalars only, no relations
// =======================
export const BusinessPremiseBaseSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		transport_module_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().nullable().optional().openapi({ example: 'Main Office Premise' }),
		premise_type: z.nativeEnum(PREMISE_TYPE).openapi({ example: PREMISE_TYPE.A }),
		validity_date: Timestamp.nullable().optional().openapi({ example: '2025-01-01T00:00:00.000Z' }),
		special_notes: z.string().nullable().optional().openapi({ example: 'Mobile taxi premise for vehicle ABC-123' }),
		is_registered: z.boolean().openapi({ example: true }),
		registered_at: Timestamp.nullable().optional().openapi({ example: '2025-01-01T12:00:00.000Z' }),
		created_at: Timestamp.openapi({ example: '2025-01-01T12:00:00.000Z' }),
		updated_at: Timestamp.openapi({ example: '2025-01-10T12:00:00.000Z' }),
	})
	.openapi('BusinessPremiseBase');

export type BusinessPremiseBase = z.infer<typeof BusinessPremiseBaseSchema>;

// =======================
// Ref Schema - minimal identity for embedding elsewhere
// =======================
export const BusinessPremiseRefSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().nullable().optional().openapi({ example: 'Main Office Premise' }),
		premise_type: z.nativeEnum(PREMISE_TYPE).openapi({ example: PREMISE_TYPE.A }),
		is_registered: z.boolean().openapi({ example: true }),
	})
	.openapi('BusinessPremiseRef');

export type BusinessPremiseRef = z.infer<typeof BusinessPremiseRefSchema>;

// =======================
// Response Schema with Relations
// =======================
export const BusinessPremiseResponseSchema = BusinessPremiseBaseSchema.extend({
	devices: z
		.array(
			z.object({
				business_premise_id: UUID,
				electronic_device_id: UUID,
				name: z.string().nullable().optional(),
				active: z.boolean(),
			})
		)
		.openapi({ example: [] }),
}).openapi('BusinessPremiseResponse');

export type BusinessPremiseResponse = z.infer<typeof BusinessPremiseResponseSchema>;

// =======================
// Request Schemas
// =======================
export const CreateBusinessPremiseRequestSchema = z
	.object({
		transport_module_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		data: z
			.object({
				name: z.string().nullable().optional().openapi({ example: 'Main Office Premise' }),
				validity_date: Timestamp.nullable().optional().openapi({ example: '2025-01-01T00:00:00.000Z' }),
				special_notes: z
					.string()
					.nullable()
					.optional()
					.openapi({ example: 'Mobile taxi premise for vehicle ABC-123' }),
				premise_type: z.nativeEnum(PREMISE_TYPE).optional().openapi({ example: PREMISE_TYPE.A }),
			})
			.optional()
			.default({}),
	})
	.openapi('CreateBusinessPremiseRequest');

export type CreateBusinessPremiseRequest = z.infer<typeof CreateBusinessPremiseRequestSchema>;

export const ConfirmBusinessPremiseRequestSchema = z
	.object({
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
	})
	.openapi('ConfirmBusinessPremiseRequest');

export type ConfirmBusinessPremiseRequest = z.infer<typeof ConfirmBusinessPremiseRequestSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerBusinessPremiseSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('BusinessPremiseBase', BusinessPremiseBaseSchema);
	registry.register('BusinessPremiseRef', BusinessPremiseRefSchema);

	// Register request schemas
	registry.register('CreateBusinessPremiseRequest', CreateBusinessPremiseRequestSchema);
	registry.register('ConfirmBusinessPremiseRequest', ConfirmBusinessPremiseRequestSchema);

	// Register response schemas
	registry.register('BusinessPremise', BusinessPremiseResponseSchema);
	registry.register('BusinessPremiseResponse', BusinessPremiseResponseSchema);
}
