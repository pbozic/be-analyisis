import type { ServiceLocationResponse } from './service-location.dto';
import { ServiceLocationResponseSchema } from './service-location.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma service_location to ServiceLocationResponse
 */
export function toServiceLocationResponse(row: any): ServiceLocationResponse {
	const r = row;

	const dto = {
		service_location_id: r.service_location_id,
		service_id: r.service_id,
		location_id: r.location_id,
		is_active: r.is_active ?? true,
		assigned_at: toIso(r.assigned_at) ?? '',
		service: r.service ?? undefined,
		location: r.location ?? undefined,
	};

	return ServiceLocationResponseSchema.parse(dto);
}

/**
 * Map list of service locations
 */
export function toServiceLocationList(rows: any[]): ServiceLocationResponse[] {
	return rows.map(toServiceLocationResponse);
}

export default {
	toServiceLocationResponse,
	toServiceLocationList,
};
