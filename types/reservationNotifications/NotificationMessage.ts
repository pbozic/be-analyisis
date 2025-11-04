import { z } from 'zod';
import { MESSAGE_STATUS, NOTIFICATION_CHANNEL } from '@prisma/client';

import { NotificationChannelEnum, MessageStatusEnum } from '../reservationNotifications/enums.js';
import { JsonObjectSchema } from './_common.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationEvent } from './NotificationEvent.js';
import type { NotificationTemplate } from './NotificationTemplate.js';
import type { NotificationTemplateVersion } from './NotificationTemplateVersion.js';
import type { NotificationMessageEvent } from './NotificationMessageEvent.js';

// Usually system-generated; still useful for tests or admin tooling.
export const CreateNotificationMessageSchema = z.object({
	reservation_module_id: z.string().uuid(),
	notification_event_id: z.string().uuid(),
	channel: NotificationChannelEnum,
	notification_template_id: z.string().uuid().optional().nullable(),
	template_version: z.number().int().optional().nullable(),
	to_address: z.string().optional().nullable(),
	subject: z.string().optional().nullable(),
	body_text: z.string().optional().nullable(),
	body_html: z.string().optional().nullable(),
	variables: JsonObjectSchema,
	rendered_at: z.date(),
	provider_message_id: z.string().optional().nullable(),
	status: MessageStatusEnum.default('QUEUED'),
	error: z.string().optional().nullable(),
});

export const UpdateNotificationMessageStatusSchema = z.object({
	notification_message_id: z.string().uuid(),
	status: MessageStatusEnum,
	provider_message_id: z.string().optional().nullable(),
	error: z.string().optional().nullable(),
});

export const DeleteNotificationMessageSchema = z.object({
	notification_message_id: z.string().uuid(),
});

export type CreateNotificationMessageInput = z.infer<typeof CreateNotificationMessageSchema>;
export type UpdateNotificationMessageStatusInput = z.infer<typeof UpdateNotificationMessageStatusSchema>;

export type NotificationMessage = {
	notification_message_id: string;
	reservation_module_id: string;
	notification_event_id: string;
	channel: NOTIFICATION_CHANNEL;
	notification_template_id?: string | null;
	template_version?: number | null;
	to_address?: string | null;
	subject?: string | null;
	body_text?: string | null;
	body_html?: string | null;
	variables: unknown;
	rendered_at: string;
	provider_message_id?: string | null;
	status: MESSAGE_STATUS;
	error?: string | null;
	created_at: string;
	reservation_module: ReservationModule;
	event: NotificationEvent;
	template?: NotificationTemplate | null;
	version?: NotificationTemplateVersion | null;
	events: NotificationMessageEvent[];
};
