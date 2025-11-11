import type { ReservationModuleResponse } from './reservation-module.dto';
import { ReservationModuleResponseSchema } from './reservation-module.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma reservation_module to ReservationModuleResponse
 */
export function toReservationModuleResponse(row: any): ReservationModuleResponse {
	const r = row;

	const dto = {
		reservation_module_id: r.reservation_module_id,
		business_id: r.business_id,
		name: r.name,
		description: r.description ?? null,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		business: r.business ?? undefined,
		services: r.services ?? undefined,
	};

	return ReservationModuleResponseSchema.parse(dto);
}

/**
 * Map list of reservation modules
 */
export function toReservationModuleList(rows: any[]): ReservationModuleResponse[] {
	return rows.map(toReservationModuleResponse);
}

export default {
	toReservationModuleResponse,
	toReservationModuleList,
};
