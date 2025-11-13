import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// Vehicle Link Request Schemas
// =======================
export const LinkPremiseToVehicleRequestSchema = z
	.object({
		vehicle_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		business_premise_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
	})
	.openapi('LinkPremiseToVehicleRequest');

export type LinkPremiseToVehicleRequest = z.infer<typeof LinkPremiseToVehicleRequestSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('LinkPremiseToVehicleRequest', LinkPremiseToVehicleRequestSchema);
}
