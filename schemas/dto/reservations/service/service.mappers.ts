import type { ServiceDAOResponse } from './service.dto';
import { ServiceDAOResponseSchema } from './service.dto';
import type { ServiceBasePrisma, ServiceWithLocationsPrisma } from '../../../../prisma/includes/reservation/service';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map ServiceBasePrisma (service + category + assigned_employees) to ServiceDAOResponse
 */
export function toServiceDAOResponse(row: ServiceBasePrisma): ServiceDAOResponse {
	const r = row;

	const dto = {
		service_id: r.service_id,
		reservation_module_id: r.reservation_module_id,
		service_category_id: r.service_category_id ?? null,
		name: r.name,
		description: r.description ?? null,
		image_url: r.image_url ?? null,
		price_cents: r.price_cents,
		discount_percent: r.discount_percent ?? null,
		discount_amount: r.discount_amount ?? null,
		duration_minutes: r.duration_minutes,
		available_online: r.available_online ?? false,
		skd_codes: r.skd_codes ?? [],
		created_at: toIso(r.created_at) ?? '',
		tax_rate_id: r.tax_rate_id ?? null,
		course: r.course ?? false,
		people_allowed: r.people_allowed ?? null,
		service_category: r.service_category ?? null,
	};

	return ServiceDAOResponseSchema.parse(dto);
}

/**
 * Map ServiceWithLocationsPrisma - returns service with locations
 */
export function toServiceWithLocations(row: ServiceWithLocationsPrisma) {
	const r = row;

	const service_locations = (r.service_locations || []).map((sl) => ({
		service_location_id: sl.service_location_id,
		service_id: sl.service_id,
		location_id: sl.location_id,
		location: sl.location ?? null,
	}));

	return {
		service_id: r.service_id,
		reservation_module_id: r.reservation_module_id,
		service_category_id: r.service_category_id ?? null,
		name: r.name,
		description: r.description ?? null,
		image_url: r.image_url ?? null,
		price_cents: r.price_cents,
		discount_percent: r.discount_percent ?? null,
		discount_amount: r.discount_amount ?? null,
		duration_minutes: r.duration_minutes,
		available_online: r.available_online ?? false,
		skd_codes: r.skd_codes ?? [],
		created_at: toIso(r.created_at) ?? '',
		tax_rate_id: r.tax_rate_id ?? null,
		course: r.course ?? false,
		people_allowed: r.people_allowed ?? null,
		service_category: r.service_category ?? null,
		service_locations,
	};
}

/**
 * Map list of services to ServiceDAOResponse list
 */
export function toServiceDAOList(rows: ServiceBasePrisma[]): ServiceDAOResponse[] {
	return rows.map(toServiceDAOResponse);
}

export default {
	toServiceDAOResponse,
	toServiceWithLocations,
	toServiceDAOList,
};
