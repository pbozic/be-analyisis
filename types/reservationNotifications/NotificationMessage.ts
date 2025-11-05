import { z } from 'zod';
import { MESSAGE_STATUS, NOTIFICATION_CHANNEL } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { NotificationChannelEnum, MessageStatusEnum } from '../reservationNotifications/enums.js';
import { JsonObjectSchema } from './_common.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { NotificationEvent } from './NotificationEvent.js';
import type { NotificationTemplate } from './NotificationTemplate.js';
import type { NotificationTemplateVersion } from './NotificationTemplateVersion.js';
import type { NotificationMessageEvent } from './NotificationMessageEvent.js';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';
import { NotificationEventResponseBaseSchema } from './NotificationEvent';
import { NotificationTemplateResponseBaseSchema } from './NotificationTemplate';
import { NotificationTemplateVersionResponseBaseSchema } from './NotificationTemplateVersion';
import { NotificationMessageEventResponseBaseSchema } from './NotificationMessageEvent';

extendZodWithOpenApi(z);

// Usually system-generated; still useful for tests or admin tooling.
export const CreateNotificationMessageSchema = z
	.object({
		reservation_module_id: z.string().uuid(),
		notification_event_id: z.string().uuid(),
		channel: NotificationChannelEnum,
		notification_template_id: z.string().uuid().optional().nullable(),
		template_version: z.number().int().optional().nullable(),
		to_address: z.string().optional().nullable(),
		subject: z.string().optional().nullable(),
		body_text: z.string().optional().nullable(),
		body_html: z.string().optional().nullable(),
		variables: JsonObjectSchema,
		rendered_at: z.date(),
		provider_message_id: z.string().optional().nullable(),
		status: MessageStatusEnum.default('QUEUED'),
		error: z.string().optional().nullable(),
	})
	.openapi('CreateNotificationMessage');

export const UpdateNotificationMessageStatusSchema = z
	.object({
		notification_message_id: z.string().uuid(),
		status: MessageStatusEnum,
		provider_message_id: z.string().optional().nullable(),
		error: z.string().optional().nullable(),
	})
	.openapi('UpdateNotificationMessageStatus');

export const DeleteNotificationMessageSchema = z
	.object({
		notification_message_id: z.string().uuid(),
	})
	.openapi('DeleteNotificationMessage');

export type CreateNotificationMessageInput = z.infer<typeof CreateNotificationMessageSchema>;
export type UpdateNotificationMessageStatusInput = z.infer<typeof UpdateNotificationMessageStatusSchema>;

export const NotificationMessageResponseBaseSchema = z
	.object({
		notification_message_id: z.string(),
		reservation_module_id: z.string(),
		notification_event_id: z.string(),
		channel: z.nativeEnum(NOTIFICATION_CHANNEL),
		notification_template_id: z.string().nullable().optional(),
		template_version: z.number().nullable().optional(),
		to_address: z.string().nullable().optional(),
		subject: z.string().nullable().optional(),
		body_text: z.string().nullable().optional(),
		body_html: z.string().nullable().optional(),
		variables: z.unknown(),
		rendered_at: z.string().datetime(),
		provider_message_id: z.string().nullable().optional(),
		status: z.nativeEnum(MESSAGE_STATUS),
		error: z.string().nullable().optional(),
		created_at: z.string().datetime(),
	})
	.openapi('NotificationMessageResponseBase');

export const NotificationMessageResponseSchema = NotificationMessageResponseBaseSchema.extend({
	reservation_module: ReservationModuleResponseBaseSchema,
	event: NotificationEventResponseBaseSchema,
	template: NotificationTemplateResponseBaseSchema.nullable().optional(),
	version: NotificationTemplateVersionResponseBaseSchema.nullable().optional(),
	events: z.array(NotificationMessageEventResponseBaseSchema),
}).openapi('NotificationMessageResponse');

export type NotificationMessageBase = z.infer<typeof NotificationMessageResponseBaseSchema>;
export type NotificationMessageResponse = z.infer<typeof NotificationMessageResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateNotificationMessage', CreateNotificationMessageSchema);
	registry.register('UpdateNotificationMessage', UpdateNotificationMessageStatusSchema);
	registry.register('DeleteNotificationMessage', DeleteNotificationMessageSchema);
	registry.register('NotificationMessageResponseBase', NotificationMessageResponseBaseSchema);
	registry.register('NotificationMessageResponse', NotificationMessageResponseSchema);
}

export type NotificationMessage = {
	notification_message_id: string;
	reservation_module_id: string;
	notification_event_id: string;
	channel: NOTIFICATION_CHANNEL;
	notification_template_id?: string | null;
	template_version?: number | null;
	to_address?: string | null;
	subject?: string | null;
	body_text?: string | null;
	body_html?: string | null;
	variables: unknown;
	rendered_at: Date;
	provider_message_id?: string | null;
	status: MESSAGE_STATUS;
	error?: string | null;
	created_at: Date;
	reservation_module?: ReservationModule;
	event?: NotificationEvent;
	template?: NotificationTemplate | null;
	version?: NotificationTemplateVersion | null;
	events?: NotificationMessageEvent[];
};
