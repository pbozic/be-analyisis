import type { BookingSlotResponse } from './booking-slot.dto';
import { BookingSlotResponseSchema } from './booking-slot.dto';
import type { BookingSlotBasePrisma } from '../../../../prisma/includes/reservation/booking-slot';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma booking_slots to BookingSlotResponse
 */
export function toBookingSlotResponse(row: BookingSlotBasePrisma): BookingSlotResponse {
	const r = row;

	const dto = {
		booking_slot_id: r.booking_slot_id,
		schedule_slot_id: r.schedule_slot_id,
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		schedule_slot: r.schedule_slot
			? {
					schedule_slot_id: r.schedule_slot.schedule_slot_id,
					date: toIso(r.schedule_slot.date) ?? '',
					start_time: toIso(r.schedule_slot.start_time) ?? '',
					end_time: toIso(r.schedule_slot.end_time) ?? '',
				}
			: undefined,
	};

	return BookingSlotResponseSchema.parse(dto);
}

/**
 * Map list of booking slots
 */
export function toBookingSlotList(rows: BookingSlotBasePrisma[]): BookingSlotResponse[] {
	return rows.map(toBookingSlotResponse);
}

export default {
	toBookingSlotResponse,
	toBookingSlotList,
};
