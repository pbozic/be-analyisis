import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// BlogCategory types - moved to blog.dto.ts
// This file kept for backward compatibility but types are in blog.dto.ts
// blog_categories.ts
export type BlogCategory = {
	blog_categories_id: string;
	name: string;
	description?: string | null;
	blog_posts?: BlogPost[]; // Related posts (optional and recursive)
};

export const CreateBlogCategorySchema = z
	.object({
		name: z.string().min(1),
		description: z.string().optional().nullable(),
	})
	.openapi('CreateBlogCategorySchema');

export const UpdateBlogCategorySchema = CreateBlogCategorySchema.partial().openapi('UpdateBlogCategorySchema');

export type CreateBlogCategoryInput = z.infer<typeof CreateBlogCategorySchema>;
export type UpdateBlogCategoryInput = z.infer<typeof UpdateBlogCategorySchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBlogCategorySchema', CreateBlogCategorySchema);
	registry.register('UpdateBlogCategorySchema', UpdateBlogCategorySchema);
}
