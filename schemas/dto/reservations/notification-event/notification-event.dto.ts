import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationEventBaseSchema = z
	.object({
		notification_event_id: UUID,
		key: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
	})
	.openapi({
		title: 'NotificationEventBase',
		description: 'Base notification event schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationEventRefSchema = z
	.object({
		notification_event_id: UUID,
		key: z.string(),
		name: z.string(),
	})
	.openapi({
		title: 'NotificationEventRef',
		description: 'Minimal notification event reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationEventRequestSchema = z
	.object({
		key: z.string().min(1, 'Key is required'),
		name: z.string().min(1, 'Name is required'),
		description: z.string().optional(),
	})
	.openapi({
		title: 'CreateNotificationEventRequest',
		description: 'Request schema for creating a new notification event',
	});

export const UpdateNotificationEventRequestSchema = z
	.object({
		name: z.string().min(1, 'Name is required').optional(),
		description: z.string().optional(),
	})
	.openapi({
		title: 'UpdateNotificationEventRequest',
		description: 'Request schema for updating an existing notification event',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const NotificationEventResponseSchema = NotificationEventBaseSchema.extend({}).openapi({
	title: 'NotificationEventResponse',
	description: 'Complete notification event response with related entities',
});

// ===== EXPORTED TYPES =====
export type NotificationEventBase = z.infer<typeof NotificationEventBaseSchema>;
export type NotificationEventRef = z.infer<typeof NotificationEventRefSchema>;
export type CreateNotificationEventRequest = z.infer<typeof CreateNotificationEventRequestSchema>;
export type UpdateNotificationEventRequest = z.infer<typeof UpdateNotificationEventRequestSchema>;
export type NotificationEventResponse = z.infer<typeof NotificationEventResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationEventBase', NotificationEventBaseSchema);
	registry.register('NotificationEventRef', NotificationEventRefSchema);
	registry.register('CreateNotificationEventRequest', CreateNotificationEventRequestSchema);
	registry.register('UpdateNotificationEventRequest', UpdateNotificationEventRequestSchema);
	registry.register('NotificationEventResponse', NotificationEventResponseSchema);
}
