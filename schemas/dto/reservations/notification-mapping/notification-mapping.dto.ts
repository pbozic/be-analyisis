import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../../primitives';
import { JsonObjectSchema } from '../_common';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { NotificationEventRefSchema } from '../notification-event/notification-event.dto.js';
import { NotificationTemplateVersionRefSchema } from '../notification-template-version/notification-template-version.dto.js';
import { NotificationTemplateRefSchema } from '../notification-template/notification-template.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationMappingBaseSchema = z
	.object({
		notification_mapping_id: UUID,
		reservation_module_id: UUID,
		notification_event_id: UUID,
		notification_template_version_id: UUID,
		conditions: z.unknown().nullable().optional(),
		is_active: z.boolean(),
	})
	.openapi({
		title: 'NotificationMappingBase',
		description: 'Base notification mapping schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationMappingRefSchema = z
	.object({
		notification_mapping_id: UUID,
		is_active: z.boolean(),
	})
	.openapi({
		title: 'NotificationMappingRef',
		description: 'Minimal notification mapping reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationMappingRequestSchema = z
	.object({
		reservation_module_id: UUID,
		notification_event_id: UUID,
		notification_template_version_id: UUID,
		conditions: z.lazy(() => JsonObjectSchema).optional(),
		is_active: z.boolean().optional(),
	})
	.openapi({
		title: 'CreateNotificationMappingRequest',
		description: 'Request schema for creating a new notification mapping',
	});

export const UpdateNotificationMappingRequestSchema = z
	.object({
		notification_template_version_id: UUID.optional(),
		conditions: z.lazy(() => JsonObjectSchema).optional(),
		is_active: z.boolean().optional(),
	})
	.openapi({
		title: 'UpdateNotificationMappingRequest',
		description: 'Request schema for updating an existing notification mapping',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const NotificationMappingResponseSchema = NotificationMappingBaseSchema.extend({
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
	notification_event: z.lazy(() => NotificationEventRefSchema).optional(),
}).openapi({
	title: 'NotificationMappingResponse',
	description: 'Complete notification mapping response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getLatestTemplateForEvent
export const NotificationMappingWithTemplateVersionDAOResponseSchema = NotificationMappingBaseSchema.extend({
	version: NotificationTemplateVersionRefSchema.extend({
		template: z.lazy(() => NotificationTemplateRefSchema).optional(),
	}).optional(),
}).openapi({
	title: 'NotificationMappingWithTemplateVersionDAOResponse',
	description: 'Notification mapping response from DAO with latest template version and template',
});

export const ActiveMappingSchema = z.object({
	notification_event_id: UUID,
	notification_template_version_id: UUID,
});
export type ActiveMappingRequest = z.infer<typeof ActiveMappingSchema>;

// ===== EXPORTED TYPES =====
export type NotificationMappingBase = z.infer<typeof NotificationMappingBaseSchema>;
export type NotificationMappingRef = z.infer<typeof NotificationMappingRefSchema>;
export type CreateNotificationMappingRequest = z.infer<typeof CreateNotificationMappingRequestSchema>;
export type UpdateNotificationMappingRequest = z.infer<typeof UpdateNotificationMappingRequestSchema>;
export type NotificationMappingResponse = z.infer<typeof NotificationMappingResponseSchema>;
export type NotificationMappingWithTemplateVersionDAOResponse = z.infer<
	typeof NotificationMappingWithTemplateVersionDAOResponseSchema
>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationMappingBase', NotificationMappingBaseSchema);
	registry.register('NotificationMappingRef', NotificationMappingRefSchema);
	registry.register('CreateNotificationMappingRequest', CreateNotificationMappingRequestSchema);
	registry.register('UpdateNotificationMappingRequest', UpdateNotificationMappingRequestSchema);
	registry.register('NotificationMappingResponse', NotificationMappingResponseSchema);
	registry.register(
		'NotificationMappingWithTemplateVersionDAO',
		NotificationMappingWithTemplateVersionDAOResponseSchema
	);

	registry.register('ActiveMapping', ActiveMappingSchema);
}
