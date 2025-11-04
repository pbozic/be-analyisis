import { z } from 'zod';
import { NOTIFICATION_CHANNEL } from '@prisma/client';

import { NotificationChannelEnum } from '../reservationNotifications/enums.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationEvent } from './NotificationEvent.js';

export const UpsertNotificationPreferenceSchema = z.object({
	notification_event_id: z.string().uuid(),
	channel: NotificationChannelEnum,
	enabled: z.boolean(), // explicit toggle
});

export const DeleteNotificationPreferenceSchema = z.object({
	notification_preference_id: z.string().uuid(),
});

export type UpsertNotificationPreferenceInput = z.infer<typeof UpsertNotificationPreferenceSchema>;

export type NotificationPreference = {
	notification_preference_id: string;
	reservation_module_id: string;
	notification_event_id: string;
	channel: NOTIFICATION_CHANNEL;
	enabled: boolean;
	updated_at: string;
	reservation_module: ReservationModule;
	event: NotificationEvent;
};
