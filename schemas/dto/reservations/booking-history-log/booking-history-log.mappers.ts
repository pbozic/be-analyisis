import type { BookingHistoryLogResponse } from './booking-history-log.dto';
import { BookingHistoryLogResponseSchema } from './booking-history-log.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma booking_history_log to BookingHistoryLogResponse
 */
export function toBookingHistoryLogResponse(row: any): BookingHistoryLogResponse {
	const r = row;

	const dto = {
		booking_history_log_id: r.booking_history_log_id,
		booking_id: r.booking_id,
		changed_by: r.changed_by,
		change_type: r.change_type,
		field_name: r.field_name ?? null,
		old_value: r.old_value ?? null,
		new_value: r.new_value ?? null,
		notes: r.notes ?? null,
		timestamp: toIso(r.timestamp) ?? '',
		booking: r.booking ?? undefined,
		changed_by_user: r.changed_by_user ?? undefined,
	};

	return BookingHistoryLogResponseSchema.parse(dto);
}

/**
 * Map list of booking history logs
 */
export function toBookingHistoryLogList(rows: any[]): BookingHistoryLogResponse[] {
	return rows.map(toBookingHistoryLogResponse);
}

export default {
	toBookingHistoryLogResponse,
	toBookingHistoryLogList,
};
