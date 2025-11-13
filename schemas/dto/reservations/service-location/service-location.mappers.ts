import type { ServiceLocationResponse } from './service-location.dto';
import { ServiceLocationResponseSchema } from './service-location.dto';
import type { ServiceLocationBasePrisma } from '../../../../prisma/includes/reservation/service-location';

/**
 * Map Prisma service_location to ServiceLocationResponse
 */
export function toServiceLocationResponse(row: ServiceLocationBasePrisma): ServiceLocationResponse {
	const r = row;

	const dto = {
		service_location_id: r.service_location_id,
		service_id: r.service_id,
		location_id: r.location_id,
	};

	return ServiceLocationResponseSchema.parse(dto);
}

/**
 * Map list of service locations
 */
export function toServiceLocationList(rows: ServiceLocationBasePrisma[]): ServiceLocationResponse[] {
	return rows.map(toServiceLocationResponse);
}

export default {
	toServiceLocationResponse,
	toServiceLocationList,
};
