import { z } from 'zod';

import type { notification_message } from '../../prisma/schemas/interfaces';
import { NotificationChannelEnum, MessageStatusEnum } from './enums.ts';
import { JsonObjectSchema } from './_common';

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

export type NotificationMessage = notification_message;
