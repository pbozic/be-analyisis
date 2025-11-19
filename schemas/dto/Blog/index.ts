import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerBlogSchemas } from './blog.dto.js';
import { registerSchemas as registerBlogValidatorSchemas } from './blog.validators.js';
import { registerSchemas as registerBlogDaoSchemas } from './blog.dao.dto.js';

// === Blog DTOs (Response) ===
export {
	EditorJSBlockSchemaKnown,
	EditorJSDataSchema,
	BlogPostBaseSchema,
	BlogPostRefSchema,
	BlogPostDetailSchema,
	BlogCategoryBaseSchema,
	BlogCategoryRefSchema,
	BlogTagBaseSchema,
	BlogTagRefSchema,
	type BlogPostBase,
	type BlogPostRef,
	type BlogPostDetail,
	type BlogCategoryBase,
	type BlogCategoryRef,
	type BlogTagBase,
	type BlogTagRef,
} from './blog.dto.js';

// === Blog Validators (Request Body, Query, Params) ===
export {
	CreateBlogPostSchema,
	UpdateBlogPostSchema,
	SearchBlogPostsSchema,
	CreateBlogCategorySchema,
	UpdateBlogCategorySchema,
	CreateBlogTagSchema,
	UpdateBlogTagSchema,
	DeleteBlogTagSchema,
	type CreateBlogPost,
	type UpdateBlogPost,
	type SearchBlogPosts,
	type CreateBlogCategory,
	type UpdateBlogCategory,
	type CreateBlogTag,
	type UpdateBlogTag,
	type DeleteBlogTag,
} from './blog.validators.js';

// === Blog DAO Input Schemas ===
export {
	GetBlogPostByIdParamsSchema,
	GetBlogPostBySlugParamsSchema,
	CreateBlogPostDaoInputSchema,
	UpdateBlogPostDaoInputSchema,
	DeleteBlogPostInputSchema,
	GetBlogCategoryByIdParamsSchema,
	CreateBlogCategoryDaoInputSchema,
	UpdateBlogCategoryDaoInputSchema,
	GetBlogTagByIdParamsSchema,
	CreateBlogTagDaoInputSchema,
	UpdateBlogTagDaoInputSchema,
	DeleteBlogTagDaoInputSchema,
	type GetBlogPostByIdParams,
	type GetBlogPostBySlugParams,
	type CreateBlogPostDaoInput,
	type UpdateBlogPostDaoInput,
	type DeleteBlogPostInput,
	type GetBlogCategoryByIdParams,
	type CreateBlogCategoryDaoInput,
	type UpdateBlogCategoryDaoInput,
	type GetBlogTagByIdParams,
	type CreateBlogTagDaoInput,
	type UpdateBlogTagDaoInput,
	type DeleteBlogTagDaoInput,
} from './blog.dao.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerBlogSchemas(registry);
	registerBlogValidatorSchemas(registry);
	registerBlogDaoSchemas(registry);
}
