import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BlogPost } from './BlogPost.js';
import { BlogPostResponseSchema } from './BlogPost';

extendZodWithOpenApi(z);

// blog_categories.ts

export const CreateBlogCategorySchema = z.object({
	name: z.string().min(1),
	description: z.string().optional().nullable(),
});
export const UpdateBlogCategorySchema = CreateBlogCategorySchema.partial();

export type CreateBlogCategoryInput = z.infer<typeof CreateBlogCategorySchema>;
export type UpdateBlogCategoryInput = z.infer<typeof UpdateBlogCategorySchema>;

export const BlogCategoryResponseSchema = z
	.object({
		blog_categories_id: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
		blog_posts: z.array(BlogPostResponseSchema),
	})
	.openapi('BlogCategoryResponse');

export type BlogCategoryResponse = z.infer<typeof BlogCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBlogCategory', CreateBlogCategorySchema);
	registry.register('UpdateBlogCategory', UpdateBlogCategorySchema);
	registry.register('BlogCategoryResponse', BlogCategoryResponseSchema);
}

export type BlogCategory = {
	blog_categories_id: string;
	name: string;
	description?: string | null;
	blog_posts?: BlogPost[];
};
