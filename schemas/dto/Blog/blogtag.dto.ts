import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// BlogTag types - moved to blog.dto.ts
// This file kept for backward compatibility but types are in blog.dto.ts
// blog_categories.ts

export const CreateBlogTagSchema = z
	.object({
		name: z.string().min(1),
		description: z.string().optional().nullable(),
	})
	.openapi('CreateBlogTagSchema');

export const UpdateBlogTagSchema = CreateBlogTagSchema.partial().openapi('UpdateBlogTagSchema');
// UpdateBlogTagSchema is the same as CreateBlogTagSchema but with all fields optional

export const DeleteBlogTagSchema = z
	.object({
		blog_tag_id: z.string().uuid(),
	})
	.openapi('DeleteBlogTagSchema');

export type BlogTag = {
	blog_tag_id: string;
	name: string;
	description?: string | null;
	blog_posts?: BlogPost[]; // Related posts (optional and recursive)
};

export type CreateBlogTagInput = z.infer<typeof CreateBlogTagSchema>;
export type UpdateBlogTagInput = z.infer<typeof UpdateBlogTagSchema>;
export type DeleteBlogTagInput = z.infer<typeof DeleteBlogTagSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBlogTagSchema', CreateBlogTagSchema);
	registry.register('UpdateBlogTagSchema', UpdateBlogTagSchema);
	registry.register('DeleteBlogTagSchema', DeleteBlogTagSchema);
}
