import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Request Schemas (used in routes with validate())
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

// CreateElectronicDeviceForPremiseSchema and DisableElectronicDeviceSchema are in Driver/driver.validators.ts
// They're used by driver routes, so they stay there. Import from Driver if needed.

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateElectronicDeviceRequest', CreateElectronicDeviceRequestSchema);
	registry.register('DisableElectronicDeviceRequest', DisableElectronicDeviceRequestSchema);
}
