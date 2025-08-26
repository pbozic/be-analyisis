import { z } from 'zod';

import type { notification_preference } from '../../prisma/schemas/interfaces';
import { NotificationChannelEnum } from './enums.ts';

export const UpsertNotificationPreferenceSchema = z.object({
	notification_event_id: z.string().uuid(),
	channel: NotificationChannelEnum,
	enabled: z.boolean(), // explicit toggle
});

export const DeleteNotificationPreferenceSchema = z.object({
	notification_preference_id: z.string().uuid(),
});

export type UpsertNotificationPreferenceInput = z.infer<typeof UpsertNotificationPreferenceSchema>;
export type NotificationPreference = notification_preference;
