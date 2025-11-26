import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.ts';

extendZodWithOpenApi(z);

export const TableReservationModuleResponseSchema = z
	.object({
		id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'TRabc123def45678', description: 'Public link hash' }),
		business_id: UUID,
		seats: z.number().int().nullable().optional(),
		business_details_id: UUID,
	})
	.openapi('TableReservationModuleResponse');
export type TableReservationModuleResponse = z.infer<typeof TableReservationModuleResponseSchema>;

export const TableReservationModuleRefSchema = TableReservationModuleResponseSchema.omit({
	business_id: true,
}).openapi('TableReservationModuleRef');
export type TableReservationModuleRef = z.infer<typeof TableReservationModuleRefSchema>;

// =======================
// OpenAPI Registration
// =======================

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TableReservationModuleResponse', TableReservationModuleResponseSchema);
}
