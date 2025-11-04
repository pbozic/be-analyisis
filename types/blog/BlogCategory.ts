import { z } from 'zod';

import type { BlogPost } from './BlogPost.js';

// blog_categories.ts

export const CreateBlogCategorySchema = z.object({
	name: z.string().min(1),
	description: z.string().optional().nullable(),
});
export const UpdateBlogCategorySchema = CreateBlogCategorySchema.partial();

export type CreateBlogCategoryInput = z.infer<typeof CreateBlogCategorySchema>;
export type UpdateBlogCategoryInput = z.infer<typeof UpdateBlogCategorySchema>;

export type BlogCategory = {
	blog_categories_id: string;
	name: string;
	description?: string | null;
	blog_posts: BlogPost[];
};
