import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { JsonObjectSchema } from './_common.js';
extendZodWithOpenApi(z);

export const CreateNotificationMappingSchema = z
	.object({
		reservation_module_id: z.string().uuid(),
		notification_event_id: z.string().uuid(),
		notification_template_version_id: z.string().uuid(),
		conditions: JsonObjectSchema.optional(),
		is_active: z.boolean().optional(), // default true in DB
	})
	.openapi('CreateNotificationMapping');

export const UpdateNotificationMappingSchema = z
	.object({
		notification_mapping_id: z.string().uuid(),
		notification_template_version_id: z.string().uuid().optional(),
		conditions: JsonObjectSchema.optional(),
		is_active: z.boolean().optional(),
	})
	.openapi('UpdateNotificationMapping');

export const DeleteNotificationMappingSchema = z
	.object({
		notification_mapping_id: z.string().uuid(),
	})
	.openapi('DeleteNotificationMapping');

export type CreateNotificationMappingInput = z.infer<typeof CreateNotificationMappingSchema>;
export type UpdateNotificationMappingInput = z.infer<typeof UpdateNotificationMappingSchema>;

export const NotificationMappingResponseSchema = z
	.object({
		notification_mapping_id: z.string(),
		reservation_module_id: z.string(),
		notification_event_id: z.string(),
		notification_template_version_id: z.string(),
		conditions: z.unknown().nullable().optional(),
	})
	.openapi('NotificationMappingResponse');

export type NotificationMappingResponse = z.infer<typeof NotificationMappingResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationMapping', CreateNotificationMappingSchema);
	registry.register('UpdateNotificationMapping', UpdateNotificationMappingSchema);
	registry.register('DeleteNotificationMapping', DeleteNotificationMappingSchema);
	registry.register('NotificationMappingResponse', NotificationMappingResponseSchema);
}

export type NotificationMapping = {
	notification_mapping_id: string;
	reservation_module_id: string;
	notification_event_id: string;
	notification_template_version_id: string;
	conditions?: unknown | null;
};
