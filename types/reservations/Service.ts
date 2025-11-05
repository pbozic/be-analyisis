// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from './ReservationModule.js';
import type { ServiceCategory } from './ServiceCategory.js';
import type { Booking } from './Booking.js';
import type { TaxRate } from '../general/TaxRate.js';
import type { ServiceAssignment } from './ServiceAssignment.js';
import type { ServiceLocation } from './ServiceLocation.js';
import { ServiceCategoryResponseBaseSchema } from './ServiceCategory';
import { ServiceAssignmentResponseBaseSchema } from './ServiceAssignment';
import { BookingResponseBaseSchema } from './Booking';
import { ServiceLocationResponseBaseSchema } from './ServiceLocation';
import { TaxRateResponseBaseSchema } from '../general/TaxRate';
import { ReservationModuleResponseBaseSchema } from './ReservationModule';

extendZodWithOpenApi(z);

export const CreateServiceSchema = z
	.object({
		service_category_id: z.string().uuid().optional(),
		name: z.record(z.string()),
		description: z.record(z.string()).optional(),
		tax_rate_id: z.string().uuid().optional(),
		image_url: z.string().url().optional(),
		price_cents: z.number().int(),
		discount_percent: z.number().int().optional(),
		discount_amount: z.number().int().optional(),
		duration_minutes: z.number().int(),
		available_online: z.boolean().default(false),
		skd_codes: z.array(z.string()),
		course: z.boolean().optional().default(false),
		people_allowed: z.number().min(1).optional().default(1),
	})
	.openapi('CreateService');

export const UpdateServiceSchema = z
	.object({
		service_category_id: z.string().uuid().optional(),
		name: z.record(z.string()).optional(),
		tax_rate_id: z.string().uuid().optional(),
		description: z.record(z.string()).optional(),
		image_url: z.string().url().optional(),
		price_cents: z.number().int().optional(),
		discount_percent: z.number().int().optional(),
		discount_amount: z.number().int().optional(),
		duration_minutes: z.number().int().optional(),
		available_online: z.boolean().optional(),
		skd_codes: z.array(z.string()).optional(),
		course: z.boolean().optional(),
		people_allowed: z.number().min(1).optional(),
	})
	.openapi('UpdateService');

export const CreateServiceWithEmployeesSchema = z
	.object({
		formData: CreateServiceSchema,
		removed: z.array(z.string().uuid()),
		added: z.array(z.string().uuid()),
	})
	.openapi('CreateServiceWithEmployees');

export const UpdateServiceWithEmployeesSchema = z
	.object({
		formData: UpdateServiceSchema,
		removed: z.array(z.string().uuid()),
		added: z.array(z.string().uuid()),
	})
	.openapi('UpdateServiceWithEmployees');

export const CreateServiceWithLocationsSchema = z
	.object({
		formData: CreateServiceSchema,
		removed: z.array(z.string().uuid()),
		added: z.array(z.string().uuid()),
	})
	.openapi('CreateServiceWithLocations');

export const UpdateServiceWithLocationsSchema = z
	.object({
		formData: UpdateServiceSchema,
		removed: z.array(z.string().uuid()),
		added: z.array(z.string().uuid()),
	})
	.openapi('UpdateServiceWithLocations');

export const DeleteServiceSchema = z.object({ service_id: z.string().uuid() });

export type CreateServiceInput = z.infer<typeof CreateServiceSchema>;
export type UpdateServiceInput = z.infer<typeof UpdateServiceSchema>;
export type CreateServiceWithEmployeesInput = z.infer<typeof CreateServiceWithEmployeesSchema>;
export type UpdateServiceWithEmployeesInput = z.infer<typeof UpdateServiceWithEmployeesSchema>;
export type CreateServiceWithLocationsInput = z.infer<typeof CreateServiceWithLocationsSchema>;
export type UpdateServiceWithLocationsInput = z.infer<typeof UpdateServiceWithLocationsSchema>;

export const ServiceResponseBaseSchema = z
	.object({
		service_id: z.string(),
		reservation_module_id: z.string(),
		service_category_id: z.string().nullable().optional(),
		name: z.unknown(),
		description: z.unknown().nullable().optional(),
		image_url: z.string().nullable().optional(),
		price_cents: z.number(),
		discount_percent: z.number().nullable().optional(),
		discount_amount: z.number().nullable().optional(),
		duration_minutes: z.number(),
		available_online: z.boolean(),
		skd_codes: z.string(),
		created_at: z.string().datetime(),
		tax_rate_id: z.string().nullable().optional(),
		course: z.boolean(),
		people_allowed: z.number().nullable().optional(),
	})
	.openapi('ServiceResponse');

export const ServiceResponseSchema = ServiceResponseBaseSchema.extend({
	reservation_module: ReservationModuleResponseBaseSchema.nullable().optional(),
	service_category: ServiceCategoryResponseBaseSchema.nullable().optional(),
	assigned_employees: z.array(ServiceAssignmentResponseBaseSchema),
	bookings: z.array(BookingResponseBaseSchema),
	service_locations: z.array(ServiceLocationResponseBaseSchema),
	tax_rate: TaxRateResponseBaseSchema.nullable().optional(),
}).openapi('ServiceResponse');

export type ServiceBase = z.infer<typeof ServiceResponseBaseSchema>;
export type ServiceResponse = z.infer<typeof ServiceResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateService', CreateServiceSchema);
	registry.register('UpdateService', UpdateServiceSchema);
	registry.register('ServiceResponseBase', ServiceResponseBaseSchema);
	registry.register('ServiceResponse', ServiceResponseSchema);

	registry.register('CreateServiceWithEmployees', CreateServiceWithEmployeesSchema);
	registry.register('UpdateServiceWithEmployees', UpdateServiceWithEmployeesSchema);

	registry.register('CreateServiceWithLocations', CreateServiceWithLocationsSchema);
	registry.register('UpdateServiceWithLocations', UpdateServiceWithLocationsSchema);
}

export type Service = {
	service_id: string;
	reservation_module_id: string;
	service_category_id?: string | null;
	name: unknown;
	description?: unknown | null;
	image_url?: string | null;
	price_cents: number;
	discount_percent?: number | null;
	discount_amount?: number | null;
	duration_minutes: number;
	available_online: boolean;
	skd_codes: string;
	created_at: Date;
	tax_rate_id?: string | null;
	course: boolean;
	people_allowed?: number | null;
	reservation_module?: ReservationModule;
	service_category?: ServiceCategory | null;
	assigned_employees?: ServiceAssignment[];
	bookings?: Booking[];
	service_locations?: ServiceLocation[];
	tax_rate?: TaxRate | null;
};
