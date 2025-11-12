import type { BookingSlotResponse } from './booking-slot.dto';
import { BookingSlotResponseSchema } from './booking-slot.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma booking_slots to BookingSlotResponse
 */
export function toBookingSlotResponse(row: any): BookingSlotResponse {
	const r = row;

	const dto = {
		booking_slot_id: r.booking_slot_id,
		schedule_slot_id: r.schedule_slot_id,
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		schedule_slot: r.schedule_slot ?? undefined,
	};

	return BookingSlotResponseSchema.parse(dto);
}

/**
 * Map list of booking slots
 */
export function toBookingSlotList(rows: any[]): BookingSlotResponse[] {
	return rows.map(toBookingSlotResponse);
}

export default {
	toBookingSlotResponse,
	toBookingSlotList,
};
