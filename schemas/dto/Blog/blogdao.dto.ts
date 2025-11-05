import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import {
	CreateBlogPostSchema,
	UpdateBlogPostSchema,
	SearchBlogPostsSchema,
} from './blogpost.dto.ts';
import { CreateBlogCategorySchema, UpdateBlogCategorySchema } from './blogcategory.dto.ts';
import { CreateBlogTagSchema, UpdateBlogTagSchema, DeleteBlogTagSchema } from './blogtag.dto.ts';

extendZodWithOpenApi(z);

// -----------------------
// Blog DAO-level input schemas
// -----------------------

export const GetBlogPostByIdParamsSchema = z
	.object({
		blog_posts_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
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
		author_id: z.string().uuid().openapi({ example: '990e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('CreateBlogPostDaoInput');
export type CreateBlogPostDaoInput = z.infer<typeof CreateBlogPostDaoInputSchema>;

export const UpdateBlogPostDaoInputSchema = z
	.object({
		blog_posts_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
		data: UpdateBlogPostSchema,
	})
	.openapi('UpdateBlogPostDaoInput');
export type UpdateBlogPostDaoInput = z.infer<typeof UpdateBlogPostDaoInputSchema>;

export const DeleteBlogPostInputSchema = z
	.object({
		blog_posts_id: z.string().uuid().openapi({ example: '880e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteBlogPostInput');
export type DeleteBlogPostInput = z.infer<typeof DeleteBlogPostInputSchema>;

export const SearchBlogPostsInputSchema = SearchBlogPostsSchema.openapi('SearchBlogPostsInput');
export type SearchBlogPostsInput = z.infer<typeof SearchBlogPostsInputSchema>;

// Blog category DAO inputs
export const GetBlogCategoryByIdParamsSchema = z
	.object({
		blog_categories_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetBlogCategoryByIdParams');
export type GetBlogCategoryByIdParams = z.infer<typeof GetBlogCategoryByIdParamsSchema>;

export const CreateBlogCategoryInputSchema = CreateBlogCategorySchema.openapi('CreateBlogCategoryInput');
export type CreateBlogCategoryInput = z.infer<typeof CreateBlogCategoryInputSchema>;

export const UpdateBlogCategoryInputSchema = z
	.object({
		blog_categories_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		data: UpdateBlogCategorySchema,
	})
	.openapi('UpdateBlogCategoryInput');
export type UpdateBlogCategoryInput = z.infer<typeof UpdateBlogCategoryInputSchema>;

export const DeleteBlogCategoryInputSchema = z
	.object({
		blog_categories_id: z.string().uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('DeleteBlogCategoryInput');
export type DeleteBlogCategoryInput = z.infer<typeof DeleteBlogCategoryInputSchema>;

// Blog tag DAO inputs
export const GetBlogTagByIdParamsSchema = z
	.object({
		blog_tag_id: z.string().uuid().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
	})
	.openapi('GetBlogTagByIdParams');
export type GetBlogTagByIdParams = z.infer<typeof GetBlogTagByIdParamsSchema>;

export const CreateBlogTagInputSchema = CreateBlogTagSchema.openapi('CreateBlogTagInput');
export type CreateBlogTagInput = z.infer<typeof CreateBlogTagInputSchema>;

export const UpdateBlogTagInputSchema = z
	.object({
		blog_tag_id: z.string().uuid().openapi({ example: '770e8400-e29b-41d4-a716-446655440000' }),
		data: UpdateBlogTagSchema,
	})
	.openapi('UpdateBlogTagInput');
export type UpdateBlogTagInput = z.infer<typeof UpdateBlogTagInputSchema>;

export const DeleteBlogTagInputSchema = DeleteBlogTagSchema.openapi('DeleteBlogTagInput');
export type DeleteBlogTagInput = z.infer<typeof DeleteBlogTagInputSchema>;

// Register helper
export function registerBlogDaoSchemas(registry: OpenAPIRegistry) {
	// posts
	registry.register('GetBlogPostByIdParams', GetBlogPostByIdParamsSchema);
	registry.register('GetBlogPostBySlugParams', GetBlogPostBySlugParamsSchema);
	registry.register('CreateBlogPostDaoInput', CreateBlogPostDaoInputSchema);
	registry.register('UpdateBlogPostDaoInput', UpdateBlogPostDaoInputSchema);
	registry.register('DeleteBlogPostInput', DeleteBlogPostInputSchema);
	registry.register('SearchBlogPostsInput', SearchBlogPostsInputSchema);

	// categories
	registry.register('GetBlogCategoryByIdParams', GetBlogCategoryByIdParamsSchema);
	registry.register('CreateBlogCategoryInput', CreateBlogCategoryInputSchema);
	registry.register('UpdateBlogCategoryInput', UpdateBlogCategoryInputSchema);
	registry.register('DeleteBlogCategoryInput', DeleteBlogCategoryInputSchema);

	// tags
	registry.register('GetBlogTagByIdParams', GetBlogTagByIdParamsSchema);
	registry.register('CreateBlogTagInput', CreateBlogTagInputSchema);
	registry.register('UpdateBlogTagInput', UpdateBlogTagInputSchema);
	registry.register('DeleteBlogTagInput', DeleteBlogTagInputSchema);
}
