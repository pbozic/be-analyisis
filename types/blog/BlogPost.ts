// blogSchemas.ts
import { z } from 'zod';
import { BLOG_POST_STATUS } from '@prisma/client';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { File } from '../files/File.js';
import type { User } from '../users/User.js';
import type { BlogCategory } from './BlogCategory.js';
import type { BlogTag } from './BlogTag.js';
import type { BlogTagsBlogPost } from './BlogTagsBlogPost.js';
import { FileResponseSchema } from '../files/File';
import { UserResponseSchema } from '../users/User';
import { BlogCategoryResponseSchema } from './BlogCategory';
import { BlogTagsBlogPostResponseSchema } from './BlogTagsBlogPost';

extendZodWithOpenApi(z);

// =======================
// Editor.js Zod Schemas
// =======================
export const EditorJSBlockSchemaKnown = z.discriminatedUnion('type', [
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
]);
// Fallback for unknown tools
const fallbackBlockSchema = z.object({
	type: z.string(),
	data: z.unknown(),
});

// Combined (fallback enabled)
const EditorJSBlockSchema = z.union([EditorJSBlockSchemaKnown, fallbackBlockSchema]);
export const EditorJSDataSchema = z.object({
	time: z.number(),
	version: z.string(),
	blocks: z.array(EditorJSBlockSchema),
});

// =======================
// BlogPost Zod Schema
// =======================
export const CreateBlogPostSchema = z.object({
	title: z.string().min(1),
	short_content: z.string().optional().nullable(),
	content: EditorJSDataSchema,
	category_id: z.string().uuid(),
	image_file_id: z.string().uuid().optional(),
	publish_at: z.string().datetime().optional(),
	tag_ids: z.array(z.string().uuid()),
	status: z.nativeEnum(BLOG_POST_STATUS).default(BLOG_POST_STATUS.DRAFT),
});

export const UpdateBlogPostSchema = CreateBlogPostSchema.extend({
	slug: z.string().optional(),
});

export const SearchBlogPostsSchema = z.object({
	page: z.number().int().min(1).default(1).nullable(),
	limit: z.number().int().min(1).max(100).default(10).nullable(),
	query: z.string().nullable(),
	tag_ids: z.array(z.string().uuid()).nullable(),
	category_ids: z.array(z.string().uuid()).nullable(),
	year: z.number().int().nullable(),
	month: z.number().int().min(1).max(12).nullable(),
});
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

export type BlogPostInput = Omit<
	BlogPost,
	'blog_posts_id' | 'slug' | 'author_id' | 'created_at' | 'updated_at' | 'author' | 'category'
>;

export const BlogPostResponseSchema = z
	.object({
		blog_posts_id: z.string(),
		slug: z.string(),
		title: z.string(),
		short_content: z.string().nullable().optional(),
		image_file_id: z.string().nullable().optional(),
		image: FileResponseSchema.nullable().optional(),
		content: z.unknown(),
		status: z.nativeEnum(BLOG_POST_STATUS),
		author_id: z.string(),
		category_id: z.string().nullable().optional(),
		publish_at: z.string().datetime(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		author: UserResponseSchema,
		category: BlogCategoryResponseSchema.nullable().optional(),
		tags: z.array(BlogTagsBlogPostResponseSchema),
	})
	.openapi('BlogPostResponse');

export type BlogPostResponse = z.infer<typeof BlogPostResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBlogPost', CreateBlogPostSchema);
	registry.register('UpdateBlogPost', UpdateBlogPostSchema);
	registry.register('BlogPostResponse', BlogPostResponseSchema);
}

export type BlogPost = {
	blog_posts_id: string;
	slug: string;
	title: string;
	short_content?: string | null;
	image_file_id?: string | null;
	image?: File | null;
	content: unknown;
	status: BLOG_POST_STATUS;
	author_id: string;
	category_id?: string | null;
	publish_at: Date;
	created_at: Date;
	updated_at: Date;
	author?: User;
	category?: BlogCategory | null;
	tags?: BlogTagsBlogPost[];
};
