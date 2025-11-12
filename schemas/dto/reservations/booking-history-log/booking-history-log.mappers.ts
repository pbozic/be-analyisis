import type { BookingHistoryLogResponse } from './booking-history-log.dto';
import { BookingHistoryLogResponseSchema } from './booking-history-log.dto';
import type { BookingHistoryLogBasePrisma } from '../../../../prisma/includes/reservation/booking-history-log';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma booking_history_log to BookingHistoryLogResponse
 */
export function toBookingHistoryLogResponse(row: BookingHistoryLogBasePrisma): BookingHistoryLogResponse {
	const r = row;

	const dto = {
		booking_history_id: r.booking_history_id,
		booking_id: r.booking_id,
		status: r.status,
		comment: r.comment ?? null,
		type: r.type ?? null,
		title: r.title ?? null,
		description: r.description ?? null,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		user_id: r.user_id ?? null,
		booking: r.booking
			? {
					booking_id: r.booking.booking_id,
					status: r.booking.status,
				}
			: undefined,
	};

	return BookingHistoryLogResponseSchema.parse(dto);
}

/**
 * Map list of booking history logs
 */
export function toBookingHistoryLogList(rows: BookingHistoryLogBasePrisma[]): BookingHistoryLogResponse[] {
	return rows.map(toBookingHistoryLogResponse);
}

export default {
	toBookingHistoryLogResponse,
	toBookingHistoryLogList,
};
