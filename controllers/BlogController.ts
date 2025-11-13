import { Request, Response } from 'express';
import axios from 'axios';

import { ValidatedRequest } from '../types/validatedRequest.ts';
import type { CreateBlogPostInput, UpdateBlogPostInput, SearchBlogPostsInput } from '../types/blog/BlogPost.ts';
import { CreateBlogCategoryInput, UpdateBlogCategoryInput } from '../types/blog/BlogCategory.ts';
import { CreateBlogTagInput, UpdateBlogTagInput } from '../types/blog/BlogTag.ts';
import { createFileHelper } from './FilesController.js';
import BlogDao from '../dao/Blog.ts';
import FileDao from '../dao/File.js';

/**
 * POST /blog/search
 * @tag Blog
 * @summary Search blog posts
 * @description Retrieves a list of blog posts based on search criteria.
 * @operationId searchBlogPosts
 * @bodyDescription Search criteria for blog posts.
 * @bodyContent {SearchBlogPostsInput} application/json
 * @bodyRequired
 * @response 200 - Blog posts retrieved successfully
 * @responseContent {BlogPost[]} 200.application/json
 * @response 500 - Error retrieving blog posts
 * @prisma_model blog_posts
 */
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
		res.status(200).json(blogPosts);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog posts', error });
	}
}

/**
 * GET /blog/:id
 * @tag Blog
 * @summary Get blog post by ID
 * @description Retrieves a single blog post by its unique ID.
 * @operationId getBlogPostById
 * @response 200 - Blog post retrieved successfully
 * @responseContent {BlogPost | null} 200.application/json
 * @response 404 - Blog post not found
 * @response 500 - Error retrieving blog post
 * @prisma_model blog_posts
 */
