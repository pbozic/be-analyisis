import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { BlogPostBase } from '../schemas/dto/Blog/blog.dto.js';
import type { BlogCategory } from '../schemas/dto/Blog/blogcategory.dto.js';
import type { BlogTag } from '../schemas/dto/Blog/blogtag.dto.js';
import type { CreateBlogPost, UpdateBlogPost, SearchBlogPosts } from '../schemas/dto/Blog/blog.validators.js';
/**
 * Get all blog posts.
 *
 * @returns {Promise<BlogPostBase[]>}
 */
export async function getBlogPosts(): Promise<BlogPostBase[]> {
	try {
		return await prisma.blog_posts.findMany({
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
			orderBy: {
				publish_at: 'desc', // Order by publish date descending
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Get blog post by ID.
 *
 * @param {string} blog_posts_id
 * @returns {Promise<BlogPostBase | null>}
 */
export async function getBlogPostById(blog_posts_id: string): Promise<BlogPostBase | null> {
	try {
		return await prisma.blog_posts.findUnique({
			where: { blog_posts_id },
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Get blog post by slug.
 *
 * @param {string} slug
 * @returns {Promise<BlogPostBase | null>}
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPostBase | null> {
	try {
		return await prisma.blog_posts.findUnique({
			where: { slug },
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Create a new blog post.
 *
 * @param {CreateBlogPost} data
 * @param {string} author_id
 * @returns {Promise<BlogPostBase>}
 */
export async function createBlogPost(data: CreateBlogPost, author_id: string): Promise<BlogPostBase> {
	try {
		let slug = data.title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
			.replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
		// Ensure slug is unique
		let existingPost = await prisma.blog_posts.findFirst({
			where: { slug },
			select: { blog_posts_id: true },
		});
		let counter = 1;
		while (existingPost) {
			slug = `${slug}-${counter}`;
			existingPost = await prisma.blog_posts.findFirst({
				where: { slug },
				select: { blog_posts_id: true },
			});
			counter++;
		}

		return await prisma.blog_posts.create({
			data: {
				title: data.title,
				short_content: data.short_content || null,
				content: data.content,
				publish_at: data.publish_at ? new Date(data.publish_at) : new Date(), // Default to now if not provided
				slug,
				status: data.status || 'DRAFT', // Default to DRAFT if not provided
				author: {
					connect: { user_id: author_id }, // Assuming author is a User type with user_id
				},
				category: {
					connect: { blog_categories_id: data.category_id }, // Assuming category is a BlogCategory type with blog_categories_id
				},
				tags: {
					connect: data.tag_ids.map((tag_id) => ({ blog_tags_id: tag_id })), // Assuming tags is a BlogTag type with blog_tag_id
				},
				image: data.image_file_id ? { connect: { file_id: data.image_file_id } } : undefined, // Assuming image_file is a File type with files_id
			},
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Update a blog post.
 *
 * @param {string} blog_posts_id
 * @param {UpdateBlogPost} data
 * @returns {Promise<BlogPostBase>}
 */
export async function updateBlogPost(blog_posts_id: string, data: UpdateBlogPost): Promise<BlogPostBase> {
	try {
		let existingPost1 = await prisma.blog_posts.findUnique({
			where: { blog_posts_id },
			select: { slug: true },
		});
		if (!existingPost1) {
			throw new Error(`Blog post with ID ${blog_posts_id} not found`);
		}
		let slug;
		if (data.slug && data.slug !== existingPost1.slug) {
			// Generate slug from title
			slug =
				existingPost1.slug ||
				data.title
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
					.replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

			// Ensure slug is unique
			let existingPost = await prisma.blog_posts.findFirst({
				where: { slug, blog_posts_id: { not: blog_posts_id } }, // Exclude current post
				select: { blog_posts_id: true },
			});
			let counter = 1;
			while (existingPost) {
				slug = `${slug}-${counter}`;
				existingPost = await prisma.blog_posts.findFirst({
					where: { slug, blog_posts_id: { not: blog_posts_id } }, // Exclude current post
					select: { blog_posts_id: true },
				});
				counter++;
			}
		} else {
			slug = existingPost1.slug; // Use existing slug if not provided or unchanged
		}

		return await prisma.blog_posts.update({
			where: { blog_posts_id },
			data: {
				title: data.title,
				short_content: data.short_content || null,
				content: data.content,
				publish_at: data.publish_at ? new Date(data.publish_at) : undefined, // Update only if provided
				slug,
				status: data.status || existingPost1.status, // Default to DRAFT if not provided
				category: data.category_id ? { connect: { blog_categories_id: data.category_id } } : undefined,
				tags: data.tag_ids
					? {
							connect: data.tag_ids.map((tag_id) => ({ blog_tags_id: tag_id })),
							disconnect:
								data.tag_ids.length === 0
									? { blog_tags_id: { not: { in: data.tag_ids } } } // Disconnect all tags not in the provided list
									: undefined, // If tag_ids is empty, disconnect all tags
						}
					: undefined,
				image: data.image_file_id ? { connect: { file_id: data.image_file_id } } : undefined,
			},
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Delete a blog post.
 *
 * @param {string} blog_posts_id
 * @returns {Promise<BlogPostBase>}
 */
export async function deleteBlogPost(blog_posts_id: string): Promise<BlogPostBase> {
	try {
		return await prisma.blog_posts.delete({
			where: { blog_posts_id },
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Search blog posts.
 *
 * @param {SearchBlogPosts} query
 * @returns {Promise<BlogPostBase[]>}
 */
export async function searchBlogPosts(query: SearchBlogPosts): Promise<BlogPostBase[]> {
	try {
		return await prisma.blog_posts.findMany({
			where: {
				...(query.query && {
					OR: [
						{ title: { contains: query.query, mode: 'insensitive' } },
						{ short_content: { contains: query.query, mode: 'insensitive' } },
					],
				}),
				...(query.tag_ids && { tags: { some: { blog_tags_id: { in: query.tag_ids } } } }),
				...(query.category_ids && { category_id: { in: query.category_ids } }),
				status: 'PUBLISHED', // Only include published posts
				publish_at: {
					lt: new Date(), // always exclude future posts
					...(query.year && {
						gte: new Date(`${query.year}-01-01`),
					}),
					...(query.month && {
						gte: new Date(`${query.year}-${String(query.month).padStart(2, '0')}-01`),
						lt: new Date(`${query.year}-${String(query.month + 1).padStart(2, '0')}-01`),
					}),
				},
			},
			include: {
				category: true,
				image: true,
				tags: true,
				author: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Get all blog categories.
 *
 * @returns {Promise<BlogCategory[]>}
 */
export async function getBlogCategories(): Promise<BlogCategory[]> {
	try {
		return await prisma.blog_categories.findMany({
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Get blog category by ID.
 *
 * @param {string} blog_categories_id
 * @returns {Promise<BlogCategory | null>}
 */
export async function getBlogCategoryById(blog_categories_id: string): Promise<BlogCategory | null> {
	try {
		return await prisma.blog_categories.findUnique({
			where: { blog_categories_id },
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Create a new blog category.
 *
 * @param {Object} data
 * @param {string} data.name - The name of the blog category.
 * @param {string|null} [data.description] - The description of the blog category.
 * @returns {Promise<BlogCategory>}
 */
export async function createBlogCategory(data: { name: string; description?: string | null }): Promise<BlogCategory> {
	try {
		return await prisma.blog_categories.create({
			data,
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Update a blog category.
 *
 * @param {string} blog_categories_id
 * @param {Object} data
 * @param {string} [data.name]
 * @param {string|null} [data.description]
 * @returns {Promise<BlogCategory>}
 */
export async function updateBlogCategory(
	blog_categories_id: string,
	data: { name?: string; description?: string | null }
): Promise<BlogCategory> {
	try {
		return await prisma.blog_categories.update({
			where: { blog_categories_id },
			data,
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Delete a blog category.
 *
 * @param {string} blog_categories_id
 * @returns {Promise<BlogCategory>}
 */
export async function deleteBlogCategory(blog_categories_id: string): Promise<BlogCategory> {
	try {
		return await prisma.blog_categories.delete({
			where: { blog_categories_id },
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Get all blog tags.
 *
 * @returns {Promise<BlogTag[]>}
 */
export async function getBlogTags(): Promise<BlogTag[]> {
	try {
		return await prisma.blog_tags.findMany({
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Get a blog tag by ID.
 *
 * @param {string} blog_tag_id
 * @returns {Promise<BlogTag | null>}
 */
export async function getBlogTagById(blog_tag_id: string): Promise<BlogTag | null> {
	try {
		return await prisma.blog_tags.findUnique({
			where: { blog_tag_id },
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Create a new blog tag.
 *
 * @param {Object} data
 * @param {string} data.name - The name of the blog tag.
 * @param {string|null} [data.description] - The description of the blog tag.
 * @returns {Promise<BlogTag>}
 */
export async function createBlogTag(data: { name: string; description?: string | null }): Promise<BlogTag> {
	try {
		return await prisma.blog_tags.create({
			data,
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Update a blog tag.
 *
 * @param {string} blog_tag_id
 * @param {Object} data
 * @param {string} [data.name]
 * @param {string|null} [data.description]
 * @returns {Promise<BlogTag>}
 */
export async function updateBlogTag(
	blog_tag_id: string,
	data: { name?: string; description?: string | null }
): Promise<BlogTag> {
	try {
		return await prisma.blog_tags.update({
			where: { blog_tag_id },
			data,
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}
/**
 * Delete a blog tag.
 *
 * @param {string} blog_tag_id
 * @returns {Promise<BlogTag>}
 */
export async function deleteBlogTag(blog_tag_id: string): Promise<BlogTag> {
	try {
		return await prisma.blog_tags.delete({
			where: { blog_tag_id },
			include: {
				blog_posts: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}

export default {
	getBlogPosts,
	getBlogPostById,
	getBlogPostBySlug,
	createBlogPost,
	updateBlogPost,
	deleteBlogPost,
	searchBlogPosts,
	getBlogCategories,
	getBlogCategoryById,
	createBlogCategory,
	updateBlogCategory,
	deleteBlogCategory,
	getBlogTags,
	getBlogTagById,
	createBlogTag,
	updateBlogTag,
	deleteBlogTag,
};
