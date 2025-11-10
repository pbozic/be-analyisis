import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives';

extendZodWithOpenApi(z);

export const TransportModuleBaseSchema = z
	.object({
		transport_module_id: UUID,
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

export function toTransportModuleDetail(row: unknown): TransportModuleDetail {
	const r = row as {
		transport_module_id: string;
		enabled?: boolean;
		created_at?: string | Date | null;
		updated_at?: string | Date | null;
	};
	return TransportModuleDetailSchema.parse({
		transport_module_id: r.transport_module_id,
		enabled: r.enabled,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('TransportModuleBase', TransportModuleBaseSchema);
	registry.register('TransportModuleDetail', TransportModuleDetailSchema);
}
