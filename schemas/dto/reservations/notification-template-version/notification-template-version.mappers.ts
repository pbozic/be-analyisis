import type { NotificationTemplateVersionResponse } from './notification-template-version.dto';
import { NotificationTemplateVersionResponseSchema } from './notification-template-version.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_template_version to NotificationTemplateVersionResponse
 */
export function toNotificationTemplateVersionResponse(row: any): NotificationTemplateVersionResponse {
	const r = row;

	const dto = {
		notification_template_version_id: r.notification_template_version_id,
		template_id: r.template_id,
		version: r.version,
		subject: r.subject ?? null,
		body: r.body,
		variables: r.variables ?? null,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		template: r.template ?? undefined,
		notification_messages: r.notification_messages ?? undefined,
	};

	return NotificationTemplateVersionResponseSchema.parse(dto);
}

/**
 * Map list of notification template versions
 */
export function toNotificationTemplateVersionList(rows: any[]): NotificationTemplateVersionResponse[] {
	return rows.map(toNotificationTemplateVersionResponse);
}

export default {
	toNotificationTemplateVersionResponse,
	toNotificationTemplateVersionList,
};
