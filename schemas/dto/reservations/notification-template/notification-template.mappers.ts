import type { NotificationTemplateResponse } from './notification-template.dto';
import { NotificationTemplateResponseSchema } from './notification-template.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_template to NotificationTemplateResponse
 */
export function toNotificationTemplateResponse(row: any): NotificationTemplateResponse {
	const r = row;

	const dto = {
		notification_template_id: r.notification_template_id,
		business_id: r.business_id ?? null,
		name: r.name,
		description: r.description ?? null,
		channel: r.channel,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		business: r.business ?? undefined,
		notification_template_versions: r.notification_template_versions ?? undefined,
		notification_mappings: r.notification_mappings ?? undefined,
	};

	return NotificationTemplateResponseSchema.parse(dto);
}

/**
 * Map list of notification templates
 */
export function toNotificationTemplateList(rows: any[]): NotificationTemplateResponse[] {
	return rows.map(toNotificationTemplateResponse);
}

export default {
	toNotificationTemplateResponse,
	toNotificationTemplateList,
};
