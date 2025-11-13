import { Prisma } from '@prisma/client';

export const notificationTemplateBase = Prisma.validator<Prisma.notification_templateDefaultArgs>()({
	select: {
		notification_template_id: true,
		reservation_module_id: true,
		key: true,
		name: true,
		created_at: true,
		updated_at: true,
	},
});

export type NotificationTemplateBasePrisma = Prisma.notification_templateGetPayload<typeof notificationTemplateBase>;
