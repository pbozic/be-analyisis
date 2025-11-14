import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import type { users, files } from '@prisma/client';
import { BLOG_POST_STATUS } from '@prisma/client';

import { UUID, Timestamp } from '../../primitives.js';

extendZodWithOpenApi(z);

// =======================
// BlogPost Response DTOs
// =======================

// Editor.js Zod Schemas with OpenAPI
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

// BlogPost Base Schema
export const BlogPostBaseSchema = z
	.object({
		blog_posts_id: UUID,
		author_id: UUID,
		title: z.string(),
		slug: z.string().nullable().optional(),
		short_content: z.string().nullable().optional(),
		content: EditorJSDataSchema,
		category_id: UUID,
		image_file_id: UUID.nullable().optional(),
		status: z.nativeEnum(BLOG_POST_STATUS),
		publish_at: Timestamp.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('BlogPostBase');

export type BlogPostBase = z.infer<typeof BlogPostBaseSchema>;

// BlogPost Ref Schema
export const BlogPostRefSchema = z
	.object({
		blog_posts_id: UUID,
		title: z.string(),
		slug: z.string().nullable().optional(),
		status: z.nativeEnum(BLOG_POST_STATUS),
	})
	.openapi('BlogPostRef');

export type BlogPostRef = z.infer<typeof BlogPostRefSchema>;

// BlogPost Detail Schema
export const BlogPostDetailSchema = BlogPostBaseSchema.extend({
	author: z.record(z.any()).nullable().optional(),
	category: z.record(z.any()).nullable().optional(),
	tags: z.array(z.record(z.any())).optional().default([]),
	image: z.record(z.any()).nullable().optional(),
}).openapi('BlogPostDetail');

export type BlogPostDetail = z.infer<typeof BlogPostDetailSchema>;

// BlogCategory Base Schema
export const BlogCategoryBaseSchema = z
	.object({
		blog_categories_id: UUID,
		name: z.string(),
		description: z.string().nullable().optional(),
	})
	.openapi('BlogCategoryBase');

export type BlogCategoryBase = z.infer<typeof BlogCategoryBaseSchema>;

// BlogCategory Ref Schema
export const BlogCategoryRefSchema = z
	.object({
		blog_categories_id: UUID,
		name: z.string(),
	})
	.openapi('BlogCategoryRef');

export type BlogCategoryRef = z.infer<typeof BlogCategoryRefSchema>;

// BlogTag Base Schema
export const BlogTagBaseSchema = z
	.object({
		blog_tag_id: UUID,
		name: z.string(),
		description: z.string().nullable().optional(),
	})
	.openapi('BlogTagBase');

export type BlogTagBase = z.infer<typeof BlogTagBaseSchema>;

// BlogTag Ref Schema
export const BlogTagRefSchema = z
	.object({
		blog_tag_id: UUID,
		name: z.string(),
	})
	.openapi('BlogTagRef');

export type BlogTagRef = z.infer<typeof BlogTagRefSchema>;

// =======================
// OpenAPI Registration
// =======================
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('EditorJSBlock', EditorJSBlockSchemaKnown);
	registry.register('EditorJSData', EditorJSDataSchema);
	registry.register('BlogPostBase', BlogPostBaseSchema);
	registry.register('BlogPostRef', BlogPostRefSchema);
	registry.register('BlogPostDetail', BlogPostDetailSchema);
	registry.register('BlogCategoryBase', BlogCategoryBaseSchema);
	registry.register('BlogCategoryRef', BlogCategoryRefSchema);
	registry.register('BlogTagBase', BlogTagBaseSchema);
	registry.register('BlogTagRef', BlogTagRefSchema);
	registry.register('BlogPostResponse', BlogPostResponseSchema);
}
