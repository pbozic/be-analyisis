import { disconnect } from 'node:process';

import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { BlogPost, SearchBlogPostsInput } from '../types/blog/BlogPost.js';
import type { BlogCategory } from '../types/blog/BlogCategory.js';
import type { BlogTag } from '../types/blog/BlogTag.js';
import type { CreateBlogPostInput, UpdateBlogPostInput } from '../types/blog/BlogPost.js';

export async function getBlogPosts(): Promise<BlogPost[]> {
	try {
		return await prisma.blog_posts.findMany({
			include: {
				category: true,
				//image_file: true,
				tags: true,
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

export async function getBlogPostById(blog_posts_id: string): Promise<BlogPost | null> {
	try {
		return await prisma.blog_posts.findUnique({
			where: { blog_posts_id },
			include: {
				category: true,
				image_file: true,
				tags: true,
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

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
	try {
		return await prisma.blog_posts.findUnique({
			where: { slug },
			include: {
				category: true,
				//image_file: true,
				tags: true,
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

export async function createBlogPost(data: CreateBlogPostInput, author_id: string): Promise<BlogPost> {
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
				author: {
					connect: { user_id: author_id }, // Assuming author is a User type with user_id
				},
				category: {
					connect: { blog_categories_id: data.category_id }, // Assuming category is a BlogCategory type with blog_categories_id
				},
				tags: {
					connect: data.tag_ids.map((tag_id) => ({ blog_tags_id: tag_id })), // Assuming tags is a BlogTag type with blog_tag_id
				},
				image_file: data.image_file_id ? { connect: { files_id: data.image_file_id } } : undefined, // Assuming image_file is a File type with files_id
			},
			include: {
				category: true,
				//image_file: true,
				tags: true,
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

export async function updateBlogPost(blog_posts_id: string, data: UpdateBlogPostInput): Promise<BlogPost> {
	try {
		let existingPost1 = await prisma.blog_posts.findUnique({
			where: { blog_posts_id },
			select: { slug: true },
		});
		if (!existingPost1) {
			throw new Error(`Blog post with ID ${blog_posts_id} not found`);
		}
		// Generate slug from title
		let slug =
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

		return await prisma.blog_posts.update({
			where: { blog_posts_id },
			data: {
				title: data.title,
				short_content: data.short_content || null,
				content: data.content,
				publish_at: data.publish_at ? new Date(data.publish_at) : undefined, // Update only if provided
				slug,
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
				image_file: data.image_file_id ? { connect: { files_id: data.image_file_id } } : undefined,
			},
			include: {
				category: true,
				//image_file: true,
				tags: true,
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

export async function deleteBlogPost(blog_posts_id: string): Promise<BlogPost> {
	try {
		return await prisma.blog_posts.delete({
			where: { blog_posts_id },
			include: {
				category: true,
				//image_file: true,
				tags: true,
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

export async function searchBlogPosts(query: SearchBlogPostsInput): Promise<BlogPost[]> {
	try {
		return await prisma.blog_posts.findMany({
			where: {
				...(query.query && {
					OR: [
						{ title: { contains: query.query, mode: 'insensitive' } },
						{ short_content: { contains: query.query, mode: 'insensitive' } },
					],
				}),
				...(query.tag_ids && { tags: { some: { blog_tag_id: { in: query.tag_ids } } } }),
				...(query.category_ids && { category_id: { in: query.category_ids } }),
				...(query.year && {
					publish_at: { gte: new Date(`${query.year}-01-01`), lt: new Date(`${query.year + 1}-01-01`) },
				}),
				...(query.month && {
					publish_at: {
						gte: new Date(`${query.year}-${String(query.month).padStart(2, '0')}-01`),
						lt: new Date(`${query.year}-${String(query.month).padStart(2, '0') + 1}-01`),
					},
				}),
			},
			include: {
				category: true,
				//image_file: true,
				tags: true,
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
