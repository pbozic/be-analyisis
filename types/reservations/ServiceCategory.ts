// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

export const CreateServiceCategorySchema = z
	.object({
		name: z.record(z.string()),
		parent_id: z.string().uuid().optional(),
		color: z.string().optional(),
	})
	.openapi('CreateServiceCategory');

export const UpdateServiceCategorySchema = CreateServiceCategorySchema.partial().openapi('UpdateServiceCategory');
export const DeleteServiceCategorySchema = z.object({ category_id: z.string().uuid() });

export type CreateServiceCategoryInput = z.infer<typeof CreateServiceCategorySchema>;
export type UpdateServiceCategoryInput = z.infer<typeof UpdateServiceCategorySchema>;

export const ServiceCategoryResponseBaseSchema = z
	.object({
		service_category_id: z.string(),
		reservation_module_id: z.string(),
		name: z.unknown(),
		parent_id: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
	})
	.openapi('ServiceCategoryResponseBase');

export const ServiceCategoryResponseSchema = ServiceCategoryResponseBaseSchema.openapi('ServiceCategoryResponse');

export type ServiceCategoryBase = z.infer<typeof ServiceCategoryResponseBaseSchema>;
export type ServiceCategoryResponse = z.infer<typeof ServiceCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateServiceCategory', CreateServiceCategorySchema);
	registry.register('UpdateServiceCategory', UpdateServiceCategorySchema);
	registry.register('ServiceCategoryResponseBase', ServiceCategoryResponseBaseSchema);
	registry.register('ServiceCategoryResponse', ServiceCategoryResponseSchema);
}

export type ServiceCategory = {
	service_category_id: string;
	reservation_module_id: string;
	name: unknown;
	parent_id?: string | null;
	color?: string | null;
};
