import { z } from 'zod';
import { TEMPLATE_VERSION_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { JsonObjectSchema } from '../_common';
import { NotificationTemplateRefSchema } from '../notification-template/notification-template.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationTemplateVersionBaseSchema = z
	.object({
		notification_template_version_id: UUID,
		notification_template_id: UUID,
		version: z.number().int(),
		status: z.nativeEnum(TEMPLATE_VERSION_STATUS),
		subject: z.string().nullable().optional(),
		body_text: z.string().nullable().optional(),
		variables_json_schema: z.unknown(),
		compiled_artifacts: z.unknown().nullable().optional(),
		created_by_user_id: UUID.nullable().optional(),
		created_at: Timestamp,
	})
	.openapi({
		title: 'NotificationTemplateVersionBase',
		description: 'Base notification template version schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationTemplateVersionRefSchema = z
	.object({
		notification_template_version_id: UUID,
		notification_template_id: UUID,
		version: z.number().int(),
		status: z.nativeEnum(TEMPLATE_VERSION_STATUS),
	})
	.openapi({
		title: 'NotificationTemplateVersionRef',
		description: 'Minimal notification template version reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationTemplateVersionRequestSchema = z
	.object({
		notification_template_id: UUID,
		status: z.nativeEnum(TEMPLATE_VERSION_STATUS).default('DRAFT'),
		subject: z.string().optional().nullable(),
		body_text: z.string().optional().nullable(),
		variables_json_schema: JsonObjectSchema,
		compiled_artifacts: JsonObjectSchema.optional(),
		created_by_user_id: UUID.optional(),
	})
	.openapi({
		title: 'CreateNotificationTemplateVersionRequest',
		description: 'Request schema for creating a new notification template version',
	});

export const UpdateNotificationTemplateVersionRequestSchema = z
	.object({
		status: z.nativeEnum(TEMPLATE_VERSION_STATUS).optional(),
		subject: z.string().optional().nullable(),
		body_text: z.string().optional().nullable(),
		variables_json_schema: JsonObjectSchema.optional(),
		compiled_artifacts: JsonObjectSchema.optional(),
	})
	.openapi({
		title: 'UpdateNotificationTemplateVersionRequest',
		description: 'Request schema for updating an existing notification template version',
	});

export const UpdateNotificationTemplateVersionByCompositeRequestSchema = z
	.object({
		notification_template_id: UUID,
		version: z.number().int().min(1),
		status: z.nativeEnum(TEMPLATE_VERSION_STATUS).optional(),
		subject: z.string().optional().nullable(),
		body_text: z.string().optional().nullable(),
		variables_json_schema: JsonObjectSchema.optional(),
		compiled_artifacts: JsonObjectSchema.optional(),
	})
	.openapi({
		title: 'UpdateNotificationTemplateVersionByCompositeRequest',
		description: 'Request schema for updating a template version by template ID and version number',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const NotificationTemplateVersionResponseSchema = NotificationTemplateVersionBaseSchema.extend({
	template: NotificationTemplateRefSchema.optional(),
}).openapi({
	title: 'NotificationTemplateVersionResponse',
	description: 'Complete notification template version response with related entities',
});

// ===== EXPORTED TYPES =====
export type NotificationTemplateVersionBase = z.infer<typeof NotificationTemplateVersionBaseSchema>;
export type NotificationTemplateVersionRef = z.infer<typeof NotificationTemplateVersionRefSchema>;
export type CreateNotificationTemplateVersionRequest = z.infer<typeof CreateNotificationTemplateVersionRequestSchema>;
export type UpdateNotificationTemplateVersionRequest = z.infer<typeof UpdateNotificationTemplateVersionRequestSchema>;
export type UpdateNotificationTemplateVersionByCompositeRequest = z.infer<
	typeof UpdateNotificationTemplateVersionByCompositeRequestSchema
>;
export type NotificationTemplateVersionResponse = z.infer<typeof NotificationTemplateVersionResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationTemplateVersionBase', NotificationTemplateVersionBaseSchema);
	registry.register('NotificationTemplateVersionRef', NotificationTemplateVersionRefSchema);
	registry.register('CreateNotificationTemplateVersionRequest', CreateNotificationTemplateVersionRequestSchema);
	registry.register('UpdateNotificationTemplateVersionRequest', UpdateNotificationTemplateVersionRequestSchema);
	registry.register(
		'UpdateNotificationTemplateVersionByCompositeRequest',
		UpdateNotificationTemplateVersionByCompositeRequestSchema
	);
	registry.register('NotificationTemplateVersionResponse', NotificationTemplateVersionResponseSchema);
}
