import { z } from 'zod';

import type { notification_message_event } from '../../prisma/schemas/interfaces';
import { JsonObjectSchema } from './_common';

export const CreateNotificationMessageEventSchema = z.object({
	notification_message_id: z.string().uuid(),
	type: z.string().min(1), // "sent","delivered","open","click","bounce",...
	provider_raw: JsonObjectSchema.optional(),
	occurred_at: z.date().optional(), // default now() in DB if omitted in DAO
});

export const DeleteNotificationMessageEventSchema = z.object({
	notification_message_event_id: z.string().uuid(),
});

export type CreateNotificationMessageEventInput = z.infer<typeof CreateNotificationMessageEventSchema>;
export type NotificationMessageEvent = notification_message_event;
