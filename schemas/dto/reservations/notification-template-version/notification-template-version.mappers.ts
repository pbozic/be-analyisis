import type { NotificationTemplateVersionResponse } from './notification-template-version.dto';
import { NotificationTemplateVersionResponseSchema } from './notification-template-version.dto';
import type {
	NotificationTemplateVersionBasePrisma,
	NotificationTemplateVersionWithTemplatePrisma,
} from '../../../../prisma/includes/reservation/notification-template-version';
import type { NotificationTemplateRef } from '../notification-template/notification-template.dto';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_template_version to NotificationTemplateVersionResponse
 */
export function toNotificationTemplateVersionResponse(
	row: NotificationTemplateVersionBasePrisma
): NotificationTemplateVersionResponse {
	const r = row;

	const dto = {
		notification_template_version_id: r.notification_template_version_id,
		notification_template_id: r.notification_template_id,
		version: r.version,
		status: r.status,
		subject: r.subject ?? null,
		body_text: r.body_text ?? null,
		variables_json_schema: r.variables_json_schema,
		compiled_artifacts: r.compiled_artifacts ?? null,
		created_by_user_id: r.created_by_user_id ?? null,
		created_at: toIso(r.created_at) ?? '',
	};

	return NotificationTemplateVersionResponseSchema.parse(dto);
}

/**
 * Map list of notification template versions
 */
export function toNotificationTemplateVersionList(
	rows: NotificationTemplateVersionBasePrisma[]
): NotificationTemplateVersionResponse[] {
	return rows.map(toNotificationTemplateVersionResponse);
}

/**
 * Map Prisma notification_template_version with template to NotificationTemplateVersionResponse
 */
export function toNotificationTemplateVersionWithTemplateResponse(
	row: NotificationTemplateVersionWithTemplatePrisma
): NotificationTemplateVersionResponse {
	const r = row;

	const template: NotificationTemplateRef | undefined = r.template
		? {
				notification_template_id: r.template.notification_template_id,
				key: r.template.key,
				name: r.template.name,
			}
		: undefined;

	const dto = {
		notification_template_version_id: r.notification_template_version_id,
		notification_template_id: r.notification_template_id,
		version: r.version,
		status: r.status,
		subject: r.subject ?? null,
		body_text: r.body_text ?? null,
		variables_json_schema: r.variables_json_schema,
		compiled_artifacts: r.compiled_artifacts ?? null,
		created_by_user_id: r.created_by_user_id ?? null,
		created_at: toIso(r.created_at) ?? '',
		template,
	};

	return NotificationTemplateVersionResponseSchema.parse(dto);
}

export default {
	toNotificationTemplateVersionResponse,
	toNotificationTemplateVersionList,
	toNotificationTemplateVersionWithTemplateResponse,
};
