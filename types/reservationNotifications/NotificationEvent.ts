import { z } from 'zod';

import type { notification_event } from '../../prisma/schemas/interfaces';

export const CreateNotificationEventSchema = z.object({
	key: z.string().min(1, 'Key is required'), // e.g. "booking.confirmed"
	name: z.string().min(1, 'Name is required'),
	description: z.string().optional(),
});

export const UpdateNotificationEventSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	description: z.string().optional(),
});

export const DeleteNotificationEventSchema = z.object({
	notification_event_id: z.string().uuid(),
});

export type CreateNotificationEventInput = z.infer<typeof CreateNotificationEventSchema>;
export type UpdateNotificationEventInput = z.infer<typeof UpdateNotificationEventSchema>;

export type NotificationEvent = notification_event;
