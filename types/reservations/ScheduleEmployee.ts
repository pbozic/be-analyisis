// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { ScheduleSlot } from './ScheduleSlot.js';
import type { Schedule } from './Schedule.js';
import type { Employee } from './Employee.js';

export type ScheduleEmployee = {
	schedule_employee_id: string;
	schedule_id: string;
	employee_id: string;
	schedule: Schedule;
	employee: Employee;
	schedule_slots: ScheduleSlot[];
};
