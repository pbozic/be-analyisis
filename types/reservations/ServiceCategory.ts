// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

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

export const ServiceCategoryResponseSchema = z
	.object({
		service_category_id: z.string(),
		reservation_module_id: z.string(),
		name: z.unknown(),
	})
	.openapi('ServiceCategoryResponse');

export type ServiceCategoryResponse = z.infer<typeof ServiceCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateServiceCategory', CreateServiceCategorySchema);
	registry.register('UpdateServiceCategory', UpdateServiceCategorySchema);
	registry.register('ServiceCategoryResponse', ServiceCategoryResponseSchema);
}
