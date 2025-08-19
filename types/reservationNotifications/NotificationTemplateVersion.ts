import { z } from 'zod';

import type { notification_template_version } from '../../prisma/schemas/interfaces';
import { JsonObjectSchema } from './_common';
import { TemplateVersionStatusEnum } from './enums.ts';

// On create: version number is computed in DAO (next integer for the template)
export const CreateNotificationTemplateVersionSchema = z.object({
	notification_template_id: z.string().uuid(),
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

export type NotificationTemplateVersion = notification_template_version;
