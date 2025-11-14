import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import {
	CreateBlogPostSchema,
	UpdateBlogPostSchema,
	CreateBlogCategorySchema,
	UpdateBlogCategorySchema,
	CreateBlogTagSchema,
	UpdateBlogTagSchema,
	DeleteBlogTagSchema,
} from './blog.validators.js';

extendZodWithOpenApi(z);

// ===== DAO-level Input Schemas =====
// These are used by DAOs, not routes with validate()

export const GetBlogPostByIdParamsSchema = z
	.object({
		blog_posts_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetBlogPostByIdParams');

export type GetBlogPostByIdParams = z.infer<typeof GetBlogPostByIdParamsSchema>;

export const GetBlogPostBySlugParamsSchema = z
	.object({
		slug: z.string().openapi({ example: 'my-first-blog-post' }),
	})
	.openapi('GetBlogPostBySlugParams');

export type GetBlogPostBySlugParams = z.infer<typeof GetBlogPostBySlugParamsSchema>;

export const CreateBlogPostDaoInputSchema = z
	.object({
		data: CreateBlogPostSchema,
		author_id: UUID.openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('CreateBlogPostDaoInput');

export type CreateBlogPostDaoInput = z.infer<typeof CreateBlogPostDaoInputSchema>;

export const UpdateBlogPostDaoInputSchema = z
	.object({
		blog_posts_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		data: UpdateBlogPostSchema,
	})
	.openapi('UpdateBlogPostDaoInput');

export type UpdateBlogPostDaoInput = z.infer<typeof UpdateBlogPostDaoInputSchema>;

export const DeleteBlogPostInputSchema = z
	.object({
		blog_posts_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteBlogPostInput');

export type DeleteBlogPostInput = z.infer<typeof DeleteBlogPostInputSchema>;

export const GetBlogCategoryByIdParamsSchema = z
	.object({
		blog_categories_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetBlogCategoryByIdParams');

export type GetBlogCategoryByIdParams = z.infer<typeof GetBlogCategoryByIdParamsSchema>;

export const CreateBlogCategoryDaoInputSchema = z
	.object({
		data: CreateBlogCategorySchema,
	})
	.openapi('CreateBlogCategoryDaoInput');

export type CreateBlogCategoryDaoInput = z.infer<typeof CreateBlogCategoryDaoInputSchema>;

export const UpdateBlogCategoryDaoInputSchema = z
	.object({
		blog_categories_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		data: UpdateBlogCategorySchema,
	})
	.openapi('UpdateBlogCategoryDaoInput');

export type UpdateBlogCategoryDaoInput = z.infer<typeof UpdateBlogCategoryDaoInputSchema>;

export const GetBlogTagByIdParamsSchema = z
	.object({
		blog_tag_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetBlogTagByIdParams');

export type GetBlogTagByIdParams = z.infer<typeof GetBlogTagByIdParamsSchema>;

export const CreateBlogTagDaoInputSchema = z
	.object({
		data: CreateBlogTagSchema,
	})
	.openapi('CreateBlogTagDaoInput');

export type CreateBlogTagDaoInput = z.infer<typeof CreateBlogTagDaoInputSchema>;

export const UpdateBlogTagDaoInputSchema = z
	.object({
		blog_tag_id: UUID.openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		data: UpdateBlogTagSchema,
	})
	.openapi('UpdateBlogTagDaoInput');

export type UpdateBlogTagDaoInput = z.infer<typeof UpdateBlogTagDaoInputSchema>;

export const DeleteBlogTagDaoInputSchema = DeleteBlogTagSchema.openapi('DeleteBlogTagDaoInput');

export type DeleteBlogTagDaoInput = z.infer<typeof DeleteBlogTagDaoInputSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('GetBlogPostByIdParams', GetBlogPostByIdParamsSchema);
	registry.register('GetBlogPostBySlugParams', GetBlogPostBySlugParamsSchema);
	registry.register('CreateBlogPostDaoInput', CreateBlogPostDaoInputSchema);
	registry.register('UpdateBlogPostDaoInput', UpdateBlogPostDaoInputSchema);
	registry.register('DeleteBlogPostInput', DeleteBlogPostInputSchema);
	registry.register('GetBlogCategoryByIdParams', GetBlogCategoryByIdParamsSchema);
	registry.register('CreateBlogCategoryDaoInput', CreateBlogCategoryDaoInputSchema);
	registry.register('UpdateBlogCategoryDaoInput', UpdateBlogCategoryDaoInputSchema);
	registry.register('GetBlogTagByIdParams', GetBlogTagByIdParamsSchema);
	registry.register('CreateBlogTagDaoInput', CreateBlogTagDaoInputSchema);
	registry.register('UpdateBlogTagDaoInput', UpdateBlogTagDaoInputSchema);
	registry.register('DeleteBlogTagDaoInput', DeleteBlogTagDaoInputSchema);
}
