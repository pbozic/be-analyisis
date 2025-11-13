import { LostItemDetailSchema } from './lostitem.dto.js';
import type { LostItemDetail } from './lostitem.dto.js';

export function toLostItemDetail(row: unknown): LostItemDetail {
	const r = row as {
		lost_item_id: string;
		user_id?: string | null;
		status: string;
		description: string;
		image_id?: string | null;
		found?: boolean | null;
		created_at: string | Date;
		updated_at: string | Date;
	};
	return LostItemDetailSchema.parse({
		lost_item_id: r.lost_item_id,
		user_id: r.user_id ?? null,
		status: r.status,
		description: r.description,
		image_id: r.image_id ?? null,
		found: Boolean(r.found),
		created_at: new Date(r.created_at).toISOString(),
		updated_at: new Date(r.updated_at).toISOString(),
	});
}
