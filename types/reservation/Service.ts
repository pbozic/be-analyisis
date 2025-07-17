// --- ENUMS ---
import { z } from 'zod';

import type { service } from '../../prisma/schemas/interfaces';

export const CreateServiceSchema = z.object({
	reservation_module_id: z.string().uuid(),
	service_category_id: z.string().uuid().optional(),
	name: z.record(z.string()),
	description: z.record(z.string()).optional(),
	image_url: z.string().url().optional(),
	price_cents: z.number().int(),
	discount_percent: z.number().int().optional(),
	discount_amount: z.number().int().optional(),
	duration_minutes: z.number().int(),
	available_online: z.boolean().default(false),
	skd_codes: z.array(z.string()),
});

export const UpdateServiceSchema = z.object({
	service_id: z.string().uuid(),
	reservation_module_id: z.string().uuid().optional(),
	service_category_id: z.string().uuid().optional(),
	name: z.record(z.string()).optional(),
	description: z.record(z.string()).optional(),
	image_url: z.string().url().optional(),
	price_cents: z.number().int().optional(),
	discount_percent: z.number().int().optional(),
	discount_amount: z.number().int().optional(),
	duration_minutes: z.number().int().optional(),
	available_online: z.boolean().optional(),
	skd_codes: z.array(z.string()).optional(),
});

export const DeleteServiceSchema = z.object({ service_id: z.string().uuid() });

export type CreateServiceInput = z.infer<typeof CreateServiceSchema>;
export type UpdateServiceInput = z.infer<typeof UpdateServiceSchema>;

export type Service = service;
