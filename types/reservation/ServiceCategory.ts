// --- ENUMS ---
import { CATEGORY_LEVEL } from '@prisma/client';
import { z } from 'zod';

import type { service_category } from '../../prisma/schemas/interfaces';

export const CreateCategorySchema = z.object({
	name: z.record(z.string()),
	parent_id: z.string().uuid().optional(),
	level: z.nativeEnum(CATEGORY_LEVEL),
	color: z.string().optional(),
});

export const UpdateCategorySchema = CreateCategorySchema.partial();
export const DeleteCategorySchema = z.object({ category_id: z.string().uuid() });

export type CreateCategoryInput = z.infer<typeof CreateCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof UpdateCategorySchema>;

export type ServiceCategory = service_category;
