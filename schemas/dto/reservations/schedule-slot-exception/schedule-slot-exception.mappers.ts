import type { ScheduleSlotExceptionResponse } from './schedule-slot-exception.dto';
import { ScheduleSlotExceptionResponseSchema } from './schedule-slot-exception.dto';
import type { ScheduleSlotExceptionBasePrisma } from '../../../../prisma/includes/reservation/schedule-slot-exception';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma schedule_slot_exceptions to ScheduleSlotExceptionResponse
 */
export function toScheduleSlotExceptionResponse(row: ScheduleSlotExceptionBasePrisma): ScheduleSlotExceptionResponse {
	const r = row;

	const dto = {
		schedule_slot_exception_id: r.schedule_slot_exception_id,
		schedule_slot_id: r.schedule_slot_id,
		date: toIso(r.date) ?? '',
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		reason: r.reason ?? null,
		type: r.type,
	};

	return ScheduleSlotExceptionResponseSchema.parse(dto);
}

/**
 * Map list of schedule slot exceptions
 */
export function toScheduleSlotExceptionList(rows: ScheduleSlotExceptionBasePrisma[]): ScheduleSlotExceptionResponse[] {
	return rows.map(toScheduleSlotExceptionResponse);
}

export default {
	toScheduleSlotExceptionResponse,
	toScheduleSlotExceptionList,
};
