import { DocumentResponseSchema } from './document.dto.js';
import type { DocumentResponse } from './document.dto.js';
import type { DocumentWithIncludesPrisma } from '../../../prisma/includes/document.js';

function toIso(d: string | Date | null | undefined) {
	return d ? new Date(d).toISOString() : undefined;
}

export function toDocumentResponse(row: DocumentWithIncludesPrisma): DocumentResponse {
	const r = row;

	return DocumentResponseSchema.parse({
		document_id: r.document_id,
		business_id: r.business_id ?? null,
		driver_id: r.driver_id ?? null,
		vehicle_id: r.vehicle_id ?? null,
		document_type: r.document_type ?? null,
		additional_info: r.additional_info ?? null,
		issue_date: toIso(r.issue_date) ?? null,
		expiration_date: toIso(r.expiration_date) ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		files: (r.files || []).map((f) => ({
			file_id: f.file_id,
			file_type: f.file_type,
			mime_type: f.mime_type,
			url: f.url ?? null,
			public: f.public ?? false,
			created_at: toIso(f.created_at) ?? new Date().toISOString(),
			updated_at: toIso(f.updated_at) ?? new Date().toISOString(),
		})),
	});
}

export function toDocumentList(rows: DocumentWithIncludesPrisma[]): DocumentResponse[] {
	return (rows || []).map((r) => toDocumentResponse(r));
}

export default { toDocumentResponse, toDocumentList };
