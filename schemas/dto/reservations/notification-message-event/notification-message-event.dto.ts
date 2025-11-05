import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { JsonObjectSchema } from '../_common';
import { NotificationMessageRefSchema } from '../notification-message/notification-message.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationMessageEventBaseSchema = z
	.object({
		notification_message_event_id: UUID,
		notification_message_id: UUID,
		type: z.string(),
		provider_raw: z.unknown().nullable().optional(),
		occurred_at: Timestamp,
	})
	.openapi({
		title: 'NotificationMessageEventBase',
		description: 'Base notification message event schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationMessageEventRefSchema = z
	.object({
		notification_message_event_id: UUID,
		type: z.string(),
		occurred_at: Timestamp,
	})
	.openapi({
		title: 'NotificationMessageEventRef',
		description: 'Minimal notification message event reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationMessageEventRequestSchema = z
	.object({
		notification_message_id: UUID,
		type: z.string().min(1),
		provider_raw: JsonObjectSchema.optional(),
		occurred_at: Timestamp.optional(),
	})
	.openapi({
		title: 'CreateNotificationMessageEventRequest',
		description: 'Request schema for creating a new notification message event',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const NotificationMessageEventResponseSchema = NotificationMessageEventBaseSchema.extend({
	message: NotificationMessageRefSchema.optional(),
}).openapi({
	title: 'NotificationMessageEventResponse',
	description: 'Complete notification message event response with related entities',
});

// ===== EXPORTED TYPES =====
export type NotificationMessageEventBase = z.infer<typeof NotificationMessageEventBaseSchema>;
export type NotificationMessageEventRef = z.infer<typeof NotificationMessageEventRefSchema>;
export type CreateNotificationMessageEventRequest = z.infer<typeof CreateNotificationMessageEventRequestSchema>;
export type NotificationMessageEventResponse = z.infer<typeof NotificationMessageEventResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationMessageEventBase', NotificationMessageEventBaseSchema);
	registry.register('NotificationMessageEventRef', NotificationMessageEventRefSchema);
	registry.register('CreateNotificationMessageEventRequest', CreateNotificationMessageEventRequestSchema);
	registry.register('NotificationMessageEventResponse', NotificationMessageEventResponseSchema);
}
