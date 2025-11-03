// --- ENUMS ---
import { z } from 'zod';

import type { service } from '../../prisma/schemas/interfaces';

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

export type Service = service;
