import { z } from 'zod';
import { MESSAGE_STATUS, NOTIFICATION_CHANNEL } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { NotificationTemplateRefSchema } from '../notification-template/notification-template.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationMessageBaseSchema = z
	.object({
		notification_message_id: UUID,
		reservation_module_id: UUID,
		notification_event_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		notification_template_id: UUID.nullable().optional(),
		template_version: z.number().int().nullable().optional(),
		to_address: z.string().nullable().optional(),
		subject: z.string().nullable().optional(),
		body_text: z.string().nullable().optional(),
		body_html: z.string().nullable().optional(),
		variables: z.unknown(),
		rendered_at: Timestamp,
		provider_message_id: z.string().nullable().optional(),
		status: z.nativeEnum(MESSAGE_STATUS),
		error: z.string().nullable().optional(),
		created_at: Timestamp,
	})
	.openapi({
		title: 'NotificationMessageBase',
		description: 'Base notification message schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationMessageRefSchema = z
	.object({
		notification_message_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		status: z.nativeEnum(MESSAGE_STATUS),
		created_at: Timestamp,
	})
	.openapi({
		title: 'NotificationMessageRef',
		description: 'Minimal notification message reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationMessageRequestSchema = z
	.object({
		reservation_module_id: UUID,
		notification_event_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		notification_template_id: UUID.optional().nullable(),
		template_version: z.number().int().optional().nullable(),
		to_address: z.string().optional().nullable(),
		subject: z.string().optional().nullable(),
		body_text: z.string().optional().nullable(),
		body_html: z.string().optional().nullable(),
		variables: z.record(z.any()),
		rendered_at: z.date(),
		provider_message_id: z.string().optional().nullable(),
		status: z.nativeEnum(MESSAGE_STATUS).default('QUEUED'),
		error: z.string().optional().nullable(),
	})
	.openapi({
		title: 'CreateNotificationMessageRequest',
		description: 'Request schema for creating a new notification message',
	});

export const UpdateNotificationMessageStatusRequestSchema = z
	.object({
		notification_message_id: UUID,
		status: z.nativeEnum(MESSAGE_STATUS),
		provider_message_id: z.string().optional().nullable(),
		error: z.string().optional().nullable(),
	})
	.openapi({
		title: 'UpdateNotificationMessageStatusRequest',
		description: 'Request schema for updating notification message status',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const NotificationMessageResponseSchema = NotificationMessageBaseSchema.extend({
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
	template: z
		.lazy(() => NotificationTemplateRefSchema)
		.nullable()
		.optional(),
}).openapi({
	title: 'NotificationMessageResponse',
	description: 'Complete notification message response with related entities',
});

export const ListMessagesSchema = z.object({
	notification_event_id: UUID.optional(),
	status: z.nativeEnum(MESSAGE_STATUS).optional(),
	take: z.number().int().min(1).max(200).optional(),
	skip: z.number().int().min(0).optional(),
});
export type ListMessagesRequest = z.infer<typeof ListMessagesSchema>;

// ===== EXPORTED TYPES =====
export type NotificationMessageBase = z.infer<typeof NotificationMessageBaseSchema>;
export type NotificationMessageRef = z.infer<typeof NotificationMessageRefSchema>;
export type CreateNotificationMessageRequest = z.infer<typeof CreateNotificationMessageRequestSchema>;
export type UpdateNotificationMessageStatusRequest = z.infer<typeof UpdateNotificationMessageStatusRequestSchema>;
export type NotificationMessageResponse = z.infer<typeof NotificationMessageResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationMessageBase', NotificationMessageBaseSchema);
	registry.register('NotificationMessageRef', NotificationMessageRefSchema);
	registry.register('CreateNotificationMessageRequest', CreateNotificationMessageRequestSchema);
	registry.register('UpdateNotificationMessageStatusRequest', UpdateNotificationMessageStatusRequestSchema);
	registry.register('NotificationMessageResponse', NotificationMessageResponseSchema);

	registry.register('ListMessages', ListMessagesSchema);
}
