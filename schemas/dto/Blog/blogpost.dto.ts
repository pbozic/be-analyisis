import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import type { users, files } from '@prisma/client';
import { BLOG_POST_STATUS } from '@prisma/client';

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
		category_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		image_file_id: z.string().uuid().optional().openapi({ example: '660e8400-e29b-41d4-a716-446655440000' }),
		publish_at: z.string().datetime().optional().openapi({ example: '2025-01-15T10:00:00Z' }),
		tag_ids: z.array(z.string().uuid()).openapi({ example: ['770e8400-e29b-41d4-a716-446655440000'] }),
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
		tag_ids: z
			.array(z.string().uuid())
			.nullable()
			.openapi({ example: ['770e8400-e29b-41d4-a716-446655440000'] }),
		category_ids: z
			.array(z.string().uuid())
			.nullable()
			.openapi({ example: ['550e8400-e29b-41d4-a716-446655440000'] }),
		year: z.number().int().nullable().openapi({ example: 2025 }),
		month: z.number().int().min(1).max(12).nullable().openapi({ example: 10 }),
	})
	.openapi('SearchBlogPosts');

// =======================
// Response Schema with OpenAPI
// =======================
export const BlogPostResponseSchema = z
	.object({
		blog_posts_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		slug: z.string().openapi({ example: 'my-first-blog-post' }),
		title: z.string().openapi({ example: 'My First Blog Post' }),
		short_content: z.string().nullable().openapi({ example: 'A brief introduction' }),
		image_file_id: z.string().uuid().nullable().openapi({ example: '660e8400-e29b-41d4-a716-446655440000' }),
		content: EditorJSDataSchema,
		author_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
		category_id: z.string().uuid().nullable().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		publish_at: z.string().datetime().openapi({ example: '2025-01-15T10:00:00Z' }),
		status: z.nativeEnum(BLOG_POST_STATUS).openapi({ example: BLOG_POST_STATUS.PUBLISHED }),
		created_at: z.string().datetime().openapi({ example: '2025-01-10T08:00:00Z' }),
		updated_at: z.string().datetime().openapi({ example: '2025-01-12T09:00:00Z' }),
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
// Full BlogPost Type (from DB + schemas)
// =======================
export type BlogPost = {
	blog_posts_id: string;
	slug: string;
	title: string;
	short_content?: string | null;
	image_file_id?: string | null;
	image?: files | null;
	content: EditorJSData;
	author_id: string;
	category_id?: string | null;
	publish_at: string;
	created_at: string;
	updated_at: string;
	status: BLOG_POST_STATUS;
	author: users;
	category?: BlogCategory | null;
	tags?: BlogTag[];
};

export type BlogPostInput = Omit<
	BlogPost,
	'blog_posts_id' | 'slug' | 'author_id' | 'created_at' | 'updated_at' | 'author' | 'category'
>;

// =======================
// Register All Schemas for OpenAPI Generation
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('CreateBlogPost', CreateBlogPostSchema);
	registry.register('UpdateBlogPost', UpdateBlogPostSchema);
	registry.register('SearchBlogPosts', SearchBlogPostsSchema);

	// Register response schemas
	registry.register('BlogPost', BlogPostResponseSchema);

	// Register Editor.js schemas
	registry.register('EditorJSData', EditorJSDataSchema);
	registry.register('EditorJSBlock', EditorJSBlockSchemaKnown);
	registry.register('EditorJSUnknownBlock', fallbackBlockSchema);

	// Responses
	registry.register('BlogPostResponse', BlogPostResponseSchema);
}
