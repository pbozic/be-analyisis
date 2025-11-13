import type { NotificationPreferenceResponse } from './notification-preference.dto';
import { NotificationPreferenceResponseSchema } from './notification-preference.dto';
import type { NotificationPreferenceBasePrisma } from '../../../../prisma/includes/reservation/notification-preference';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_preference to NotificationPreferenceResponse
 */
export function toNotificationPreferenceResponse(
	row: NotificationPreferenceBasePrisma
): NotificationPreferenceResponse {
	const r = row;

	const dto = {
		notification_preference_id: r.notification_preference_id,
		reservation_module_id: r.reservation_module_id,
		notification_event_id: r.notification_event_id,
		channel: r.channel,
		enabled: r.enabled,
		updated_at: toIso(r.updated_at) ?? '',
	};

	return NotificationPreferenceResponseSchema.parse(dto);
}

/**
 * Map list of notification preferences
 */
export function toNotificationPreferenceList(
	rows: NotificationPreferenceBasePrisma[]
): NotificationPreferenceResponse[] {
	return rows.map(toNotificationPreferenceResponse);
}

export default {
	toNotificationPreferenceResponse,
	toNotificationPreferenceList,
};
