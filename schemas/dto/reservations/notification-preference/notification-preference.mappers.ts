import type { NotificationPreferenceResponse } from './notification-preference.dto';
import { NotificationPreferenceResponseSchema } from './notification-preference.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_preference to NotificationPreferenceResponse
 */
export function toNotificationPreferenceResponse(row: any): NotificationPreferenceResponse {
	const r = row;

	const dto = {
		notification_preference_id: r.notification_preference_id,
		user_id: r.user_id,
		event_id: r.event_id,
		channel: r.channel,
		is_enabled: r.is_enabled ?? true,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		user: r.user ?? undefined,
		event: r.event ?? undefined,
	};

	return NotificationPreferenceResponseSchema.parse(dto);
}

/**
 * Map list of notification preferences
 */
export function toNotificationPreferenceList(rows: any[]): NotificationPreferenceResponse[] {
	return rows.map(toNotificationPreferenceResponse);
}

export default {
	toNotificationPreferenceResponse,
	toNotificationPreferenceList,
};
