import { z } from 'zod';

import type { BlogPost } from './BlogPost.js';

// blog_categories.ts

export const CreateBlogTagSchema = z.object({
	name: z.string().min(1),
	description: z.string().optional().nullable(),
});

export const UpdateBlogTagSchema = CreateBlogTagSchema.partial();
// UpdateBlogTagSchema is the same as CreateBlogTagSchema but with all fields optional

export const DeleteBlogTagSchema = z.object({
	blog_tag_id: z.string().uuid(),
});

export type CreateBlogTagInput = z.infer<typeof CreateBlogTagSchema>;
export type UpdateBlogTagInput = z.infer<typeof UpdateBlogTagSchema>;
export type DeleteBlogTagInput = z.infer<typeof DeleteBlogTagSchema>;

export type BlogTag = {
	blog_tags_id: string;
	name: string;
	description?: string | null;
	blog_posts: BlogPost[];
};
