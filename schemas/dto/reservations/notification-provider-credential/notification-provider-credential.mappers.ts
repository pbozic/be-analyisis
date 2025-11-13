import type { NotificationProviderCredentialResponse } from './notification-provider-credential.dto';
import { NotificationProviderCredentialResponseSchema } from './notification-provider-credential.dto';
import type { NotificationProviderCredentialBasePrisma } from '../../../../prisma/includes/reservation/notification-provider-credential';

function toIso(d: Date | string | null | undefined): string | undefined {
	if (!d) return undefined;
	return d instanceof Date ? d.toISOString() : new Date(d).toISOString();
}

/**
 * Map Prisma notification_provider_credential to NotificationProviderCredentialResponse
 */
export function toNotificationProviderCredentialResponse(
	row: NotificationProviderCredentialBasePrisma
): NotificationProviderCredentialResponse {
	const r = row;

	const dto = {
		notification_provider_credential_id: r.notification_provider_credential_id,
		reservation_module_id: r.reservation_module_id,
		channel: r.channel,
		provider: r.provider,
		config: r.config,
		is_default: r.is_default,
		created_at: toIso(r.created_at) ?? '',
	};

	return NotificationProviderCredentialResponseSchema.parse(dto);
}

/**
 * Map list of notification provider credentials
 */
export function toNotificationProviderCredentialList(
	rows: NotificationProviderCredentialBasePrisma[]
): NotificationProviderCredentialResponse[] {
	return rows.map(toNotificationProviderCredentialResponse);
}

export default {
	toNotificationProviderCredentialResponse,
	toNotificationProviderCredentialList,
};
