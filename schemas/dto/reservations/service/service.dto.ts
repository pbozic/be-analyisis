import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../../primitives';
import { ReservationModuleRefSchema } from '../reservation-module/reservation-module.dto.js';
import { ServiceCategoryRefSchema } from '../service-category/service-category.dto.js';
import { BookingRefSchema } from '../booking/booking.dto.js';
import { ServiceAssignmentRefSchema } from '../service-assignment/service-assignment.dto.js';
import { EmployeeRefSchema } from '../employee/employee.dto.js';
import { CustomerRefSchema } from '../customer/customer.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMA (scalars only, no relations) =====
export const ServiceBaseSchema = z
	.object({
		service_id: UUID,
		reservation_module_id: UUID,
		service_category_id: UUID.nullable().optional(),
		name: z
			.unknown()
			.openapi({ example: { en: 'Haircut', sl: 'Striženje' }, description: 'Localized service name' }),
		description: z
			.unknown()
			.nullable()
			.optional()
			.openapi({
				example: { en: 'Professional haircut service', sl: 'Profesionalna storitev striženja' },
				description: 'Localized service description',
			}),
		image_url: z
			.string()
			.url()
			.nullable()
			.optional()
			.openapi({ example: 'https://example.com/images/haircut.jpg' }),
		price_cents: z.number().int().openapi({ example: 3000, description: 'Price in cents (30.00 EUR)' }),
		discount_percent: z.number().int().nullable().optional().openapi({ example: 15 }),
		discount_amount: z.number().int().nullable().optional().openapi({ example: 450 }),
		duration_minutes: z.number().int().openapi({ example: 60, description: 'Service duration in minutes' }),
		available_online: z.boolean().openapi({ example: true, description: 'Whether service can be booked online' }),
		skd_codes: z.string().openapi({ example: 'SKD001,SKD002', description: 'Comma-separated SKD codes' }),
		created_at: Timestamp,
		tax_rate_id: UUID.nullable().optional(),
		course: z.boolean().openapi({ example: false, description: 'Whether this is a course service' }),
		people_allowed: z
			.number()
			.int()
			.nullable()
			.optional()
			.openapi({ example: 1, description: 'Max people per booking' }),
	})
	.openapi({
		title: 'ServiceBase',
		description: 'Base service schema with scalar fields only',
	});

// ===== REF SCHEMA (minimal identity for embedding) =====
export const ServiceRefSchema = z
	.object({
		service_id: UUID,
		name: z.unknown().openapi({ example: { en: 'Haircut', sl: 'Striženje' } }),
		price_cents: z.number().int().openapi({ example: 3000 }),
		duration_minutes: z.number().int().openapi({ example: 60 }),
		image_url: z
			.string()
			.url()
			.nullable()
			.optional()
			.openapi({ example: 'https://example.com/images/haircut.jpg' }),
	})
	.openapi({
		title: 'ServiceRef',
		description: 'Minimal service reference for embedding in other entities',
	});

// ===== REF WITH RELATIONS SCHEMA (extends Ref with service category) =====
export const ServiceWithCategorySchema = ServiceRefSchema.extend({
	service_category: ServiceCategoryRefSchema.nullable().optional(),
}).openapi({
	title: 'ServiceWithCategory',
	description: 'Service reference with category for embedding',
});

// ===== DETAIL SCHEMA (full service with full relations as returned by DAO) =====
export const ServiceDetailSchema = ServiceBaseSchema.extend({
	service_category: ServiceCategoryRefSchema.nullable().optional(),
	bookings: z.array(BookingRefSchema).optional(),
	assigned_employees: z.array(ServiceAssignmentRefSchema).optional(),
}).openapi({
	title: 'ServiceDetail',
	description:
		'Full service details returned from DAO functions including category, bookings, and assigned employees',
});

