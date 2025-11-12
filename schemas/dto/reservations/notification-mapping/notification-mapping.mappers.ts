import type { NotificationMappingResponse } from './notification-mapping.dto';
import { NotificationMappingResponseSchema } from './notification-mapping.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_mapping to NotificationMappingResponse
 */
export function toNotificationMappingResponse(row: any): NotificationMappingResponse {
	const r = row;

	const dto = {
		notification_mapping_id: r.notification_mapping_id,
		template_id: r.template_id,
		event_id: r.event_id,
		user_id: r.user_id ?? null,
		business_id: r.business_id ?? null,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		template: r.template ?? undefined,
		event: r.event ?? undefined,
		user: r.user ?? undefined,
		business: r.business ?? undefined,
	};

	return NotificationMappingResponseSchema.parse(dto);
}

/**
 * Map list of notification mappings
 */
export function toNotificationMappingList(rows: any[]): NotificationMappingResponse[] {
	return rows.map(toNotificationMappingResponse);
}

export default {
	toNotificationMappingResponse,
	toNotificationMappingList,
};
