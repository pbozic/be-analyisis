import type { ScheduleSlot } from './ScheduleSlot.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type BookingSlot = {
	booking_slot_id: string;
	schedule_slot_id: string;
	schedule_slot: ScheduleSlot;
	start_time: string;
	end_time: string;
};
