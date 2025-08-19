import { z } from 'zod';

import type { notification_provider_credential } from '../../prisma/schemas/interfaces';
import { NotificationChannelEnum } from './enums.ts';
import { JsonObjectSchema } from './_common';

export const CreateNotificationProviderCredentialSchema = z.object({
	reservation_module_id: z.string().uuid(),
	channel: NotificationChannelEnum,
	provider: z.string().min(1, 'Provider is required'), // e.g., "sendgrid", "twilio"
	config: JsonObjectSchema, // secrets, sender, domain, etc.
	is_default: z.boolean().optional(), // default false in DB
});

export const UpdateNotificationProviderCredentialSchema = z.object({
	notification_provider_credential_id: z.string().uuid(),
	config: JsonObjectSchema.optional(),
	is_default: z.boolean().optional(),
});

export const DeleteNotificationProviderCredentialSchema = z.object({
	notification_provider_credential_id: z.string().uuid(),
});

export type CreateNotificationProviderCredentialInput = z.infer<typeof CreateNotificationProviderCredentialSchema>;
export type UpdateNotificationProviderCredentialInput = z.infer<typeof UpdateNotificationProviderCredentialSchema>;

export type NotificationProviderCredential = notification_provider_credential;
