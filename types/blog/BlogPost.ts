// blogSchemas.ts
import { z } from 'zod';
import type { users, files } from '@prisma/client';
import { BLOG_POST_STATUS } from '@prisma/client';

import type { BlogCategory } from './BlogCategory.js';
import { BlogTag } from './BlogTag.js';

// =======================
// Editor.js Zod Schemas
// =======================
export const EditorJSBlockSchema = z.discriminatedUnion('type', [
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
});

export const UpdateBlogPostSchema = CreateBlogPostSchema.extend({
	slug: z.string().optional(),
});

export const SearchBlogPostsSchema = z.object({
	page: z.number().int().min(1).default(1),
	limit: z.number().int().min(1).max(100).default(10),
	query: z.string().optional(),
	tag_ids: z.array(z.string().uuid()).optional(),
	category_ids: z.array(z.string().uuid()).optional(),
	year: z.number().int().optional(),
	month: z.number().int().min(1).max(12).optional(),
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
	author: users;
	category?: BlogCategory | null;
	tags?: BlogTag[];
};

export type BlogPostInput = Omit<
	BlogPost,
	'blog_posts_id' | 'slug' | 'author_id' | 'created_at' | 'updated_at' | 'author' | 'category'
>;
