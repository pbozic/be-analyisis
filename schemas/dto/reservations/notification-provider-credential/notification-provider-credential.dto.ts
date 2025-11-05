import { z } from 'zod';
import { NOTIFICATION_CHANNEL } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { JsonObjectSchema } from '../_common';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const NotificationProviderCredentialBaseSchema = z
	.object({
		notification_provider_credential_id: UUID,
		reservation_module_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		provider: z.string(),
		config: z.unknown(),
		is_default: z.boolean(),
		created_at: Timestamp,
	})
	.openapi({
		title: 'NotificationProviderCredentialBase',
		description: 'Base notification provider credential schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const NotificationProviderCredentialRefSchema = z
	.object({
		notification_provider_credential_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		provider: z.string(),
		is_default: z.boolean(),
	})
	.openapi({
		title: 'NotificationProviderCredentialRef',
		description: 'Minimal notification provider credential reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateNotificationProviderCredentialRequestSchema = z
	.object({
		reservation_module_id: UUID,
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		provider: z.string().min(1, 'Provider is required'),
		config: JsonObjectSchema,
		is_default: z.boolean().optional(),
	})
	.openapi({
		title: 'CreateNotificationProviderCredentialRequest',
		description: 'Request schema for creating a new notification provider credential',
	});

export const UpdateNotificationProviderCredentialRequestSchema = z
	.object({
		config: JsonObjectSchema.optional(),
		is_default: z.boolean().optional(),
	})
	.openapi({
		title: 'UpdateNotificationProviderCredentialRequest',
		description: 'Request schema for updating an existing notification provider credential',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const NotificationProviderCredentialResponseSchema = NotificationProviderCredentialBaseSchema.extend({
	reservation_module: ReservationModuleRefSchema.optional(),
}).openapi({
	title: 'NotificationProviderCredentialResponse',
	description: 'Complete notification provider credential response with related entities',
});

// ===== EXPORTED TYPES =====
export type NotificationProviderCredentialBase = z.infer<typeof NotificationProviderCredentialBaseSchema>;
export type NotificationProviderCredentialRef = z.infer<typeof NotificationProviderCredentialRefSchema>;
export type CreateNotificationProviderCredentialRequest = z.infer<
	typeof CreateNotificationProviderCredentialRequestSchema
>;
export type UpdateNotificationProviderCredentialRequest = z.infer<
	typeof UpdateNotificationProviderCredentialRequestSchema
>;
export type NotificationProviderCredentialResponse = z.infer<typeof NotificationProviderCredentialResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationProviderCredentialBase', NotificationProviderCredentialBaseSchema);
	registry.register('NotificationProviderCredentialRef', NotificationProviderCredentialRefSchema);
	registry.register('CreateNotificationProviderCredentialRequest', CreateNotificationProviderCredentialRequestSchema);
	registry.register('UpdateNotificationProviderCredentialRequest', UpdateNotificationProviderCredentialRequestSchema);
	registry.register('NotificationProviderCredentialResponse', NotificationProviderCredentialResponseSchema);
}
