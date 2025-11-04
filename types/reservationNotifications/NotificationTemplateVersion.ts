import { z } from 'zod';
import { TEMPLATE_VERSION_STATUS } from '@prisma/client';

import type { NotificationTemplate } from './NotificationTemplate.js';
import type { NotificationMapping } from './NotificationMapping.js';
import type { NotificationMessage } from './NotificationMessage.js';
import { JsonObjectSchema } from './_common.js';
import { TemplateVersionStatusEnum } from './enums.js';

// On create: version number is computed in DAO (next integer for the template)
export const CreateNotificationTemplateVersionSchema = z.object({
	notification_event_id: z.string().uuid(),
	status: TemplateVersionStatusEnum.default('DRAFT'),
	subject: z.string().optional().nullable(),
	body_text: z.string().optional().nullable(),
	variables_json_schema: JsonObjectSchema, // validate shape with AJV later
	compiled_artifacts: JsonObjectSchema.optional(), // optional cache
	created_by_user_id: z.string().uuid().optional(),
});

// On update: identify by (template_id + version) OR by version_id
export const UpdateNotificationTemplateVersionByIdSchema = z.object({
	notification_template_version_id: z.string().uuid(),
	status: TemplateVersionStatusEnum.optional(),
	subject: z.string().optional().nullable(),
	body_text: z.string().optional().nullable(),
	variables_json_schema: JsonObjectSchema.optional(),
	compiled_artifacts: JsonObjectSchema.optional(),
});

export const UpdateNotificationTemplateVersionByCompositeSchema = z.object({
	notification_template_id: z.string().uuid(),
	version: z.number().int().min(1),
	status: TemplateVersionStatusEnum.optional(),
	subject: z.string().optional().nullable(),
	body_text: z.string().optional().nullable(),
	variables_json_schema: JsonObjectSchema.optional(),
	compiled_artifacts: JsonObjectSchema.optional(),
});

export const DeleteNotificationTemplateVersionByIdSchema = z.object({
	notification_template_version_id: z.string().uuid(),
});

export const DeleteNotificationTemplateVersionByCompositeSchema = z.object({
	notification_template_id: z.string().uuid(),
	version: z.number().int().min(1),
});

export type CreateNotificationTemplateVersionInput = z.infer<typeof CreateNotificationTemplateVersionSchema>;
export type UpdateNotificationTemplateVersionByIdInput = z.infer<typeof UpdateNotificationTemplateVersionByIdSchema>;
export type UpdateNotificationTemplateVersionByCompositeInput = z.infer<
	typeof UpdateNotificationTemplateVersionByCompositeSchema
>;

export type NotificationTemplateVersion = {
	notification_template_version_id: string;
	notification_template_id: string;
	version: number;
	status: TEMPLATE_VERSION_STATUS;
	subject?: string | null;
	body_text?: string | null;
	variables_json_schema: unknown;
	compiled_artifacts?: unknown | null;
	created_by_user_id?: string | null;
	created_at: string;
	template: NotificationTemplate;
	mappings: NotificationMapping[];
	messages: NotificationMessage[];
};
