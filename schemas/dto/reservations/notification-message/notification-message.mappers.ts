import type { NotificationMessageResponse } from './notification-message.dto';
import { NotificationMessageResponseSchema } from './notification-message.dto';
import type { NotificationMessageBasePrisma } from '../../../../prisma/includes/reservation/notification-message';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_message to NotificationMessageResponse
 */
export function toNotificationMessageResponse(row: NotificationMessageBasePrisma): NotificationMessageResponse {
	const r = row;

	const dto = {
		notification_message_id: r.notification_message_id,
		reservation_module_id: r.reservation_module_id,
		notification_event_id: r.notification_event_id,
		channel: r.channel,
		notification_template_id: r.notification_template_id ?? null,
		template_version: r.template_version ?? null,
		to_address: r.to_address ?? null,
		subject: r.subject ?? null,
		body_text: r.body_text ?? null,
		body_html: r.body_html ?? null,
		variables: r.variables,
		rendered_at: toIso(r.rendered_at) ?? '',
		provider_message_id: r.provider_message_id ?? null,
		status: r.status,
		error: r.error ?? null,
		created_at: toIso(r.created_at) ?? '',
	};

	return NotificationMessageResponseSchema.parse(dto);
}

/**
 * Map list of notification messages
 */
export function toNotificationMessageList(rows: NotificationMessageBasePrisma[]): NotificationMessageResponse[] {
	return rows.map(toNotificationMessageResponse);
}

export default {
	toNotificationMessageResponse,
	toNotificationMessageList,
};
