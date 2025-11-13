import { Prisma } from '@prisma/client';

export const notificationMessageEventBase = Prisma.validator<Prisma.notification_message_eventDefaultArgs>()({
	select: {
		notification_message_event_id: true,
		notification_message_id: true,
		type: true,
		provider_raw: true,
		occurred_at: true,
	},
});

export type NotificationMessageEventBasePrisma = Prisma.notification_message_eventGetPayload<
	typeof notificationMessageEventBase
>;
