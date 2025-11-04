// --- ENUMS ---
import { z } from 'zod';

import type { ReservationModule } from './ReservationModule.js';
import type { ServiceCategory } from './ServiceCategory.js';
import type { Employee } from './Employee.js';
import type { Booking } from './Booking.js';
import type { Location } from './Location.js';
import type { TaxRate } from '../general/TaxRate.js';
import type { ServiceAssignment } from './ServiceAssignment.js';
import type { ServiceLocation } from './ServiceLocation.js';

export const CreateServiceSchema = z.object({
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
});

export const UpdateServiceSchema = z.object({
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
});

export const CreateServiceWithEmployeesSchema = z.object({
	formData: CreateServiceSchema,
	removed: z.array(z.string().uuid()),
	added: z.array(z.string().uuid()),
});

export const UpdateServiceWithEmployeesSchema = z.object({
	formData: UpdateServiceSchema,
	removed: z.array(z.string().uuid()),
	added: z.array(z.string().uuid()),
});

export const CreateServiceWithLocationsSchema = z.object({
	formData: CreateServiceSchema,
	removed: z.array(z.string().uuid()),
	added: z.array(z.string().uuid()),
});

export const UpdateServiceWithLocationsSchema = z.object({
	formData: UpdateServiceSchema,
	removed: z.array(z.string().uuid()),
	added: z.array(z.string().uuid()),
});

export const DeleteServiceSchema = z.object({ service_id: z.string().uuid() });

export type CreateServiceInput = z.infer<typeof CreateServiceSchema>;
export type UpdateServiceInput = z.infer<typeof UpdateServiceSchema>;
export type CreateServiceWithEmployeesInput = z.infer<typeof CreateServiceWithEmployeesSchema>;
export type UpdateServiceWithEmployeesInput = z.infer<typeof UpdateServiceWithEmployeesSchema>;
export type CreateServiceWithLocationsInput = z.infer<typeof CreateServiceWithLocationsSchema>;
export type UpdateServiceWithLocationsInput = z.infer<typeof UpdateServiceWithLocationsSchema>;

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
	reservation_module: ReservationModule;
	service_category?: ServiceCategory | null;
	assigned_employees: ServiceAssignment[];
	bookings: Booking[];
	service_locations: ServiceLocation[];
	tax_rate?: TaxRate | null;
};
