import { StoreDetailSchema } from './store.dto.js';
import type { StoreDetail } from './store.dto.js';

export function toStoreDetail(row: unknown): StoreDetail {
	const r = row as {
		stores_id: string;
		business_id: string;
		enabled?: boolean;
		online?: boolean;
		overwhelmed?: boolean;
		minimum_order?: number | null;
		created_at?: string | Date | null;
		updated_at?: string | Date | null;
	};
	return StoreDetailSchema.parse({
		stores_id: r.stores_id,
		business_id: r.business_id,
		enabled: r.enabled,
		online: r.online,
		overwhelmed: r.overwhelmed,
		minimum_order: r.minimum_order,
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
	});
}

export default { toStoreDetail };
