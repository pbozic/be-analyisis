import type { NotificationEventResponse } from './notification-event.dto';
import { NotificationEventResponseSchema } from './notification-event.dto';
import type { NotificationEventBasePrisma } from '../../../../prisma/includes/reservation/notification-event';

/**
 * Map Prisma notification_event to NotificationEventResponse
 */
export function toNotificationEventResponse(row: NotificationEventBasePrisma): NotificationEventResponse {
	const r = row;

	const dto = {
		notification_event_id: r.notification_event_id,
		key: r.key,
		name: r.name,
		description: r.description ?? null,
	};

	return NotificationEventResponseSchema.parse(dto);
}

/**
 * Map list of notification events
 */
export function toNotificationEventList(rows: NotificationEventBasePrisma[]): NotificationEventResponse[] {
	return rows.map(toNotificationEventResponse);
}

export default {
	toNotificationEventResponse,
	toNotificationEventList,
};
