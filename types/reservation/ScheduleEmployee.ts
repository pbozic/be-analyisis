// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { schedule_slot } from '@prisma/client';

import type { Schedule } from '../reservation/Schedule.js';
import type { Employee } from '../reservation/Employee.js';

export type ScheduleEmployee = {
	schedule_employee_id: string;
	schedule_id: string;
	employee_id: string;
	schedule: Schedule;
	employee: Employee;
	schedule_slots: schedule_slot[];
};
