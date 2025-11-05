import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { NotificationMapping } from './NotificationMapping.js';
import type { NotificationPreference } from './NotificationPreference.js';
import type { NotificationMessage } from './NotificationMessage.js';
import { NotificationMappingResponseBaseSchema } from './NotificationMapping';
import { NotificationPreferenceResponseBaseSchema } from './NotificationPreference';
import { NotificationMessageResponseBaseSchema } from './NotificationMessage';

extendZodWithOpenApi(z);

export const CreateNotificationEventSchema = z
	.object({
		key: z.string().min(1, 'Key is required'), // e.g. "booking.confirmed"
		name: z.string().min(1, 'Name is required'),
		description: z.string().optional(),
	})
	.openapi('CreateNotificationEvent');

export const UpdateNotificationEventSchema = z
	.object({
		name: z.string().min(1, 'Name is required'),
		description: z.string().optional(),
	})
	.openapi('UpdateNotificationEvent');

export const DeleteNotificationEventSchema = z
	.object({
		notification_event_id: z.string().uuid(),
	})
	.openapi('DeleteNotificationEvent');

export type CreateNotificationEventInput = z.infer<typeof CreateNotificationEventSchema>;
export type UpdateNotificationEventInput = z.infer<typeof UpdateNotificationEventSchema>;

export const NotificationEventResponseBaseSchema = z
	.object({
		notification_event_id: z.string(),
		key: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
	})
	.openapi('NotificationEventResponseBase');

export const NotificationEventResponseSchema = NotificationEventResponseBaseSchema.extend({
	mappings: z.array(NotificationMappingResponseBaseSchema),
	preferences: z.array(NotificationPreferenceResponseBaseSchema),
	messages: z.array(NotificationMessageResponseBaseSchema),
}).openapi('NotificationEventResponse');

export type NotificationEventBase = z.infer<typeof NotificationEventResponseBaseSchema>;
export type NotificationEventResponse = z.infer<typeof NotificationEventResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationEvent', CreateNotificationEventSchema);
	registry.register('UpdateNotificationEvent', UpdateNotificationEventSchema);
	registry.register('DeleteNotificationEvent', DeleteNotificationEventSchema);
	registry.register('NotificationEventResponseBase', NotificationEventResponseBaseSchema);
	registry.register('NotificationEventResponse', NotificationEventResponseSchema);
}

export type NotificationEvent = {
	notification_event_id: string;
	key: string;
	name: string;
	description?: string | null;
	mappings?: NotificationMapping[];
	preferences?: NotificationPreference[];
	messages?: NotificationMessage[];
};
