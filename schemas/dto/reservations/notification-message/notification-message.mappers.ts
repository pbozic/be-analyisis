import type { NotificationMessageResponse } from './notification-message.dto';
import { NotificationMessageResponseSchema } from './notification-message.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_message to NotificationMessageResponse
 */
export function toNotificationMessageResponse(row: any): NotificationMessageResponse {
	const r = row;

	const dto = {
		notification_message_id: r.notification_message_id,
		template_version_id: r.template_version_id,
		recipient: r.recipient,
		channel: r.channel,
		status: r.status ?? 'pending',
		sent_at: toIso(r.sent_at) ?? null,
		delivered_at: toIso(r.delivered_at) ?? null,
		opened_at: toIso(r.opened_at) ?? null,
		failed_at: toIso(r.failed_at) ?? null,
		error_message: r.error_message ?? null,
		retry_count: r.retry_count ?? 0,
		metadata: r.metadata ?? null,
		created_at: toIso(r.created_at) ?? '',
		template_version: r.template_version ?? undefined,
		notification_message_events: r.notification_message_events ?? undefined,
	};

	return NotificationMessageResponseSchema.parse(dto);
}

/**
 * Map list of notification messages
 */
export function toNotificationMessageList(rows: any[]): NotificationMessageResponse[] {
	return rows.map(toNotificationMessageResponse);
}

export default {
	toNotificationMessageResponse,
	toNotificationMessageList,
};