// ===== CREATE/UPDATE REQUEST SCHEMAS =====
export const CreateServiceRequestSchema = z
	.object({
		service_category_id: UUID.optional(),
		name: z.record(z.string()).openapi({ example: { en: 'Haircut', sl: 'Striženje' } }),
		description: z
			.record(z.string())
			.optional()
			.openapi({ example: { en: 'Professional haircut service', sl: 'Profesionalna storitev striženja' } }),
		tax_rate_id: UUID.optional(),
		image_url: z.string().url().optional().openapi({ example: 'https://example.com/images/haircut.jpg' }),
		price_cents: z.number().int().min(0).openapi({ example: 3000 }),
		discount_percent: z.number().int().min(0).max(100).optional().openapi({ example: 15 }),
		discount_amount: z.number().int().min(0).optional().openapi({ example: 450 }),
		duration_minutes: z.number().int().min(1).openapi({ example: 60 }),
		available_online: z.boolean().default(false).openapi({ example: true }),
		skd_codes: z.array(z.string()).openapi({ example: ['SKD001', 'SKD002'] }),
		course: z.boolean().optional().default(false).openapi({ example: false }),
		people_allowed: z.number().min(1).optional().default(1).openapi({ example: 1 }),
		reservation_module_id: UUID,
	})
	.openapi({
		title: 'CreateServiceRequest',
		description: 'Request schema for creating a new service',
	});

export const UpdateServiceRequestSchema = z
	.object({
		service_category_id: UUID.optional(),
		name: z.record(z.string()).optional(),
		tax_rate_id: UUID.optional(),
		description: z.record(z.string()).optional(),
		image_url: z.string().url().optional(),
		price_cents: z.number().int().min(0).optional(),
		discount_percent: z.number().int().min(0).max(100).optional(),
		discount_amount: z.number().int().min(0).optional(),
		duration_minutes: z.number().int().min(1).optional(),
		available_online: z.boolean().optional(),
		skd_codes: z.array(z.string()).optional(),
		course: z.boolean().optional(),
		people_allowed: z.number().min(1).optional(),
	})
	.openapi({
		title: 'UpdateServiceRequest',
		description: 'Request schema for updating an existing service',
	});

export const DeleteServiceRequestSchema = z
	.object({
		service_id: UUID,
	})
	.openapi({
		title: 'DeleteServiceRequest',
		description: 'Request schema for deleting a service',
	});

export const CreateServiceWithEmployeesSchema = z
	.object({
		formData: CreateServiceRequestSchema,
		removedEmployees: z.array(UUID),
		addedEmployees: z.array(UUID),
	})
	.openapi({
		title: 'CreateServiceWithEmployees',
		description: 'Request schema for creating a service with employee assignments',
	});

export const UpdateServiceWithEmployeesSchema = z
	.object({
		formData: UpdateServiceRequestSchema,
		removedEmployees: z.array(UUID),
		addedEmployees: z.array(UUID),
	})
	.openapi({
		title: 'UpdateServiceWithEmployees',
		description: 'Request schema for updating a service with employee assignments',
	});

export const CreateServiceWithLocationsSchema = z
	.object({
		formData: CreateServiceRequestSchema,
		removedLocations: z.array(UUID),
		addedLocations: z.array(UUID),
	})
	.openapi({
		title: 'CreateServiceWithLocations',
		description: 'Request schema for creating a service with location assignments',
	});

export const UpdateServiceWithLocationsSchema = z
	.object({
		formData: UpdateServiceRequestSchema,
		removedLocations: z.array(UUID),
		addedLocations: z.array(UUID),
	})
	.openapi({
		title: 'UpdateServiceWithLocations',
		description: 'Request schema for updating a service with location assignments',
	});

// ===== RESPONSE SCHEMA (with relations using Ref schemas) =====

export const ServiceResponseSchema = ServiceBaseSchema.extend({
	reservation_module: z.lazy(() => ReservationModuleRefSchema).optional(),
	service_category: z
		.lazy(() => ServiceCategoryRefSchema)
		.nullable()
		.optional(),
}).openapi({
	title: 'ServiceResponse',
	description: 'Complete service response with related entities',
});

