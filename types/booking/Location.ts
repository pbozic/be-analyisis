// --- ENUMS ---
import { z } from 'zod';

import type { location } from '../../prisma/schemas/interfaces';

export const CreateLocationSchema = z.object({
	reservation_module_id: z.string().uuid(),
	name: z.string().min(1),
	address: z.string().min(1),
	phone: z.string().optional(),
	color: z.string().optional(),
	accepts_online: z.boolean().default(false),
	closed_on_holidays: z.boolean().default(false),
	working_days: z.any(),
});

export const UpdateLocationSchema = CreateLocationSchema.partial();
export const DeleteLocationSchema = z.object({ location_id: z.string().uuid() });

export type CreateLocationInput = z.infer<typeof CreateLocationSchema>;
export type UpdateLocationInput = z.infer<typeof UpdateLocationSchema>;

export type Location = location;
