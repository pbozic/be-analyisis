import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { BusinessResponseDto } from '../../Business/business.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ReservationModuleBaseSchema = z
	.object({
		reservation_module_id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'abc123def456', description: 'Public booking link hash' }),
		business_id: UUID,
		action_bundle_id: UUID.nullable().optional(),
		subscription_active_until: Timestamp.nullable().optional(),
		subscription_expires_at: Timestamp.nullable().optional(),
		stripe_subscription_schedule_id: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'sub_sched_1234567890', description: 'Stripe subscription schedule ID' }),
		hours_before_reschedule: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 24, description: 'Minimum hours before booking to allow rescheduling' }),
		hours_before_cancel: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 48, description: 'Minimum hours before booking to allow cancellation' }),
		publicly_visible: z
			.boolean()
			.openapi({ example: true, description: 'Whether reservation module is publicly accessible' }),
		logo_id: UUID.nullable().optional(),
		banner_id: UUID.nullable().optional(),
		reviewable_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'ReservationModuleBase',
		description: 'Base reservation module schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ReservationModuleRefSchema = z
	.object({
		reservation_module_id: UUID,
		business_id: UUID,
		publicly_visible: z.boolean().openapi({ example: true }),
	})
	.openapi({
		title: 'ReservationModuleRef',
		description: 'Minimal reservation module reference for embedding in other entities',
	});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateReservationModuleRequestSchema = z
	.object({
		reservation_module_id: UUID,
		public_link_hash: z.string().nullable().optional(),
		business_id: UUID,
		action_bundle_id: UUID.nullable().optional(),
		subscription_active_until: z.unknown().nullable().optional(),
		subscription_expires_at: z.unknown().nullable().optional(),
		stripe_subscription_schedule_id: UUID.nullable().optional(),
		hours_before_reschedule: z.number().int().nullable().optional(),
		hours_before_cancel: z.number().int().nullable().optional(),
		publicly_visible: z.boolean(),
		logo_id: UUID.nullable().optional(),
		banner_id: UUID.nullable().optional(),
		reviewable_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'CreateReservationModuleRequest',
		description: 'Request schema for creating a new reservation module',
	});

export const UpdateReservationModuleRequestSchema = CreateReservationModuleRequestSchema.partial().openapi({
	title: 'UpdateReservationModuleRequest',
	description: 'Request schema for updating an existing reservation module',
});

export const UpdateReservationSettingsRequestSchema = UpdateReservationModuleRequestSchema.pick({
	hours_before_reschedule: true,
	hours_before_cancel: true,
	publicly_visible: true,
})
	.extend({
		hours_before_reschedule: z.number().int().nullable().optional().openapi({ example: 24 }),
		hours_before_cancel: z.number().int().nullable().optional().openapi({ example: 48 }),
		publicly_visible: z.boolean().optional().openapi({ example: true }),
	})
	.openapi({
		title: 'UpdateReservationSettingsRequest',
		description: 'Request schema for updating reservation module settings',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ReservationModuleResponseSchema = ReservationModuleBaseSchema.extend({
	business: BusinessResponseDto.optional(),
}).openapi({
	title: 'ReservationModuleResponse',
	description: 'Complete reservation module response with related entities',
});

// ===== EXPORTED TYPES =====
export type ReservationModuleBase = z.infer<typeof ReservationModuleBaseSchema>;
export type ReservationModuleRef = z.infer<typeof ReservationModuleRefSchema>;
export type CreateReservationModuleRequest = z.infer<typeof CreateReservationModuleRequestSchema>;
export type UpdateReservationModuleRequest = z.infer<typeof UpdateReservationModuleRequestSchema>;
export type UpdateReservationSettingsRequest = z.infer<typeof UpdateReservationSettingsRequestSchema>;
export type ReservationModuleResponse = z.infer<typeof ReservationModuleResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ReservationModuleBase', ReservationModuleBaseSchema);
	registry.register('ReservationModuleRef', ReservationModuleRefSchema);
	registry.register('CreateReservationModuleRequest', CreateReservationModuleRequestSchema);
	registry.register('UpdateReservationModuleRequest', UpdateReservationModuleRequestSchema);
	registry.register('UpdateReservationSettingsRequest', UpdateReservationSettingsRequestSchema);
	registry.register('ReservationModuleResponse', ReservationModuleResponseSchema);
}
