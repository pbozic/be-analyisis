import { Prisma } from '@prisma/client';

export const scheduleSlotExceptionBase = Prisma.validator<Prisma.schedule_slot_exceptionsDefaultArgs>()({
	select: {
		schedule_slot_exception_id: true,
		schedule_slot_id: true,
		date: true,
		start_time: true,
		end_time: true,
		reason: true,
		type: true,
	},
});

export type ScheduleSlotExceptionBasePrisma = Prisma.schedule_slot_exceptionsGetPayload<
	typeof scheduleSlotExceptionBase
>;
