import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

export const TransportModuleBaseSchema = z
	.object({
		transport_module_id: UUID,
		business_id: UUID,
		enabled: z.boolean().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('TransportModuleBase');

export const TransportModuleRefSchema = TransportModuleBaseSchema.pick({
	transport_module_id: true,
	enabled: true,
}).openapi('TransportModuleRef');

export type TransportModuleBase = z.infer<typeof TransportModuleBaseSchema>;
export type TransportModuleRef = z.infer<typeof TransportModuleRefSchema>;
export const TransportModuleDetailSchema = TransportModuleBaseSchema.openapi('TransportModuleDetail');
export type TransportModuleDetail = z.infer<typeof TransportModuleDetailSchema>;

// Mapper moved to `transport.mappers.ts` to keep DTOs and mappers separated.

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TransportModuleBase', TransportModuleBaseSchema);
	registry.register('TransportModuleDetail', TransportModuleDetailSchema);
}
