import type { ReservationModuleRefResponse, ReservationModuleResponse } from './reservation-module.dto';
import { ReservationModuleRefResponseSchema, ReservationModuleResponseSchema } from './reservation-module.dto';
import type { ReservationModuleBasePrisma } from '../../../../prisma/includes/reservation/reservation-module';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma reservation_module to ReservationModuleResponse
 */
export function toReservationModuleResponse(row: ReservationModuleBasePrisma): ReservationModuleResponse {
	const r = row;

	const dto = {
		reservation_module_id: r.reservation_module_id,
		business_id: r.business_id,
		public_link_hash: r.public_link_hash ?? null,
		action_bundle_id: r.action_bundle_id ?? null,
		subscription_active_until: toIso(r.subscription_active_until) ?? null,
		subscription_expires_at: toIso(r.subscription_expires_at) ?? null,
		stripe_subscription_schedule_id: r.stripe_subscription_schedule_id ?? null,
		hours_before_reschedule: r.hours_before_reschedule ?? null,
		hours_before_cancel: r.hours_before_cancel ?? null,
		publicly_visible: r.publicly_visible,
	};

	return ReservationModuleResponseSchema.parse(dto);
}

export function toReservationModuleRef(row: ReservationModuleBasePrisma): ReservationModuleRefResponse {
	const r = row;

	const dto = {
		reservation_module_id: r.reservation_module_id,
		public_link_hash: r.public_link_hash ?? null,
		action_bundle_id: r.action_bundle_id ?? null,
		subscription_active_until: toIso(r.subscription_active_until) ?? null,
		subscription_expires_at: toIso(r.subscription_expires_at) ?? null,
		stripe_subscription_schedule_id: r.stripe_subscription_schedule_id ?? null,
		hours_before_reschedule: r.hours_before_reschedule ?? null,
		hours_before_cancel: r.hours_before_cancel ?? null,
		publicly_visible: r.publicly_visible,
	};

	return ReservationModuleRefResponseSchema.parse(dto);
}

/**
 * Map list of reservation modules
 */
export function toReservationModuleList(rows: ReservationModuleBasePrisma[]): ReservationModuleResponse[] {
	return rows.map(toReservationModuleResponse);
}

export default {
	toReservationModuleResponse,
	toReservationModuleList,
	toReservationModuleRef,
};
