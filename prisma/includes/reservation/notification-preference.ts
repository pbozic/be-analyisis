import { Prisma } from '@prisma/client';

export const notificationPreferenceBase = Prisma.validator<Prisma.notification_preferenceDefaultArgs>()({
	select: {
		notification_preference_id: true,
		reservation_module_id: true,
		notification_event_id: true,
		channel: true,
		enabled: true,
		updated_at: true,
	},
});

export type NotificationPreferenceBasePrisma = Prisma.notification_preferenceGetPayload<
	typeof notificationPreferenceBase
>;
