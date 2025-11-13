import { Prisma } from '@prisma/client';

export const notificationMessageBase = Prisma.validator<Prisma.notification_messageDefaultArgs>()({
	select: {
		notification_message_id: true,
		reservation_module_id: true,
		notification_event_id: true,
		channel: true,
		notification_template_id: true,
		template_version: true,
		to_address: true,
		subject: true,
		body_text: true,
		body_html: true,
		variables: true,
		rendered_at: true,
		provider_message_id: true,
		status: true,
		error: true,
		created_at: true,
	},
});

export type NotificationMessageBasePrisma = Prisma.notification_messageGetPayload<typeof notificationMessageBase>;
