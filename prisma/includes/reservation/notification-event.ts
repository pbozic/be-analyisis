import { Prisma } from '@prisma/client';

export const notificationEventBase = Prisma.validator<Prisma.notification_eventDefaultArgs>()({
	select: {
		notification_event_id: true,
		key: true,
		name: true,
		description: true,
	},
});

export type NotificationEventBasePrisma = Prisma.notification_eventGetPayload<typeof notificationEventBase>;
