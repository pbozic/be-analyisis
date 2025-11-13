import type { NotificationMessageEventResponse } from './notification-message-event.dto';
import { NotificationMessageEventResponseSchema } from './notification-message-event.dto';
import type { NotificationMessageEventBasePrisma } from '../../../../prisma/includes/reservation/notification-message-event';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_message_event to NotificationMessageEventResponse
 */
export function toNotificationMessageEventResponse(
	row: NotificationMessageEventBasePrisma
): NotificationMessageEventResponse {
	const r = row;

	const dto = {
		notification_message_event_id: r.notification_message_event_id,
		notification_message_id: r.notification_message_id,
		type: r.type,
		provider_raw: r.provider_raw ?? null,
		occurred_at: toIso(r.occurred_at) ?? '',
	};

	return NotificationMessageEventResponseSchema.parse(dto);
}

/**
 * Map list of notification message events
 */
export function toNotificationMessageEventList(
	rows: NotificationMessageEventBasePrisma[]
): NotificationMessageEventResponse[] {
	return rows.map(toNotificationMessageEventResponse);
}

export default {
	toNotificationMessageEventResponse,
	toNotificationMessageEventList,
};
