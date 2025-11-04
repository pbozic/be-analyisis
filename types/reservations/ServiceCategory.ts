// --- ENUMS ---
import { z } from 'zod';

export const CreateServiceCategorySchema = z.object({
	name: z.record(z.string()),
	parent_id: z.string().uuid().optional(),
	color: z.string().optional(),
});

export const UpdateServiceCategorySchema = CreateServiceCategorySchema.partial();
export const DeleteServiceCategorySchema = z.object({ category_id: z.string().uuid() });

export type CreateServiceCategoryInput = z.infer<typeof CreateServiceCategorySchema>;
export type UpdateServiceCategoryInput = z.infer<typeof UpdateServiceCategorySchema>;

export type ServiceCategory = {
	service_category_id: string;
	reservation_module_id: string;
	name: unknown;
};
