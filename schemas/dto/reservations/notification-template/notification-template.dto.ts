import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationTemplateBaseSchema = z
	.object({
		notification_template_id: UUID,
		reservation_module_id: UUID,
		key: z.string(),
		name: z.string(),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'NotificationTemplateBase',
		description: 'Base notification template schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationTemplateRefSchema = z
	.object({
		notification_template_id: UUID,
		key: z.string(),
		name: z.string(),
	})
	.openapi({
		title: 'NotificationTemplateRef',
		description: 'Minimal notification template reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationTemplateRequestSchema = z
	.object({
		reservation_module_id: UUID,
		key: z.string().min(1, 'Key is required'),
		name: z.string().min(1, 'Name is required'),
	})
	.openapi({
		title: 'CreateNotificationTemplateRequest',
		description: 'Request schema for creating a new notification template',
	});

export const UpdateNotificationTemplateRequestSchema = z
	.object({
		key: z.string().min(1).optional(),
		name: z.string().min(1).optional(),
	})
	.openapi({
		title: 'UpdateNotificationTemplateRequest',
		description: 'Request schema for updating an existing notification template',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const NotificationTemplateResponseSchema = NotificationTemplateBaseSchema.extend({
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
}).openapi({
	title: 'NotificationTemplateResponse',
	description: 'Complete notification template response with related entities',
});

// ===== EXPORTED TYPES =====
export type NotificationTemplateBase = z.infer<typeof NotificationTemplateBaseSchema>;
export type NotificationTemplateRef = z.infer<typeof NotificationTemplateRefSchema>;
export type CreateNotificationTemplateRequest = z.infer<typeof CreateNotificationTemplateRequestSchema>;
export type UpdateNotificationTemplateRequest = z.infer<typeof UpdateNotificationTemplateRequestSchema>;
export type NotificationTemplateResponse = z.infer<typeof NotificationTemplateResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationTemplateBase', NotificationTemplateBaseSchema);
	registry.register('NotificationTemplateRef', NotificationTemplateRefSchema);
	registry.register('CreateNotificationTemplateRequest', CreateNotificationTemplateRequestSchema);
	registry.register('UpdateNotificationTemplateRequest', UpdateNotificationTemplateRequestSchema);
	registry.register('NotificationTemplateResponse', NotificationTemplateResponseSchema);
}
