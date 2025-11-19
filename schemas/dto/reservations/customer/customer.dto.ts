import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp, Email } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { BookingRefSchema } from '../booking/booking.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const CustomerBaseSchema = z
	.object({
		customer_id: UUID,
		reservation_module_id: UUID,
		first_name: z.string().openapi({ example: 'John' }),
		last_name: z.string().openapi({ example: 'Doe' }),
		email: Email.nullable().optional(),
		telephone: z.string().nullable().optional().openapi({ example: '+38640123456' }),
		created_at: Timestamp,
		updated_at: Timestamp,
		code: z.string().openapi({ example: 'CUST001', description: 'Unique customer code' }),
		user_id: UUID.nullable().optional(),
	})
	.openapi({
		title: 'CustomerBase',
		description: 'Base customer schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const CustomerRefSchema = z
	.object({
		customer_id: UUID,
		first_name: z.string().openapi({ example: 'John' }),
		last_name: z.string().openapi({ example: 'Doe' }),
		email: Email.nullable().optional(),
		telephone: z.string().nullable().optional().openapi({ example: '+38640123456' }),
	})
	.openapi({
		title: 'CustomerRef',
		description: 'Minimal customer reference for embedding in other entities',
	});

// ===== DETAIL SCHEMA (full customer info for DAO returns) =====
export const CustomerDetailSchema = CustomerBaseSchema.omit({
	reservation_module_id: true,
}).openapi({
	title: 'CustomerDetail',
	description: 'Full customer details returned from DAO functions (without nested module)',
});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateCustomerRequestSchema = z
	.object({
		first_name: z.string().min(1, 'First name is required').openapi({ example: 'John' }),
		last_name: z.string().min(1, 'Last name is required').openapi({ example: 'Doe' }),
		email: Email.optional(),
		telephone: z.string().optional().openapi({ example: '+38640123456' }),
		user_id: UUID.optional(),
		customer_id: UUID.optional(),
		reservation_module_id: UUID,
	})
	.openapi({
		title: 'CreateCustomerRequest',
		description: 'Request schema for creating a new customer',
	});

export const UpdateCustomerRequestSchema = CreateCustomerRequestSchema.partial().openapi({
	title: 'UpdateCustomerRequest',
	description: 'Request schema for updating an existing customer',
});

export const DeleteCustomerRequestSchema = z
	.object({
		customer_id: UUID,
	})
	.openapi({
		title: 'DeleteCustomerRequest',
		description: 'Request schema for deleting a customer',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====
export const CustomerResponseSchema = CustomerBaseSchema.extend({
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
}).openapi({
	title: 'CustomerResponse',
	description: 'Complete customer response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getCustomersByReservationModuleId and getCustomerById
export const CustomerDAOResponseSchema = CustomerBaseSchema.extend({
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
	bookings: z.lazy(() => z.array(BookingRefSchema).optional()),
}).openapi({
	title: 'CustomerDAOResponse',
	description: 'Customer response from DAO functions with reservation module and bookings',
});

// DAO response for getCustomerByCode (with nested business and filtered bookings)
export const CustomerByCodeDAOResponseSchema = CustomerBaseSchema.extend({
	reservation_module: z
		.lazy(() =>
			ReservationModuleRefSchema.extend({
				business: z
					.object({
						business_id: UUID,
						address: z.object({ address_id: UUID }).nullable().optional(),
					})
					.optional(),
			})
		)
		.optional(),
	bookings: z
		.array(
			z.object({
				booking_id: UUID,
				service_id: UUID,
				employee_id: UUID.nullable().optional(),
				location_id: UUID.nullable().optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'CustomerByCodeDAOResponse',
	description: 'Customer response from getCustomerByCode with nested business and filtered bookings',
});

// ===== EXPORTED TYPES =====
export type CustomerBase = z.infer<typeof CustomerBaseSchema>;
export type CustomerRef = z.infer<typeof CustomerRefSchema>;
export type CustomerDetail = z.infer<typeof CustomerDetailSchema>;
export type CreateCustomerRequest = z.infer<typeof CreateCustomerRequestSchema>;
export type UpdateCustomerRequest = z.infer<typeof UpdateCustomerRequestSchema>;
export type DeleteCustomerRequest = z.infer<typeof DeleteCustomerRequestSchema>;
export type CustomerResponse = z.infer<typeof CustomerResponseSchema>;
export type CustomerDAOResponse = z.infer<typeof CustomerDAOResponseSchema>;
export type CustomerByCodeDAOResponse = z.infer<typeof CustomerByCodeDAOResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CustomerBase', CustomerBaseSchema);
	registry.register('CustomerRef', CustomerRefSchema);
	registry.register('CustomerDetail', CustomerDetailSchema);
	registry.register('CreateCustomerRequest', CreateCustomerRequestSchema);
	registry.register('UpdateCustomerRequest', UpdateCustomerRequestSchema);
	registry.register('DeleteCustomerRequest', DeleteCustomerRequestSchema);
	registry.register('CustomerResponse', CustomerResponseSchema);
	registry.register('CustomerDAO', CustomerDAOResponseSchema);
	registry.register('CustomerByCodeDAO', CustomerByCodeDAOResponseSchema);
}
