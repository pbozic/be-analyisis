// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { BlogTag } from './BlogTag.js';
import type { BlogPost } from './BlogPost.js';
import { BlogTagResponseSchema } from './BlogTag';
import { BlogPostResponseSchema } from './BlogPost';

extendZodWithOpenApi(z);

export const CreateBlogTagsBlogPostSchema = z
	.object({
		blog_tags_id: z.string().uuid(),
		blog_posts_id: z.string().uuid(),
	})
	.openapi('CreateBlogTagsBlogPost');

export type CreateBlogTagsBlogPostInput = z.infer<typeof CreateBlogTagsBlogPostSchema>;

export const UpdateBlogTagsBlogPostSchema = CreateBlogTagsBlogPostSchema.partial().openapi('UpdateBlogTagsBlogPost');
export type UpdateBlogTagsBlogPostInput = z.infer<typeof UpdateBlogTagsBlogPostSchema>;

export const BlogTagsBlogPostResponseSchema = z
	.object({
		blog_tags_id: z.string(),
		blog_posts_id: z.string(),
		blog_tags: BlogTagResponseSchema,
		blog_posts: BlogPostResponseSchema,
	})
	.openapi('BlogTagsBlogPostResponse');

export type BlogTagsBlogPostResponse = z.infer<typeof BlogTagsBlogPostResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBlogTagsBlogPost', CreateBlogTagsBlogPostSchema);
	registry.register('UpdateBlogTagsBlogPost', UpdateBlogTagsBlogPostSchema);
	registry.register('BlogTagsBlogPostResponse', BlogTagsBlogPostResponseSchema);
}

export type BlogTagsBlogPost = {
	blog_tags_id: string;
	blog_posts_id: string;
	blog_tags?: BlogTag;
	blog_posts?: BlogPost;
};
