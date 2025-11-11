import type { NotificationProviderCredentialResponse } from './notification-provider-credential.dto';
import { NotificationProviderCredentialResponseSchema } from './notification-provider-credential.dto';

function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map Prisma notification_provider_credential to NotificationProviderCredentialResponse
 */
export function toNotificationProviderCredentialResponse(row: any): NotificationProviderCredentialResponse {
	const r = row;

	const dto = {
		notification_provider_credential_id: r.notification_provider_credential_id,
		business_id: r.business_id ?? null,
		provider: r.provider,
		credentials: r.credentials,
		is_active: r.is_active ?? true,
		created_at: toIso(r.created_at) ?? '',
		updated_at: toIso(r.updated_at) ?? '',
		business: r.business ?? undefined,
	};

	return NotificationProviderCredentialResponseSchema.parse(dto);
}

/**
 * Map list of notification provider credentials
 */
export function toNotificationProviderCredentialList(rows: any[]): NotificationProviderCredentialResponse[] {
	return rows.map(toNotificationProviderCredentialResponse);
}

export default {
	toNotificationProviderCredentialResponse,
	toNotificationProviderCredentialList,
};
