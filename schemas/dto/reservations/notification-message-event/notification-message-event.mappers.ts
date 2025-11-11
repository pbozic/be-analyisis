import type { NotificationMessageEventResponse } from './notification-message-event.dto';
import { NotificationMessageEventResponseSchema } from './notification-message-event.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_message_event to NotificationMessageEventResponse
 */
export function toNotificationMessageEventResponse(row: any): NotificationMessageEventResponse {
	const r = row;

	const dto = {
		notification_message_event_id: r.notification_message_event_id,
		message_id: r.message_id,
		event_id: r.event_id,
		event_data: r.event_data ?? null,
		timestamp: toIso(r.timestamp) ?? '',
		message: r.message ?? undefined,
		event: r.event ?? undefined,
	};

	return NotificationMessageEventResponseSchema.parse(dto);
}

/**
 * Map list of notification message events
 */
export function toNotificationMessageEventList(rows: any[]): NotificationMessageEventResponse[] {
	return rows.map(toNotificationMessageEventResponse);
}

export default {
	toNotificationMessageEventResponse,
	toNotificationMessageEventList,
};
