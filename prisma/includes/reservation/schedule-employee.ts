import { Prisma } from '@prisma/client';

export const scheduleEmployeeBase = Prisma.validator<Prisma.schedule_employeeDefaultArgs>()({
	select: {
		schedule_employee_id: true,
		schedule_id: true,
		employee_id: true,
	},
});

export type ScheduleEmployeeBasePrisma = Prisma.schedule_employeeGetPayload<typeof scheduleEmployeeBase>;
