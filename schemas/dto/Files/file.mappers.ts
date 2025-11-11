import { FileResponseSchema } from './index.js';
import type { FileResponse } from './index.js';
import type { FileWithIncludesPrisma } from '../../../prisma/includes/files.js';

function toIso(d: unknown) {
	if (!d) return undefined;
	if (typeof d === 'string' || typeof d === 'number' || d instanceof Date)
		return new Date(d as string | number | Date).toISOString();
	return undefined;
}

export function toFileResponse(row: FileWithIncludesPrisma): FileResponse {
	return FileResponseSchema.parse({
		file_id: row.file_id,
		url: row.url ?? null,
		file_type: row.file_type,
		public: row.public,
		mime_type: row.mime_type,
		created_at: toIso(row.created_at) ?? new Date().toISOString(),
		updated_at: toIso(row.updated_at) ?? new Date().toISOString(),
		document_id: row.document_id ?? null,
		user_id: row.user_id ?? null,
		driver_id: row.driver_id ?? null,
		lost_item_id: row.lost_item_id ?? null,
		delivery_order_id: row.delivery_order_id ?? null,
	});
}

export function toFileList(rows: FileWithIncludesPrisma[]): FileResponse[] {
	return (rows || []).map((r) => toFileResponse(r));
}

export default { toFileResponse, toFileList };
