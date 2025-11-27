import { TransportModuleDetailSchema } from './transport.dto.js';
import type { TransportModuleDetail } from './transport.dto.js';
import type { TransportModuleWithIncludesPrisma } from '../../../prisma/includes/transport.js';

export function toTransportModuleDetail(row: TransportModuleWithIncludesPrisma): TransportModuleDetail {
	const r = row;
	return TransportModuleDetailSchema.parse({
		transport_module_id: r.transport_module_id,
		public_hash_link: r.public_link_hash ?? null,
		business_id: r.business_id,
		enabled: r.active ?? undefined,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export default { toTransportModuleDetail };
