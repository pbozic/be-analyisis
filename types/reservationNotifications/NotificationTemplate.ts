import { z } from 'zod';

import type { notification_template } from '../../prisma/schemas/interfaces';

export const CreateNotificationTemplateSchema = z.object({
	reservation_module_id: z.string().uuid(),
	key: z.string().min(1, 'Key is required'), // unique per module
	name: z.string().min(1, 'Name is required'),
});

export const UpdateNotificationTemplateSchema = z.object({
	key: z.string().min(1).optional(), // allow renaming if you want
	name: z.string().min(1).optional(),
});

export const DeleteNotificationTemplateSchema = z.object({
	notification_template_id: z.string().uuid(),
});

export type CreateNotificationTemplateInput = z.infer<typeof CreateNotificationTemplateSchema>;
export type UpdateNotificationTemplateInput = z.infer<typeof UpdateNotificationTemplateSchema>;

export type NotificationTemplate = notification_template;
