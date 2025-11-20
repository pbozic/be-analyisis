import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.ts';

extendZodWithOpenApi(z);

export const TableReservationModuleResponseSchema = z
	.object({
		id: UUID,
		business_id: UUID,
		seats: z.number().int().nullable().optional(),
		business_details_id: UUID,
	})
	.openapi('TableReservationModuleResponse');
export type TableReservationModuleResponse = z.infer<typeof TableReservationModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TableReservationModuleResponse', TableReservationModuleResponseSchema);
}
