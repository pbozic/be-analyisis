import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { NotificationMapping } from './NotificationMapping.js';
import type { NotificationPreference } from './NotificationPreference.js';
import type { NotificationMessage } from './NotificationMessage.js';
import { NotificationMappingResponseSchema } from './NotificationMapping';
import { NotificationPreferenceResponseSchema } from './NotificationPreference';
import { NotificationMessageResponseSchema } from './NotificationMessage';

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

export const NotificationEventResponseSchema = z
	.object({
		notification_event_id: z.string(),
		key: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
		mappings: z.array(NotificationMappingResponseSchema),
		preferences: z.array(NotificationPreferenceResponseSchema),
		messages: z.array(NotificationMessageResponseSchema),
	})
	.openapi('NotificationEventResponse');

export type NotificationEventResponse = z.infer<typeof NotificationEventResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationEvent', CreateNotificationEventSchema);
	registry.register('UpdateNotificationEvent', UpdateNotificationEventSchema);
	registry.register('DeleteNotificationEvent', DeleteNotificationEventSchema);
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
