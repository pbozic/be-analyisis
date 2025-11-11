import { CategoryResponseSchema } from './category.dto';
import type { CategoryResponse } from './category.dto';
import type { CategoryWithIncludesPrisma } from '../../prisma/includes/categories.js';

function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toCategoryResponse(row: CategoryWithIncludesPrisma | any): CategoryResponse {
	const r = row as any;

	const parent = r.parent_category
		? {
				categories_id: r.parent_category.categories_id,
				name: r.parent_category.name,
				tag: r.parent_category.tag,
				category_type: r.parent_category.category_type,
			}
		: null;

	const sub_categories = (r.sub_categories || []).map((s: any) => ({
		categories_id: s.categories_id,
		name: s.name,
		tag: s.tag,
		category_type: s.category_type,
	}));

	const translations = r.translatable?.translations || [];

	const icon = r.icon
		? {
				file_id: r.icon.file_id,
				file_type: r.icon.file_type,
				mime_type: r.icon.mime_type,
				url: r.icon.url ?? null,
				public: r.icon.public,
				created_at: toIso(r.icon.created_at) ?? new Date().toISOString(),
				updated_at: toIso(r.icon.updated_at) ?? new Date().toISOString(),
			}
		: null;

	return CategoryResponseSchema.parse({
		categories_id: r.categories_id,
		name: r.name,
		description: r.description ?? null,
		tag: r.tag,
		icon_file_id: r.icon_file_id ?? null,
		category_type: r.category_type,
		parent_categories_id: r.parent_categories_id ?? null,
		translatable_id: r.translatable_id,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		deleted_at: r.deleted_at ? toIso(r.deleted_at) : null,
		parent_category: parent,
		sub_categories,
		translations,
		icon,
	});
}

export function toCategoryList(rows: (CategoryWithIncludesPrisma | any)[]): CategoryResponse[] {
	return (rows || []).map((r) => toCategoryResponse(r));
}

export default { toCategoryResponse, toCategoryList };
