import type { NotificationEventResponse } from './notification-event.dto';
import { NotificationEventResponseSchema } from './notification-event.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_event to NotificationEventResponse
 */
export function toNotificationEventResponse(row: any): NotificationEventResponse {
	const r = row;

	const dto = {
		notification_event_id: r.notification_event_id,
		event_name: r.event_name,
		display_name: r.display_name ?? null,
		description: r.description ?? null,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		notification_templates: r.notification_templates ?? undefined,
		notification_message_events: r.notification_message_events ?? undefined,
	};

	return NotificationEventResponseSchema.parse(dto);
}

/**
 * Map list of notification events
 */
export function toNotificationEventList(rows: any[]): NotificationEventResponse[] {
	return rows.map(toNotificationEventResponse);
}

export default {
	toNotificationEventResponse,
	toNotificationEventList,
};
