import type { ScheduleSlotExceptionResponse } from './schedule-slot-exception.dto';
import { ScheduleSlotExceptionResponseSchema } from './schedule-slot-exception.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma schedule_slot_exceptions to ScheduleSlotExceptionResponse
 */
export function toScheduleSlotExceptionResponse(row: any): ScheduleSlotExceptionResponse {
	const r = row;

	const dto = {
		schedule_slot_exception_id: r.schedule_slot_exception_id,
		schedule_slot_id: r.schedule_slot_id,
		date: toIso(r.date) ?? '',
		start_time: toIso(r.start_time) ?? '',
		end_time: toIso(r.end_time) ?? '',
		reason: r.reason ?? null,
		type: r.type,
		schedule_slot: r.schedule_slot ?? undefined,
	};

	return ScheduleSlotExceptionResponseSchema.parse(dto);
}

/**
 * Map list of schedule slot exceptions
 */
export function toScheduleSlotExceptionList(rows: any[]): ScheduleSlotExceptionResponse[] {
	return rows.map(toScheduleSlotExceptionResponse);
}

export default {
	toScheduleSlotExceptionResponse,
	toScheduleSlotExceptionList,
};
