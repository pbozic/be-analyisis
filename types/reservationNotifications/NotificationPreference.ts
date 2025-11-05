import { z } from 'zod';
import { NOTIFICATION_CHANNEL } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { NotificationChannelEnum } from '../reservationNotifications/enums.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationEvent } from './NotificationEvent.js';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';
import { NotificationEventResponseBaseSchema } from './NotificationEvent';

extendZodWithOpenApi(z);

export const UpsertNotificationPreferenceSchema = z
	.object({
		notification_event_id: z.string().uuid(),
		channel: NotificationChannelEnum,
		enabled: z.boolean(), // explicit toggle
	})
	.openapi('UpsertNotificationPreference');

export const DeleteNotificationPreferenceSchema = z
	.object({
		notification_preference_id: z.string().uuid(),
	})
	.openapi('DeleteNotificationPreference');

export type UpsertNotificationPreferenceInput = z.infer<typeof UpsertNotificationPreferenceSchema>;

export const CreateNotificationPreferenceSchema = z
	.object({
		notification_preference_id: z.string().uuid(),
		reservation_module_id: z.string().uuid(),
		notification_event_id: z.string().uuid(),
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		enabled: z.boolean(),
	})
	.openapi('CreateNotificationPreference');

export type CreateNotificationPreferenceInput = z.infer<typeof CreateNotificationPreferenceSchema>;

export const UpdateNotificationPreferenceSchema =
	CreateNotificationPreferenceSchema.partial().openapi('UpdateNotificationPreference');
export type UpdateNotificationPreferenceInput = z.infer<typeof UpdateNotificationPreferenceSchema>;

export const NotificationPreferenceResponseBaseSchema = z
	.object({
		notification_preference_id: z.string(),
		reservation_module_id: z.string(),
		notification_event_id: z.string(),
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		enabled: z.boolean(),
		updated_at: z.string().datetime(),
	})
	.openapi('NotificationPreferenceResponseBase');

export const NotificationPreferenceResponseSchema = NotificationPreferenceResponseBaseSchema.extend({
	reservation_module: ReservationModuleResponseBaseSchema,
	event: NotificationEventResponseBaseSchema,
}).openapi('NotificationPreferenceResponse');

export type NotificationPreferenceBase = z.infer<typeof NotificationPreferenceResponseBaseSchema>;
export type NotificationPreferenceResponse = z.infer<typeof NotificationPreferenceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationPreference', CreateNotificationPreferenceSchema);
	registry.register('UpsertNotificationPreference', UpsertNotificationPreferenceSchema);
	registry.register('UpdateNotificationPreference', UpdateNotificationPreferenceSchema);
	registry.register('NotificationPreferenceResponseBase', NotificationPreferenceResponseBaseSchema);
	registry.register('NotificationPreferenceResponse', NotificationPreferenceResponseSchema);
}

export type NotificationPreference = {
	notification_preference_id: string;
	reservation_module_id: string;
	notification_event_id: string;
	channel: NOTIFICATION_CHANNEL;
	enabled: boolean;
	updated_at: Date;
	reservation_module?: ReservationModule;
	event?: NotificationEvent;
};
