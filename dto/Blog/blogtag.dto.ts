import { z } from 'zod';

import type { BlogPost } from '../../types/blog/BlogPost.ts';
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

export type BlogTag = {
	blog_tag_id: string;
	name: string;
	description?: string | null;
	blog_posts?: BlogPost[]; // Related posts (optional and recursive)
};

export type CreateBlogTagInput = z.infer<typeof CreateBlogTagSchema>;
export type UpdateBlogTagInput = z.infer<typeof UpdateBlogTagSchema>;
export type DeleteBlogTagInput = z.infer<typeof DeleteBlogTagSchema>;
