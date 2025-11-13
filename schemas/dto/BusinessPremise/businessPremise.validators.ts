import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { PREMISE_TYPE } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// ===== Request Schemas =====
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

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusinessPremiseRequest', CreateBusinessPremiseRequestSchema);
	registry.register('ConfirmBusinessPremiseRequest', ConfirmBusinessPremiseRequestSchema);
}
