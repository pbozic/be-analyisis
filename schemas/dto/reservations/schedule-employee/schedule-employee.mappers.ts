import type { ScheduleEmployeeResponse } from './schedule-employee.dto';
import { ScheduleEmployeeResponseSchema } from './schedule-employee.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma schedule_employee to ScheduleEmployeeResponse
 */
export function toScheduleEmployeeResponse(row: any): ScheduleEmployeeResponse {
	const r = row;

	const dto = {
		schedule_employee_id: r.schedule_employee_id,
		schedule_id: r.schedule_id,
		employee_id: r.employee_id,
		is_active: r.is_active ?? true,
		assigned_at: toIso(r.assigned_at) ?? '',
		schedule: r.schedule ?? undefined,
		employee: r.employee ?? undefined,
	};

	return ScheduleEmployeeResponseSchema.parse(dto);
}

/**
 * Map list of schedule employees
 */
export function toScheduleEmployeeList(rows: any[]): ScheduleEmployeeResponse[] {
	return rows.map(toScheduleEmployeeResponse);
}

export default {
	toScheduleEmployeeResponse,
	toScheduleEmployeeList,
};
