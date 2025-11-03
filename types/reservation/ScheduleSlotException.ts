// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { SCHEDULE_SLOT_EXCEPTION_TYPE } from '@prisma/client';

import type { ScheduleSlot } from './ScheduleSlot.js';

export type ScheduleSlotException = {
	schedule_slot_exception_id: string;
	schedule_slot_id: string;
	date: string;
	start_time: string;
	end_time: string;
	reason?: string | null;
	type: SCHEDULE_SLOT_EXCEPTION_TYPE;
	schedule_slot: ScheduleSlot;
};