export async function getBlogPostById(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog post ID is required' });
			return;
		}
		const blogPost = await BlogDao.getBlogPostById(id);
		if (blogPost) {
			res.status(200).json(blogPost);
		} else {
			res.status(404).json({
				message: `Blog post with ID ${id} not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog post', error });
	}
}

/**
 * GET /blog/slug/:slug
 * @tag Blog
 * @summary Get blog post by slug
 * @description Retrieves a single blog post by its unique slug.
 * @operationId getBlogPostBySlug
 * @response 200 - Blog post retrieved successfully
 * @responseContent {BlogPost | null} 200.application/json
 * @response 404 - Blog post not found
 * @response 500 - Error retrieving blog post
 * @prisma_model blog_posts
 */
export async function getBlogPostBySlug(req: ValidatedRequest<never, { slug: string }>, res: Response): Promise<void> {
	try {
		const { slug } = req.params;
		if (!slug) {
			res.status(400).json({ message: 'Blog post slug is required' });
			return;
		}
		const blogPost = await BlogDao.getBlogPostBySlug(slug);
		if (blogPost) {
			res.status(200).json(blogPost);
		} else {
			res.status(404).json({
				message: `Blog post with slug "${slug}" not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog post', error });
	}
}

/**
 * POST /blog
 * @tag Blog
 * @summary Create a new blog post
 * @description Creates a new blog post with the provided details.
 * @operationId createBlogPost
 * @bodyDescription The details of the blog post to create.
 * @bodyContent {CreateBlogPost} application/json
 * @bodyRequired
 * @response 201 - Blog post created successfully
 * @responseContent {BlogPost} 201.application/json
 * @response 500 - Error creating blog post
 * @prisma_model blog_posts
 */
export async function createBlogPost(req: ValidatedRequest<CreateBlogPostInput>, res: Response): Promise<void> {
	try {
		const { title, short_content, content, category_id, image_file_id, publish_at, tag_ids, status } = req.body;
		const newBlogPost = await BlogDao.createBlogPost(
			{
				title,
				short_content,
				content,
				publish_at,
				category_id,
				image_file_id,
				tag_ids: tag_ids || [],
				status: status,
			},
			req.user?.user_id as string
		);
		res.status(201).json(newBlogPost);
	} catch (error) {
		res.status(500).json({
			message: 'Error creating blog post',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * PATCH /blog/:id
 * @tag Blog
 * @summary Update a blog post
 * @description Updates an existing blog post by ID.
 * @operationId updateBlogPost
 * @bodyDescription The details of the blog post to update.
 * @bodyContent {UpdateBlogPost} application/json
 * @bodyRequired
 * @response 200 - Blog post updated successfully
 * @responseContent {BlogPost} 200.application/json
 * @response 500 - Error updating blog post
 * @prisma_model blog_posts
 */
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
		const { title, short_content, content, category_id, image_file_id, publish_at, status } = req.body;
		const updatedBlogPost = await BlogDao.updateBlogPost(blog_posts_id, {
			title,
			short_content,
			content,
			category_id,
			image_file_id,
			publish_at,
			tag_ids: req.body.tag_ids || [],
			status,
		});
		res.status(200).json(updatedBlogPost);
	} catch (error) {
		res.status(500).json({ message: 'Error updating blog post', error });
	}
}

/**
 * DELETE /blog/:id
 * @tag Blog
 * @summary Delete a blog post
 * @description Deletes a blog post by its unique ID.
 * @operationId deleteBlogPost
 * @response 200 - Blog post deleted successfully
 * @responseContent {BlogPost} 200.application/json
 * @response 404 - Blog post not found
 * @response 500 - Error deleting blog post
 * @prisma_model blog_posts
 */
export async function deleteBlogPost(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog post ID is required' });
			return;
		}
		const deletedBlogPost = await BlogDao.deleteBlogPost(id);
		if (deletedBlogPost) {
			res.status(200).json(deletedBlogPost);
		} else {
			res.status(404).json({
				message: `Blog post with ID ${id} not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error deleting blog post', error });
	}
}

/**
 * GET /blog
 * @tag Blog
 * @summary Get all blog posts
 * @description Retrieves all blog posts.
 * @operationId getBlogPosts
 * @response 200 - Blog posts retrieved successfully
 * @responseContent {BlogPost[]} 200.application/json
 * @response 500 - Error retrieving blog posts
 * @prisma_model blog_posts
 */
export async function getBlogPosts(req: Request, res: Response): Promise<void> {
	try {
		let blogPosts = await BlogDao.getBlogPosts();
		res.status(200).json(blogPosts);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog posts', error });
	}
}

/**
 * GET /blog/categories
 * @tag Blog
 * @summary Get all blog categories
 * @description Retrieves all blog categories.
 * @operationId getBlogCategories
 * @response 200 - Blog categories retrieved successfully
 * @responseContent {BlogCategory[]} 200.application/json
 * @response 500 - Error retrieving blog categories
 * @prisma_model blog_categories
 */
export async function getBlogCategories(req: Request, res: Response): Promise<void> {
	try {
		const blogCategories = await BlogDao.getBlogCategories();
		res.status(200).json(blogCategories);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog categories', error });
	}
}

/**
 * POST /blog/categories
 * @tag Blog
 * @summary Create a new blog category
 * @description Creates a new blog category.
 * @operationId createBlogCategory
 * @bodyDescription The details of the blog category to create.
 * @bodyContent {CreateBlogCategoryInput} application/json
 * @bodyRequired
 * @response 201 - Blog category created successfully
 * @responseContent {BlogCategory} 201.application/json
 * @response 500 - Error creating blog category
 * @prisma_model blog_categories
 */
export async function createBlogCategory(req: ValidatedRequest<CreateBlogCategoryInput>, res: Response): Promise<void> {
	try {
		const { name, description } = req.body;
		const newBlogCategory = await BlogDao.createBlogCategory({ name, description });
		res.status(201).json(newBlogCategory);
	} catch (error) {
		res.status(500).json({ message: 'Error creating blog category', error });
	}
}

/**
 * DELETE /blog/categories/:id
 * @tag Blog
 * @summary Delete a blog category
 * @description Deletes a blog category by its unique ID.
 * @operationId deleteBlogCategory
 * @response 200 - Blog category deleted successfully
 * @responseContent {BlogCategory} 200.application/json
 * @response 404 - Blog category not found
 * @response 500 - Error deleting blog category
 * @prisma_model blog_categories
 */
export async function deleteBlogCategory(req: ValidatedRequest<object, { id: string }>, res: Response): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog category ID is required' });
			return;
		}
		const deletedBlogCategory = await BlogDao.deleteBlogCategory(id);
		if (deletedBlogCategory) {
			res.status(200).json(deletedBlogCategory);
		} else {
			res.status(404).json({
				message: `Blog category with ID ${id} not found`,
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'Error deleting blog category', error });
	}
}

/**
 * PATCH /blog/categories/:id
 * @tag Blog
 * @summary Update a blog category
 * @description Updates an existing blog category by ID.
 * @operationId updateBlogCategory
 * @bodyDescription The details of the blog category to update.
 * @bodyContent {UpdateBlogCategoryInput} application/json
 * @bodyRequired
 * @response 200 - Blog category updated successfully
 * @responseContent {BlogCategory} 200.application/json
 * @response 404 - Blog category not found
 * @response 500 - Error updating blog category
 * @prisma_model blog_categories
 */
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
			res.status(200).json(updatedBlogCategory);
			return;
		}
		res.status(404).json({
			message: `Blog category with ID ${id} not found`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating blog category', error });
	}
}

/**
 * GET /blog/tag
 * @tag Blog
 * @summary Get all blog tags
 * @description Retrieves all blog tags.
 * @operationId getBlogTags
 * @response 200 - Blog tags retrieved successfully
 * @responseContent {BlogTag[]} 200.application/json
 * @response 500 - Error retrieving blog tags
 * @prisma_model blog_tags
 */
export async function getBlogTags(req: Request, res: Response): Promise<void> {
	try {
		const blogTags = await BlogDao.getBlogTags();
		res.status(200).json(blogTags);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving blog tags', error });
	}
}

/**
 * POST /blog/tag
 * @tag Blog
 * @summary Create a new blog tag
 * @description Creates a new blog tag.
 * @operationId createBlogTag
 * @bodyDescription The details of the blog tag to create.
 * @bodyContent {CreateBlogTagInput} application/json
 * @bodyRequired
 * @response 201 - Blog tag created successfully
 * @responseContent {BlogTag} 201.application/json
 * @response 400 - Error creating blog tag
 * @response 500 - Error creating blog tag
 * @prisma_model blog_tags
 */
export async function createBlogTag(req: ValidatedRequest<CreateBlogTagInput>, res: Response): Promise<void> {
	try {
		const { name, description } = req.body;
		const newBlogTag = await BlogDao.createBlogTag({ name, description });
		if (newBlogTag) {
			res.status(201).json(newBlogTag);
			return;
		}
		res.status(400).json({
			message: 'Error creating blog tag',
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating blog tag', error });
	}
}

/**
 * DELETE /blog/tag/:id
 * @tag Blog
 * @summary Delete a blog tag
 * @description Deletes a blog tag by its unique ID.
 * @operationId deleteBlogTag
 * @response 200 - Blog tag deleted successfully
 * @responseContent {BlogTag} 200.application/json
 * @response 404 - Blog tag not found
 * @response 500 - Error deleting blog tag
 * @prisma_model blog_tags
 */
export async function deleteBlogTag(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).json({ message: 'Blog tag ID is required' });
			return;
		}
		const deletedBlogTag = await BlogDao.deleteBlogTag(id);
		if (deletedBlogTag) {
			res.status(200).json(deletedBlogTag);
			return;
		}
		res.status(404).json({
			message: `Blog tag with ID ${id} not found`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error deleting blog tag', error });
	}
}

/**
 * PATCH /blog/tag/:id
 * @tag Blog
 * @summary Update a blog tag
 * @description Updates an existing blog tag by ID.
 * @operationId updateBlogTag
 * @bodyDescription The details of the blog tag to update.
 * @bodyContent {UpdateBlogTagInput} application/json
 * @bodyRequired
 * @response 200 - Blog tag updated successfully
 * @responseContent {BlogTag} 200.application/json
 * @response 404 - Blog tag not found
 * @response 500 - Error updating blog tag
 * @prisma_model blog_tags
 */
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
			res.status(200).json(updatedBlogTag);
			return;
		}
		res.status(404).json({
			message: `Blog tag with ID ${id} not found`,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error updating blog tag', error });
	}
}

/**
 * POST /blog/images/url
 * @tag Blog
 * @summary Create blog image by URL
 * @description Creates a new image file from a provided URL.
 * @operationId createBlogImageByUrl
 * @bodyDescription The image URL to fetch and store.
 * @bodyContent {
    "url": "https://example.com/image.jpg"
  } application/json
 * @bodyRequired
 * @response 201 - Image created successfully
 * @responseContent {string | null} 201.application/json
 * @responseExample {
 * 	 "url": "https://s3.amazonaws.com/your-bucket/image.jpg"
 * } 201.application/json
 * @response 400 - Invalid image URL
 * @response 500 - Error creating image
 * @prisma_model files
 */
export async function createBlogImageByUrl(req: ValidatedRequest<{ url: string }>, res: Response): Promise<void> {
	try {
		const { url } = req.body;

		if (!url) {
			res.status(400).json({ message: 'Image URL is required' });
			return;
		}

		// Fetch the image as a buffer
		const response = await axios.get(url, {
			responseType: 'arraybuffer',
		});

		const mime_type = response.headers['content-type'];

		if (!mime_type || !mime_type.startsWith('image/')) {
			res.status(400).json({ message: 'URL must point to an image file' });
			return;
		}

		const base64 = Buffer.from(response.data).toString('base64');

		const newImage = await createFileHelper(req.user?.user_id || 'system', {
			file_type: 'image',
			mime_type,
			base64,
			public: true,
		});

		res.status(201).json(newImage.url || newImage.file_url || newImage.s3_url);
	} catch (error) {
		console.error('Failed to create image from URL:', error);
		res.status(500).json({ message: 'Error creating image', error });
	}
}

/**
 * POST /blog/images/file
 * @tag Blog
 * @summary Create blog image by file
 * @description Creates a new image file from an uploaded file.
 * @operationId createBlogImageByFile
 * @bodyDescription The image file to upload (multipart/form-data).
 * @bodyContent {object} multipart/form-data
 * @bodyRequired
 * @response 201 - Image created successfully
 * @responseContent {FileResponse | null} 201.application/json
 * @response 400 - Invalid image file
 * @response 500 - Error creating image
 * @prisma_model files
 */
export async function createBlogImageByFile(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		console.log('Received file upload request:', req.file);
		const { file } = req;
		if (!file) {
			res.status(400).json({ message: 'Base64 image data is required' });
			return;
		}
		const base64 = file.buffer.toString('base64');
		const mime_type = file.mimetype;
		console.log('File MIME type:', mime_type);
		const newImage = await createFileHelper(req.user?.user_id, {
			file_type: 'IMAGE',
			mime_type,
			base64,
			public: true,
		});
		const savedFile = await FileDao.getFile(newImage.file_id);
		res.status(201).json(savedFile);
	} catch (error: any) {
		res.status(500).json({ message: 'Error creating image', error: error.message });
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
	createBlogImageByUrl,
	createBlogImageByFile,
	getBlogCategories,
	getBlogTags,
};
