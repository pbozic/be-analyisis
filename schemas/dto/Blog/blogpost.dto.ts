import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { BLOG_POST_STATUS } from '@prisma/client';

import { Timestamp, UUID } from '../../primitives';

// BlogPost types and schemas - moved to blog.dto.ts and blog.validators.ts
// This file kept for backward compatibility but content is in blog.dto.ts and blog.validators.ts

// Extend Zod with OpenAPI methods
extendZodWithOpenApi(z);

// =======================
// Editor.js Zod Schemas with OpenAPI
// =======================
export const EditorJSBlockSchemaKnown = z
	.discriminatedUnion('type', [
		z.object({
			type: z.literal('paragraph'),
			id: z.string().optional(),
			data: z.object({
				text: z.string(),
			}),
		}),
		z.object({
			type: z.literal('header'),
			id: z.string().optional(),
			data: z.object({
				text: z.string(),
				level: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
			}),
		}),
	])
	.openapi('EditorJSBlock');

// Fallback for unknown tools
const fallbackBlockSchema = z
	.object({
		type: z.string(),
		data: z.unknown(),
	})
	.openapi('EditorJSUnknownBlock');

// Combined (fallback enabled)
const EditorJSBlockSchema = z.union([EditorJSBlockSchemaKnown, fallbackBlockSchema]);

export const EditorJSDataSchema = z
	.object({
		time: z.number().openapi({ example: 1672531200000 }),
		version: z.string().openapi({ example: '2.28.0' }),
		blocks: z.array(EditorJSBlockSchema),
	})
	.openapi('EditorJSData');

// =======================
// BlogPost Zod Schemas with OpenAPI
// =======================
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

export const UpdateBlogPostSchema = CreateBlogPostSchema.extend({
	slug: z.string().optional().openapi({ example: 'my-first-blog-post' }),
}).openapi('UpdateBlogPost');

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
		year: z.number().int().nullable().openapi({ example: 2025 }),
		month: z.number().int().min(1).max(12).nullable().openapi({ example: 10 }),
	})
	.openapi('SearchBlogPosts');

// =======================
// Response Schema with OpenAPI
// =======================
export const BlogPostResponseSchema = z
	.object({
		blog_posts_id: UUID,
		slug: z.string().openapi({ example: 'my-first-blog-post' }),
		title: z.string().openapi({ example: 'My First Blog Post' }),
		short_content: z.string().nullable().openapi({ example: 'A brief introduction' }),
		image_file_id: UUID.nullable(),
		content: EditorJSDataSchema,
		author_id: UUID,
		category_id: UUID.nullable(),
		publish_at: Timestamp,
		status: z.nativeEnum(BLOG_POST_STATUS).openapi({ example: BLOG_POST_STATUS.PUBLISHED }),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi('BlogPostResponse');

// =======================
// Inferred Types from Schemas
// =======================
export type EditorJSBlock = z.infer<typeof EditorJSBlockSchema>;
export type EditorJSData = z.infer<typeof EditorJSDataSchema>;
export type CreateBlogPostInput = z.infer<typeof CreateBlogPostSchema>;
export type UpdateBlogPostInput = z.infer<typeof UpdateBlogPostSchema>;
export type SearchBlogPostsInput = z.infer<typeof SearchBlogPostsSchema>;

// =======================
// Register All Schemas for OpenAPI Generation
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('CreateBlogPost', CreateBlogPostSchema);
	registry.register('UpdateBlogPost', UpdateBlogPostSchema);
	registry.register('SearchBlogPosts', SearchBlogPostsSchema);

	// Register Editor.js schemas
	registry.register('EditorJSData', EditorJSDataSchema);
	registry.register('EditorJSBlock', EditorJSBlockSchemaKnown);
	registry.register('EditorJSUnknownBlock', fallbackBlockSchema);

	// Responses
	registry.register('BlogPostResponse', BlogPostResponseSchema);
}
