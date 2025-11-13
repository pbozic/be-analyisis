import type { ScheduleEmployeeResponse } from './schedule-employee.dto';
import { ScheduleEmployeeResponseSchema } from './schedule-employee.dto';
import type { ScheduleEmployeeBasePrisma } from '../../../../prisma/includes/reservation/schedule-employee';

/**
 * Map Prisma schedule_employee to ScheduleEmployeeResponse
 */
export function toScheduleEmployeeResponse(row: ScheduleEmployeeBasePrisma): ScheduleEmployeeResponse {
	const r = row;

	const dto = {
		schedule_employee_id: r.schedule_employee_id,
		schedule_id: r.schedule_id,
		employee_id: r.employee_id,
	};

	return ScheduleEmployeeResponseSchema.parse(dto);
}

/**
 * Map list of schedule employees
 */
export function toScheduleEmployeeList(rows: ScheduleEmployeeBasePrisma[]): ScheduleEmployeeResponse[] {
	return rows.map(toScheduleEmployeeResponse);
}

export default {
	toScheduleEmployeeResponse,
	toScheduleEmployeeList,
};
