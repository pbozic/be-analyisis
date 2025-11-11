import type { ServiceCategoryResponse } from './service-category.dto';
import { ServiceCategoryResponseSchema } from './service-category.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma service_category to ServiceCategoryResponse
 */
export function toServiceCategoryResponse(row: any): ServiceCategoryResponse {
	const r = row;

	const dto = {
		service_category_id: r.service_category_id,
		reservation_module_id: r.reservation_module_id,
		name: r.name,
		description: r.description ?? null,
		icon: r.icon ?? null,
		sort_order: r.sort_order ?? 0,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		services: r.services ?? undefined,
	};

	return ServiceCategoryResponseSchema.parse(dto);
}

/**
 * Map list of service categories
 */
export function toServiceCategoryList(rows: any[]): ServiceCategoryResponse[] {
	return rows.map(toServiceCategoryResponse);
}

export default {
	toServiceCategoryResponse,
	toServiceCategoryList,
};
