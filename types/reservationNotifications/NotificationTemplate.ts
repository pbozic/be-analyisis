import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationTemplateVersion } from './NotificationTemplateVersion.js';
import type { NotificationMessage } from './NotificationMessage.js';
import { ReservationModuleResponseSchema } from '../reservations/ReservationModule';
import { NotificationTemplateVersionResponseSchema } from './NotificationTemplateVersion';
import { NotificationMessageResponseSchema } from './NotificationMessage';

extendZodWithOpenApi(z);

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
	created_at: Date;
	updated_at: Date;
	reservation_module: ReservationModule;
	versions: NotificationTemplateVersion[];
	messages: NotificationMessage[];
};

export const NotificationTemplateResponseSchema = z
	.object({
		notification_template_id: z.string(),
		reservation_module_id: z.string(),
		key: z.string(),
		name: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		reservation_module: ReservationModuleResponseSchema,
		versions: z.array(NotificationTemplateVersionResponseSchema),
		messages: z.array(NotificationMessageResponseSchema),
	})
	.openapi('NotificationTemplateResponse');

export type NotificationTemplateResponse = z.infer<typeof NotificationTemplateResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationTemplate', CreateNotificationTemplateSchema);
	registry.register('UpdateNotificationTemplate', UpdateNotificationTemplateSchema);
	registry.register('NotificationTemplateResponse', NotificationTemplateResponseSchema);
}
