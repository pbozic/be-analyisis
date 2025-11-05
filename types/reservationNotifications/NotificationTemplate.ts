import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationTemplateVersion } from './NotificationTemplateVersion.js';
import type { NotificationMessage } from './NotificationMessage.js';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';
import { NotificationTemplateVersionResponseBaseSchema } from './NotificationTemplateVersion';
import { NotificationMessageResponseBaseSchema } from './NotificationMessage';

extendZodWithOpenApi(z);

export const CreateNotificationTemplateSchema = z
	.object({
		reservation_module_id: z.string().uuid(),
		key: z.string().min(1, 'Key is required'), // unique per module
		name: z.string().min(1, 'Name is required'),
	})
	.openapi('CreateNotificationTemplate');

export const UpdateNotificationTemplateSchema = z
	.object({
		key: z.string().min(1).optional(), // allow renaming if you want
		name: z.string().min(1).optional(),
	})
	.openapi('UpdateNotificationTemplate');

export const DeleteNotificationTemplateSchema = z
	.object({
		notification_template_id: z.string().uuid(),
	})
	.openapi('DeleteNotificationTemplate');

export type CreateNotificationTemplateInput = z.infer<typeof CreateNotificationTemplateSchema>;
export type UpdateNotificationTemplateInput = z.infer<typeof UpdateNotificationTemplateSchema>;

export const NotificationTemplateResponseBaseSchema = z
	.object({
		notification_template_id: z.string(),
		reservation_module_id: z.string(),
		key: z.string(),
		name: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('NotificationTemplateResponseBase');

export const NotificationTemplateResponseSchema = NotificationTemplateResponseBaseSchema.extend({
	reservation_module: ReservationModuleResponseBaseSchema,
	versions: z.array(NotificationTemplateVersionResponseBaseSchema),
	messages: z.array(NotificationMessageResponseBaseSchema),
}).openapi('NotificationTemplateResponse');

export type NotificationTemplateBase = z.infer<typeof NotificationTemplateResponseBaseSchema>;
export type NotificationTemplateResponse = z.infer<typeof NotificationTemplateResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationTemplate', CreateNotificationTemplateSchema);
	registry.register('UpdateNotificationTemplate', UpdateNotificationTemplateSchema);
	registry.register('DeleteNotificationTemplate', DeleteNotificationTemplateSchema);
	registry.register('NotificationTemplateResponseBase', NotificationTemplateResponseBaseSchema);
	registry.register('NotificationTemplateResponse', NotificationTemplateResponseSchema);
}

export type NotificationTemplate = {
	notification_template_id: string;
	reservation_module_id: string;
	key: string;
	name: string;
	created_at: Date;
	updated_at: Date;
	reservation_module?: ReservationModule;
	versions?: NotificationTemplateVersion[];
	messages?: NotificationMessage[];
};
