import type { NotificationTemplateResponse } from './notification-template.dto';
import { NotificationTemplateResponseSchema } from './notification-template.dto';
import type { NotificationTemplateBasePrisma } from '../../../../prisma/includes/reservation/notification-template';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_template to NotificationTemplateResponse
 */
export function toNotificationTemplateResponse(row: NotificationTemplateBasePrisma): NotificationTemplateResponse {
	const r = row;

	const dto = {
		notification_template_id: r.notification_template_id,
		reservation_module_id: r.reservation_module_id,
		key: r.key,
		name: r.name,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
	};

	return NotificationTemplateResponseSchema.parse(dto);
}

/**
 * Map list of notification templates
 */
export function toNotificationTemplateList(rows: NotificationTemplateBasePrisma[]): NotificationTemplateResponse[] {
	return rows.map(toNotificationTemplateResponse);
}

export default {
	toNotificationTemplateResponse,
	toNotificationTemplateList,
};