// ===== DAO RESPONSE SCHEMAS =====
// DAO response for getServicesByReservationModuleId, getServiceById, getServicesByCategoryId, getServicesByReservationId
export const ServiceDAOResponseSchema = ServiceDetailSchema.openapi({
	title: 'ServiceDAOResponse',
	description: 'Service response from DAO functions with category, bookings, and assigned employees fully populated',
});

// ===== MULTI-ENTITY RESPONSE SCHEMAS =====
// Response combining services, employees, and customers (used in service list endpoints)
export const ServicesEmployeesAndCustomersResponseSchema = z
	.object({
		services: z.array(ServiceDetailSchema),
		employees: z.array(EmployeeRefSchema),
		customers: z.array(CustomerRefSchema),
	})
	.openapi({
		title: 'ServicesEmployeesAndCustomersResponse',
		description: 'Combined response containing services with their assigned employees and customers',
	});

// Response for service form data (used in getServiceFormData endpoint)
export const ServiceFormDataResponseSchema = z
	.object({
		service: ServiceDetailSchema,
		formData: CreateServiceWithEmployeesSchema,
	})
	.openapi({
		title: 'ServiceFormDataResponse',
		description: 'Service details with pre-populated form data for editing',
	});

// ===== EXPORTED TYPES =====
export type ServiceBase = z.infer<typeof ServiceBaseSchema>;
export type ServiceRef = z.infer<typeof ServiceRefSchema>;
export type ServiceWithCategory = z.infer<typeof ServiceWithCategorySchema>;
export type ServiceDetail = z.infer<typeof ServiceDetailSchema>;
export type CreateServiceRequest = z.infer<typeof CreateServiceRequestSchema>;
export type UpdateServiceRequest = z.infer<typeof UpdateServiceRequestSchema>;
export type DeleteServiceRequest = z.infer<typeof DeleteServiceRequestSchema>;
export type CreateServiceWithEmployees = z.infer<typeof CreateServiceWithEmployeesSchema>;
export type UpdateServiceWithEmployees = z.infer<typeof UpdateServiceWithEmployeesSchema>;
export type CreateServiceWithLocations = z.infer<typeof CreateServiceWithLocationsSchema>;
export type UpdateServiceWithLocations = z.infer<typeof UpdateServiceWithLocationsSchema>;
export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;
export type ServiceDAOResponse = z.infer<typeof ServiceDAOResponseSchema>;
export type ServicesEmployeesAndCustomersResponse = z.infer<typeof ServicesEmployeesAndCustomersResponseSchema>;
export type ServiceFormDataResponse = z.infer<typeof ServiceFormDataResponseSchema>;

// ===== REGISTER SCHEMAS =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('ServiceBase', ServiceBaseSchema);
	registry.register('ServiceRef', ServiceRefSchema);
	registry.register('ServiceWithCategory', ServiceWithCategorySchema);
	registry.register('ServiceDetail', ServiceDetailSchema);
	registry.register('CreateServiceRequest', CreateServiceRequestSchema);
	registry.register('UpdateServiceRequest', UpdateServiceRequestSchema);
	registry.register('DeleteServiceRequest', DeleteServiceRequestSchema);
	registry.register('CreateServiceWithEmployees', CreateServiceWithEmployeesSchema);
	registry.register('UpdateServiceWithEmployees', UpdateServiceWithEmployeesSchema);
	registry.register('CreateServiceWithLocations', CreateServiceWithLocationsSchema);
	registry.register('UpdateServiceWithLocations', UpdateServiceWithLocationsSchema);
	registry.register('ServiceResponse', ServiceResponseSchema);
	registry.register('ServiceDAO', ServiceDAOResponseSchema);

	// Register multi-entity response schemas
	registry.register('ServicesEmployeesAndCustomersResponse', ServicesEmployeesAndCustomersResponseSchema);
	registry.register('ServiceFormDataResponse', ServiceFormDataResponseSchema);
}
