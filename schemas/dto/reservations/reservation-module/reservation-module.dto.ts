import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { BusinessRefSchema } from '../../Business/index.js';
import { EmployeeRefSchema } from '../employee/employee.dto.js';
import { LocationRefSchema } from '../location/location.dto.js';
import { ServiceRefSchema } from '../service/service.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ReservationModuleBaseSchema = z
	.object({
		reservation_module_id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'RMabc123def45678', description: 'Public link hash' }),
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

// ===== WITH RELATIONS SCHEMA (extends RefSchema with selected relations) =====
export const ReservationModuleWithBusinessSchema = ReservationModuleRefSchema.extend({
	business: z.lazy(() => BusinessRefSchema).optional(),
}).openapi({
	title: 'ReservationModuleWithBusiness',
	description: 'Reservation module reference with business information',
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

export const GetBookingDataRequestSchema = z
	.object({
		public_link_hash: z.string().optional().openapi({
			example: 'abc123def456',
			description: 'Public booking link hash',
		}),
		business_id: UUID.optional(),
	})
	.refine((data) => data.public_link_hash || data.business_id, {
		message: 'Either public_link_hash or business_id must be provided',
	})
	.openapi({
		title: 'GetBookingDataRequest',
		description: 'Request schema for retrieving reservation module booking data',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ReservationModuleResponseSchema = ReservationModuleBaseSchema.extend({
	business: z.lazy(() => BusinessRefSchema).optional(),
}).openapi({
	title: 'ReservationModuleResponse',
	description: 'Complete reservation module response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getReservationModuleById
export const ReservationModuleDAOResponseSchema = ReservationModuleBaseSchema.extend({
	business: z.lazy(() => BusinessRefSchema).optional(),
	locations: z.array(z.lazy(() => LocationRefSchema)).optional(),
	services: z.array(z.lazy(() => ServiceRefSchema)).optional(),
	employees: z.array(z.lazy(() => EmployeeRefSchema)).optional(),
}).openapi({
	title: 'ReservationModuleDAOResponse',
	description: 'Reservation module response from DAO with locations, services, and employees',
});

// DAO response for getReservationModuleByPublicLinkHashOrBusinessId
export const ReservationModulePublicDAOResponseSchema = ReservationModuleBaseSchema.extend({
	business: z
		.object({
			business_id: UUID,
			address: z
				.object({
					address_id: UUID,
				})
				.nullable()
				.optional(),
		})
		.optional(),
	employees: z
		.array(
			z.object({
				employee_id: UUID,
				reservation_module_id: UUID,
				first_name: z.string().nullable().optional(),
				last_name: z.string().nullable().optional(),
				email: z.string().nullable().optional(),
				business_users_id: UUID.nullable().optional(),
				created_at: Timestamp,
				deleted_at: Timestamp.nullable().optional(),
				assignments: z.unknown().optional(),
				schedules: z.unknown().optional(),
				bookings: z.unknown().optional(),
				schedule_slots: z.unknown().optional(),
			})
		)
		.optional(),
	services: z
		.array(
			z.lazy(() =>
				ServiceRefSchema.extend({
					assigned_employees: z.array(z.unknown()).optional(),
				})
			)
		)
		.optional(),
	locations: z.array(z.lazy(() => LocationRefSchema)).optional(),
}).openapi({
	title: 'ReservationModulePublicDAOResponse',
	description: 'Reservation module response from public link with full employee, service, and location details',
});

// ===== EXPORTED TYPES =====
export type ReservationModuleBase = z.infer<typeof ReservationModuleBaseSchema>;
export type ReservationModuleRef = z.infer<typeof ReservationModuleRefSchema>;
export type ReservationModuleWithBusiness = z.infer<typeof ReservationModuleWithBusinessSchema>;
export type CreateReservationModuleRequest = z.infer<typeof CreateReservationModuleRequestSchema>;
export type UpdateReservationModuleRequest = z.infer<typeof UpdateReservationModuleRequestSchema>;
export type UpdateReservationSettingsRequest = z.infer<typeof UpdateReservationSettingsRequestSchema>;
export type GetBookingDataRequest = z.infer<typeof GetBookingDataRequestSchema>;
export type ReservationModuleResponse = z.infer<typeof ReservationModuleResponseSchema>;
export type ReservationModuleDAOResponse = z.infer<typeof ReservationModuleDAOResponseSchema>;
export type ReservationModulePublicDAOResponse = z.infer<typeof ReservationModulePublicDAOResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ReservationModuleBase', ReservationModuleBaseSchema);
	registry.register('ReservationModuleRef', ReservationModuleRefSchema);
	registry.register('ReservationModuleWithBusiness', ReservationModuleWithBusinessSchema);
	registry.register('CreateReservationModuleRequest', CreateReservationModuleRequestSchema);
	registry.register('UpdateReservationModuleRequest', UpdateReservationModuleRequestSchema);
	registry.register('UpdateReservationSettingsRequest', UpdateReservationSettingsRequestSchema);
	registry.register('GetBookingDataRequest', GetBookingDataRequestSchema);
	registry.register('ReservationModuleResponse', ReservationModuleResponseSchema);
	registry.register('ReservationModuleDAO', ReservationModuleDAOResponseSchema);
	registry.register('ReservationModulePublicDAO', ReservationModulePublicDAOResponseSchema);
}
