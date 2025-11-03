// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { booking_slots, schedule_slot_exceptions } from '@prisma/client';

import type { Schedule } from './Schedule.js';
import type { ScheduleEmployee } from '../reservations/ScheduleEmployee.js';
import type { Employee } from './Employee.js';

export type ScheduleSlot = {
	schedule_slot_id: string;
	schedule_id: string;
	schedule_employee_id: string;
	employee_id: string;
	date: string;
	start_time: string;
	end_time: string;
	booking_slots: booking_slots[];
	schedule: Schedule;
	schedule_employee: ScheduleEmployee;
	employee: Employee;
	schedule_slot_exceptions: schedule_slot_exceptions[];
};
