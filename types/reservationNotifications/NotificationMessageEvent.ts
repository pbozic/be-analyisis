import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { NotificationMessage } from './NotificationMessage.js';
import { JsonObjectSchema } from './_common.js';
import { NotificationMessageResponseBaseSchema } from './NotificationMessage';

extendZodWithOpenApi(z);

export const CreateNotificationMessageEventSchema = z
	.object({
		notification_message_id: z.string().uuid(),
		type: z.string().min(1), // "sent","delivered","open","click","bounce",...
		provider_raw: JsonObjectSchema.optional(),
		occurred_at: z.date().optional(), // default now() in DB if omitted in DAO
	})
	.openapi('CreateNotificationMessageEvent');

export const DeleteNotificationMessageEventSchema = z
	.object({
		notification_message_event_id: z.string().uuid(),
	})
	.openapi('DeleteNotificationMessageEvent');

export type CreateNotificationMessageEventInput = z.infer<typeof CreateNotificationMessageEventSchema>;

export const NotificationMessageEventResponseBaseSchema = z
	.object({
		notification_message_event_id: z.string(),
		notification_message_id: z.string(),
		type: z.string(),
		provider_raw: z.unknown().nullable().optional(),
		occurred_at: z.string().datetime(),
	})
	.openapi('NotificationMessageEventResponseBase');

export const NotificationMessageEventResponseSchema = NotificationMessageEventResponseBaseSchema.extend({
	message: NotificationMessageResponseBaseSchema,
}).openapi('NotificationMessageEventResponse');

export type NotificationMessageEventBase = z.infer<typeof NotificationMessageEventResponseBaseSchema>;
export type NotificationMessageEventResponse = z.infer<typeof NotificationMessageEventResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationMessageEvent', CreateNotificationMessageEventSchema);
	registry.register('DeleteNotificationMessageEvent', DeleteNotificationMessageEventSchema);
	registry.register('NotificationMessageEventResponseBase', NotificationMessageEventResponseBaseSchema);
	registry.register('NotificationMessageEventResponse', NotificationMessageEventResponseSchema);
}

export type NotificationMessageEvent = {
	notification_message_event_id: string;
	notification_message_id: string;
	type: string;
	provider_raw?: unknown | null;
	occurred_at: Date;
	message?: NotificationMessage;
};
