import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { BLOG_POST_STATUS } from '@prisma/client';

import { Timestamp, UUID } from '../../primitives.js';
import { EditorJSDataSchema } from './blog.dto.js';

extendZodWithOpenApi(z);

// ===== BlogPost Request Schemas =====
export const CreateBlogPostSchema = z
	.object({
		title: z.string().min(1).openapi({ example: 'My First Blog Post' }),
		short_content: z.string().optional().nullable().openapi({ example: 'A brief introduction to the blog post' }),
		content: EditorJSDataSchema,
		category_id: UUID,
		image_file_id: UUID.optional(),
		publish_at: Timestamp.optional(),
		tag_ids: z.array(UUID),
		status: z
			.nativeEnum(BLOG_POST_STATUS)
			.default(BLOG_POST_STATUS.DRAFT)
			.openapi({ example: BLOG_POST_STATUS.DRAFT }),
	})
	.openapi('CreateBlogPost');

export type CreateBlogPost = z.infer<typeof CreateBlogPostSchema>;

export const UpdateBlogPostSchema = CreateBlogPostSchema.extend({
	slug: z.string().optional().openapi({ example: 'my-first-blog-post' }),
}).openapi('UpdateBlogPost');

export type UpdateBlogPost = z.infer<typeof UpdateBlogPostSchema>;

export const SearchBlogPostsSchema = z
	.object({
		page: z
			.number()
			.int()
			.min(1)
			.default(1)
			.nullable()
			.openapi({ example: 1, description: 'Page number for pagination' }),
		limit: z
			.number()
			.int()
			.min(1)
			.max(100)
			.default(10)
			.nullable()
			.openapi({ example: 10, description: 'Number of items per page' }),
		query: z.string().nullable().openapi({ example: 'nodejs tutorial', description: 'Search query' }),
		tag_ids: z.array(UUID).nullable(),
		category_ids: z.array(UUID).nullable(),
		status: z.nativeEnum(BLOG_POST_STATUS).nullable().openapi({ example: BLOG_POST_STATUS.PUBLISHED }),
		year: z.number().int().nullable().openapi({ example: 2025 }),
		month: z.number().int().min(1).max(12).nullable().openapi({ example: 10 }),
	})
	.openapi('SearchBlogPosts');

export type SearchBlogPosts = z.infer<typeof SearchBlogPostsSchema>;

// ===== BlogCategory Request Schemas =====
export const CreateBlogCategorySchema = z
	.object({
		name: z.string().min(1),
		description: z.string().optional().nullable(),
	})
	.openapi('CreateBlogCategory');

export type CreateBlogCategory = z.infer<typeof CreateBlogCategorySchema>;

export const UpdateBlogCategorySchema = CreateBlogCategorySchema.partial().openapi('UpdateBlogCategory');

export type UpdateBlogCategory = z.infer<typeof UpdateBlogCategorySchema>;

// ===== BlogTag Request Schemas =====
export const CreateBlogTagSchema = z
	.object({
		name: z.string().min(1),
		description: z.string().optional().nullable(),
	})
	.openapi('CreateBlogTag');

export type CreateBlogTag = z.infer<typeof CreateBlogTagSchema>;

export const UpdateBlogTagSchema = CreateBlogTagSchema.partial().openapi('UpdateBlogTag');

export type UpdateBlogTag = z.infer<typeof UpdateBlogTagSchema>;

export const DeleteBlogTagSchema = z
	.object({
		blog_tag_id: UUID,
	})
	.openapi('DeleteBlogTag');

export type DeleteBlogTag = z.infer<typeof DeleteBlogTagSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	// BlogPost schemas
	registry.register('CreateBlogPost', CreateBlogPostSchema);
	registry.register('UpdateBlogPost', UpdateBlogPostSchema);
	registry.register('SearchBlogPosts', SearchBlogPostsSchema);

	// BlogCategory schemas
	registry.register('CreateBlogCategory', CreateBlogCategorySchema);
	registry.register('UpdateBlogCategory', UpdateBlogCategorySchema);

	// BlogTag schemas
	registry.register('CreateBlogTag', CreateBlogTagSchema);
	registry.register('UpdateBlogTag', UpdateBlogTagSchema);
	registry.register('DeleteBlogTag', DeleteBlogTagSchema);
}
