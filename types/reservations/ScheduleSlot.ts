import type { BookingSlot } from './BookingSlot.js';
import type { Schedule } from './Schedule.js';
import type { ScheduleEmployee } from './ScheduleEmployee.js';
import type { Employee } from './Employee.js';
import type { ScheduleSlotException } from './ScheduleSlotException.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type ScheduleSlot = {
	schedule_slot_id: string;
	schedule_id: string;
	schedule_employee_id: string;
	employee_id: string;
	date: string;
	start_time: string;
	end_time: string;
	booking_slots: BookingSlot[];
	schedule: Schedule;
	schedule_employee: ScheduleEmployee;
	employee: Employee;
	schedule_slot_exceptions: ScheduleSlotException[];
};
