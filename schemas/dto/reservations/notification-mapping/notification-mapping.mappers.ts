import type { NotificationMappingResponse } from './notification-mapping.dto';
import { NotificationMappingResponseSchema } from './notification-mapping.dto';
import type { NotificationMappingBasePrisma } from '../../../../prisma/includes/reservation/notification-mapping';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_mapping to NotificationMappingResponse
 */
export function toNotificationMappingResponse(row: NotificationMappingBasePrisma): NotificationMappingResponse {
	const r = row;

	const dto = {
		notification_mapping_id: r.notification_mapping_id,
		reservation_module_id: r.reservation_module_id,
		notification_event_id: r.notification_event_id,
		notification_template_version_id: r.notification_template_version_id,
		conditions: r.conditions ?? null,
		is_active: r.is_active,
		created_at: toIso(r.created_at) ?? '',
	};

	return NotificationMappingResponseSchema.parse(dto);
}

/**
 * Map list of notification mappings
 */
export function toNotificationMappingList(rows: NotificationMappingBasePrisma[]): NotificationMappingResponse[] {
	return rows.map(toNotificationMappingResponse);
}

export default {
	toNotificationMappingResponse,
	toNotificationMappingList,
};
