import { z } from 'zod';

import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationTemplateVersion } from './NotificationTemplateVersion.js';
import type { NotificationMessage } from './NotificationMessage.js';

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

export type NotificationTemplate = {
	notification_template_id: string;
	reservation_module_id: string;
	key: string;
	name: string;
	created_at: string;
	updated_at: string;
	reservation_module: ReservationModule;
	versions: NotificationTemplateVersion[];
	messages: NotificationMessage[];
};
