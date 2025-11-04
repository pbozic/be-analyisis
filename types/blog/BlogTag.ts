import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BlogTagsBlogPost } from './BlogTagsBlogPost.js';
import { BlogTagsBlogPostResponseSchema } from './BlogTagsBlogPost';

extendZodWithOpenApi(z);

// blog_categories.ts

export const CreateBlogTagSchema = z
	.object({
		name: z.string().min(1),
		description: z.string().optional().nullable(),
	})
	.openapi('CreateBlogTag');

export const UpdateBlogTagSchema = CreateBlogTagSchema.partial().openapi('UpdateBlogTag');
// UpdateBlogTagSchema is the same as CreateBlogTagSchema but with all fields optional

export const DeleteBlogTagSchema = z.object({
	blog_tag_id: z.string().uuid(),
});

export type CreateBlogTagInput = z.infer<typeof CreateBlogTagSchema>;
export type UpdateBlogTagInput = z.infer<typeof UpdateBlogTagSchema>;
export type DeleteBlogTagInput = z.infer<typeof DeleteBlogTagSchema>;

export const BlogTagResponseSchema = z
	.object({
		blog_tags_id: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
		blog_posts: z.array(BlogTagsBlogPostResponseSchema),
	})
	.openapi('BlogTagResponse');

export type BlogTagResponse = z.infer<typeof BlogTagResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBlogTag', CreateBlogTagSchema);
	registry.register('UpdateBlogTag', UpdateBlogTagSchema);
	registry.register('BlogTagResponse', BlogTagResponseSchema);
}

export type BlogTag = {
	blog_tags_id: string;
	name: string;
	description?: string | null;
	blog_posts?: BlogTagsBlogPost[];
};
