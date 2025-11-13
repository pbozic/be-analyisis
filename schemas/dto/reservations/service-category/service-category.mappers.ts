import type { ServiceCategoryResponse } from './service-category.dto';
import { ServiceCategoryResponseSchema } from './service-category.dto';
import type { ServiceCategoryBasePrisma } from '../../../../prisma/includes/reservation/service-category';

/**
 * Map Prisma service_category to ServiceCategoryResponse
 */
export function toServiceCategoryResponse(row: ServiceCategoryBasePrisma): ServiceCategoryResponse {
	const r = row;

	const dto = {
		service_category_id: r.service_category_id,
		reservation_module_id: r.reservation_module_id,
		name: r.name,
		parent_id: r.parent_id ?? null,
		color: r.color ?? null,
	};

	return ServiceCategoryResponseSchema.parse(dto);
}

/**
 * Map list of service categories
 */
export function toServiceCategoryList(rows: ServiceCategoryBasePrisma[]): ServiceCategoryResponse[] {
	return rows.map(toServiceCategoryResponse);
}

export default {
	toServiceCategoryResponse,
	toServiceCategoryList,
};
