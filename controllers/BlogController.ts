import { Request, Response } from 'express';

import { ValidatedRequest } from '../types/validatedRequest';
import type { CreateBlogPostInput, UpdateBlogPostInput, SearchBlogPostsInput } from '../types/blog/BlogPost';
import BlogDao from '../dao/Blog';
import { CreateBlogCategoryInput, DeleteBlogCategoryInput, UpdateBlogCategoryInput } from '../types/blog/BlogCategory';
import { CreateBlogTagInput, DeleteBlogTagInput, UpdateBlogTagInput } from '../types/blog/BlogTag';

export async function searchBlogPosts(req: ValidatedRequest<SearchBlogPostsInput>, res: Response): Promise<void> {
	try {
		const { page = 1, limit = 10, query, tag_ids, category_ids, year, month } = req.body;
		const blogPosts = await BlogDao.searchBlogPosts({
			page,
			limit,
			query,
			tag_ids,
			category_ids,
			year,
			month,
		});
		res.status(200).json({
			message: 'Blog posts retrieved successfully',
			data: blogPosts,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog posts', error });
	}
}

export async function getBlogPostById(req: Request, res: Response): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog post ID is required' });
			return;
		}
		const blogPost = await BlogDao.getBlogPostById(id);
		if (blogPost) {
			res.status(200).json({
				message: 'Blog post retrieved successfully',
				data: blogPost,
			});
		} else {
			res.status(404).json({
				message: `Blog post with ID ${id} not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog post', error });
	}
}

export async function getBlogPostBySlug(req: Request, res: Response): Promise<void> {
	try {
		const { slug } = req.params;
		if (!slug) {
			res.status(400).json({ message: 'Blog post slug is required' });
			return;
		}
		const blogPost = await BlogDao.getBlogPostBySlug(slug);
		if (blogPost) {
			res.status(200).json({
				message: 'Blog post retrieved successfully',
				data: blogPost,
			});
		} else {
			res.status(404).json({
				message: `Blog post with slug "${slug}" not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog post', error });
	}
}

export async function createBlogPost(req: ValidatedRequest<CreateBlogPostInput>, res: Response): Promise<void> {
	try {
		const { title, short_content, content, category_id, image_file_id, publish_at } = req.body;
		const newBlogPost = await BlogDao.createBlogPost({
			title,
			short_content,
			content,
			category_id,
			image_file_id,
			publish_at,
		});
		res.status(201).json({
			message: 'Blog post created successfully',
			data: newBlogPost,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating blog post', error });
	}
}

export async function updateBlogPost(
	req: ValidatedRequest<UpdateBlogPostInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { id: blog_posts_id } = req.params;

		if (!blog_posts_id) {
			res.status(400).json({ message: 'Blog post ID is required' });
			return;
		}
		const { title, short_content, content, category_id, image_file_id, publish_at } = req.body;
		const updatedBlogPost = await BlogDao.updateBlogPost(blog_posts_id, {
			title,
			short_content,
			content,
			category_id,
			image_file_id,
			publish_at,
		});
		res.status(200).json({
			message: 'Blog post updated successfully',
			data: updatedBlogPost,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating blog post', error });
	}
}

export async function deleteBlogPost(req: Request, res: Response): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog post ID is required' });
			return;
		}
		const deletedBlogPost = await BlogDao.deleteBlogPost(id);
		if (deletedBlogPost) {
			res.status(200).json({
				message: 'Blog post deleted successfully',
				data: deletedBlogPost,
			});
		} else {
			res.status(404).json({
				message: `Blog post with ID ${id} not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error deleting blog post', error });
	}
}

export async function getBlogPosts(req: Request, res: Response): Promise<void> {
	try {
		let blogPosts = await BlogDao.getBlogPosts();
		res.status(200).json({
			message: 'Blog posts retrieved successfully',
			data: blogPosts,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog posts', error });
	}
}

export async function createBlogCategory(req: ValidatedRequest<CreateBlogCategoryInput>, res: Response): Promise<void> {
	try {
		const { name, description } = req.body;
		const newBlogCategory = await BlogDao.createBlogCategory({ name, description });
		res.status(201).json({
			message: 'Blog category created successfully',
			data: newBlogCategory,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating blog category', error });
	}
}

export async function deleteBlogCategory(
	req: ValidatedRequest<DeleteBlogCategoryInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog category ID is required' });
			return;
		}
		const deletedBlogCategory = await BlogDao.deleteBlogCategory(id);
		if (deletedBlogCategory) {
			res.status(200).json({
				message: 'Blog category deleted successfully',
				data: deletedBlogCategory,
			});
		} else {
			res.status(404).json({
				message: `Blog category with ID ${id} not found`,
			});
		}
		res.status(400).json({
			message: `Delete for blog category with ID ${id} is not implemented yet.`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error deleting blog category', error });
	}
}

export async function updateBlogCategory(
	req: ValidatedRequest<UpdateBlogCategoryInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog category ID is required' });
			return;
		}
		const { name, description } = req.body;
		const updatedBlogCategory = await BlogDao.updateBlogCategory(id, { name, description });
		if (updatedBlogCategory) {
			res.status(200).json({
				message: 'Blog category updated successfully',
				data: updatedBlogCategory,
			});
			return;
		}
		res.status(404).json({
			message: `Blog category with ID ${id} not found`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating blog category', error });
	}
}

export async function createBlogTag(req: ValidatedRequest<CreateBlogTagInput>, res: Response): Promise<void> {
	try {
		const { name, description } = req.body;
		const newBlogTag = await BlogDao.createBlogTag({ name, description });
		if (newBlogTag) {
			res.status(201).json({
				message: 'Blog tag created successfully',
				data: newBlogTag,
			});
			return;
		}
		res.status(400).json({
			message: 'Error creating blog tag',
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating blog tag', error });
	}
}

export async function deleteBlogTag(
	req: ValidatedRequest<DeleteBlogTagInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog tag ID is required' });
			return;
		}
		const deletedBlogTag = await BlogDao.deleteBlogTag(id);
		if (deletedBlogTag) {
			res.status(200).json({
				message: 'Blog tag deleted successfully',
				data: deletedBlogTag,
			});
			return;
		}
		res.status(404).json({
			message: `Blog tag with ID ${id} not found`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error deleting blog tag', error });
	}
}

export async function updateBlogTag(
	req: ValidatedRequest<UpdateBlogTagInput, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog tag ID is required' });
			return;
		}
		const { name, description } = req.body;
		const updatedBlogTag = await BlogDao.updateBlogTag(id, { name, description });
		if (updatedBlogTag) {
			res.status(200).json({
				message: 'Blog tag updated successfully',
				data: updatedBlogTag,
			});
			return;
		}
		res.status(404).json({
			message: `Blog tag with ID ${id} not found`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating blog tag', error });
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
	createBlogCategory,
	deleteBlogCategory,
	updateBlogCategory,
	createBlogTag,
	deleteBlogTag,
	updateBlogTag,
};
