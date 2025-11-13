import { Prisma } from '@prisma/client';

export const notificationProviderCredentialBase =
	Prisma.validator<Prisma.notification_provider_credentialDefaultArgs>()({
		select: {
			notification_provider_credential_id: true,
			reservation_module_id: true,
			channel: true,
			provider: true,
			config: true,
			is_default: true,
			created_at: true,
		},
	});

export type NotificationProviderCredentialBasePrisma = Prisma.notification_provider_credentialGetPayload<
	typeof notificationProviderCredentialBase
>;
