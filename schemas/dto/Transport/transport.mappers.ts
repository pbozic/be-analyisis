import { TransportModuleDetailSchema } from './transport.dto.js';
import type { TransportModuleDetail } from './transport.dto.js';
import type { TransportModuleWithIncludesPrisma } from '../../../prisma/includes/transport.js';

export function toTransportModuleDetail(row: TransportModuleWithIncludesPrisma): TransportModuleDetail {
	const r = row;
	return TransportModuleDetailSchema.parse({
		transport_module_id: r.transport_module_id,
		// Prisma transport_module uses `active`; map it to DTO's `enabled` field
		enabled: (r as any).active ?? undefined,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export default { toTransportModuleDetail };
