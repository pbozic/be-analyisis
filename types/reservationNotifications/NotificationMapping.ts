import { z } from 'zod';

import type { notification_mapping } from '../../prisma/schemas/interfaces';
import { JsonObjectSchema } from './_common';

export const CreateNotificationMappingSchema = z.object({
	reservation_module_id: z.string().uuid(),
	notification_event_id: z.string().uuid(),
	notification_template_version_id: z.string().uuid(),
	conditions: JsonObjectSchema.optional(),
	is_active: z.boolean().optional(), // default true in DB
});

export const UpdateNotificationMappingSchema = z.object({
	notification_mapping_id: z.string().uuid(),
	notification_template_version_id: z.string().uuid().optional(),
	conditions: JsonObjectSchema.optional(),
	is_active: z.boolean().optional(),
});

export const DeleteNotificationMappingSchema = z.object({
	notification_mapping_id: z.string().uuid(),
});

export type CreateNotificationMappingInput = z.infer<typeof CreateNotificationMappingSchema>;
export type UpdateNotificationMappingInput = z.infer<typeof UpdateNotificationMappingSchema>;

export type NotificationMapping = notification_mapping;
