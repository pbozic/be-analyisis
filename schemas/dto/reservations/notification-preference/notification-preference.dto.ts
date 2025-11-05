import { z } from 'zod';
import { NOTIFICATION_CHANNEL } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationPreferenceBaseSchema = z
	.object({
		notification_preference_id: UUID,
		reservation_module_id: UUID,
		notification_event_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		enabled: z.boolean(),
		updated_at: Timestamp,
	})
	.openapi({
		title: 'NotificationPreferenceBase',
		description: 'Base notification preference schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationPreferenceRefSchema = z
	.object({
		notification_preference_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		enabled: z.boolean(),
	})
	.openapi({
		title: 'NotificationPreferenceRef',
		description: 'Minimal notification preference reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationPreferenceRequestSchema = z
	.object({
		notification_preference_id: UUID,
		reservation_module_id: UUID,
		notification_event_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		enabled: z.boolean(),
	})
	.openapi({
		title: 'CreateNotificationPreferenceRequest',
		description: 'Request schema for creating a new notification preference',
	});

export const UpsertNotificationPreferenceRequestSchema = z
	.object({
		notification_event_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		enabled: z.boolean(),
	})
	.openapi({
		title: 'UpsertNotificationPreferenceRequest',
		description: 'Request schema for upserting a notification preference',
	});

export const UpdateNotificationPreferenceRequestSchema = CreateNotificationPreferenceRequestSchema.partial().openapi({
	title: 'UpdateNotificationPreferenceRequest',
	description: 'Request schema for updating an existing notification preference',
});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const NotificationPreferenceResponseSchema = NotificationPreferenceBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
}).openapi({
	title: 'NotificationPreferenceResponse',
	description: 'Complete notification preference response with related entities',
});

// ===== EXPORTED TYPES =====
export type NotificationPreferenceBase = z.infer<typeof NotificationPreferenceBaseSchema>;
export type NotificationPreferenceRef = z.infer<typeof NotificationPreferenceRefSchema>;
export type CreateNotificationPreferenceRequest = z.infer<typeof CreateNotificationPreferenceRequestSchema>;
export type UpsertNotificationPreferenceRequest = z.infer<typeof UpsertNotificationPreferenceRequestSchema>;
export type UpdateNotificationPreferenceRequest = z.infer<typeof UpdateNotificationPreferenceRequestSchema>;
export type NotificationPreferenceResponse = z.infer<typeof NotificationPreferenceResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationPreferenceBase', NotificationPreferenceBaseSchema);
	registry.register('NotificationPreferenceRef', NotificationPreferenceRefSchema);
	registry.register('CreateNotificationPreferenceRequest', CreateNotificationPreferenceRequestSchema);
	registry.register('UpsertNotificationPreferenceRequest', UpsertNotificationPreferenceRequestSchema);
	registry.register('UpdateNotificationPreferenceRequest', UpdateNotificationPreferenceRequestSchema);
	registry.register('NotificationPreferenceResponse', NotificationPreferenceResponseSchema);
}
