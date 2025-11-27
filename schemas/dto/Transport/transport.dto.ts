import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

export const TransportModuleBaseSchema = z
	.object({
		transport_module_id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'TMabc123def45678', description: 'Public link hash' }),
		business_id: UUID,
		enabled: z.boolean().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('TransportModuleBase');

export type TransportModuleBase = z.infer<typeof TransportModuleBaseSchema>;
export const TransportModuleDetailSchema = TransportModuleBaseSchema.openapi('TransportModuleDetail');
export type TransportModuleDetail = z.infer<typeof TransportModuleDetailSchema>;

// Mapper moved to `transport.mappers.ts` to keep DTOs and mappers separated.

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TransportModuleBase', TransportModuleBaseSchema);
	registry.register('TransportModuleDetail', TransportModuleDetailSchema);
}
