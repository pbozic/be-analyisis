import { Request, Response } from 'express';
import axios from 'axios';

import { ValidatedRequest } from '../types/validatedRequest';
import type { CreateBlogPostInput, UpdateBlogPostInput, SearchBlogPostsInput } from '../types/blog/BlogPost';
import { CreateBlogCategoryInput, UpdateBlogCategoryInput } from '../types/blog/BlogCategory';
import { CreateBlogTagInput, DeleteBlogTagInput, UpdateBlogTagInput } from '../types/blog/BlogTag';
import { createFileHelper } from './FilesController';
import BlogDao from '../dao/Blog';

/**
 * POST /blog/search
 * @tag Blog
 * @summary Search blog posts
 * @description Retrieves a list of blog posts based on search criteria.
 * @operationId searchBlogPosts
 * @bodyDescription Search criteria for blog posts.
 * @bodyContent {
    "page": 1,
    "limit": 10,
    "query": "string",
    "tag_ids": ["uuid"],
    "category_ids": ["uuid"],
    "year": 2024,
    "month": 5
  } application/json
 * @bodyRequired
 * @response 200 - Blog posts retrieved successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog posts retrieved successfully",
    "data": [
      {
        "blog_posts_id": "uuid",
        "slug": "string",
        "title": "string",
        "short_content": "string",
        "image_file_id": "uuid",
        "content": {},
        "author_id": "uuid",
        "category_id": "uuid",
        "publish_at": "2024-05-29T00:00:00.000Z",
        "category": {
          "blog_categories_id": "uuid",
          "name": "string",
          "description": "string"
        },
        "image_file": {
          "file_id": "uuid",
          "url": "string",
          "file_type": "IMAGE",
          "mime_type": "string",
          "public": true
        },
        "tags": [
          {
            "blog_tags_id": "uuid",
            "name": "string",
            "description": "string"
          }
        ]
      }
    ]
  }
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
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog post retrieved successfully",
    "data": {
      "blog_posts_id": "uuid",
      "slug": "string",
      "title": "string",
      "short_content": "string",
      "image_file_id": "uuid",
      "content": {},
      "author_id": "uuid",
      "category_id": "uuid",
      "publish_at": "2024-05-29T00:00:00.000Z",
      "category": {
        "blog_categories_id": "uuid",
        "name": "string",
        "description": "string"
      },
      "image_file": {
        "file_id": "uuid",
        "url": "string",
        "file_type": "IMAGE",
        "mime_type": "string",
        "public": true
      },
      "tags": [
        {
          "blog_tags_id": "uuid",
          "name": "string",
          "description": "string"
        }
      ]
    }
  }
 * @response 404 - Blog post not found
 * @response 500 - Error retrieving blog post
 * @prisma_model blog_posts
 */
export async function getBlogPostById(req: Request, res: Response): Promise<void> {
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
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog post retrieved successfully",
    "data": {
      "blog_posts_id": "uuid",
      "slug": "string",
      "title": "string",
      "short_content": "string",
      "image_file_id": "uuid",
      "content": {},
      "author_id": "uuid",
      "category_id": "uuid",
      "publish_at": "2024-05-29T00:00:00.000Z",
      "category": {
        "blog_categories_id": "uuid",
        "name": "string",
        "description": "string"
      },
      "image_file": {
        "file_id": "uuid",
        "url": "string",
        "file_type": "IMAGE",
        "mime_type": "string",
        "public": true
      },
      "tags": [
        {
          "blog_tags_id": "uuid",
          "name": "string",
          "description": "string"
        }
      ]
    }
  }
 * @response 404 - Blog post not found
 * @response 500 - Error retrieving blog post
 * @prisma_model blog_posts
 */
export async function getBlogPostBySlug(req: Request, res: Response): Promise<void> {
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
 * @bodyContent {
    "slug": "string",
    "title": "string",
    "short_content": "string",
    "image_file_id": "uuid",
    "content": {},
    "author_id": "uuid",
    "category_id": "uuid",
    "publish_at": "2024-05-29T00:00:00.000Z"
  } application/json
 * @bodyRequired
 * @response 201 - Blog post created successfully
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
    "message": "Blog post created successfully",
    "data": {
      "blog_posts_id": "uuid",
      "slug": "string",
      "title": "string",
      "short_content": "string",
      "image_file_id": "uuid",
      "content": {},
      "author_id": "uuid",
      "category_id": "uuid",
      "publish_at": "2024-05-29T00:00:00.000Z"
    }
  }
 * @response 500 - Error creating blog post
 * @prisma_model blog_posts
 */
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

/**
 * PATCH /blog/:id
 * @tag Blog
 * @summary Update a blog post
 * @description Updates an existing blog post by ID.
 * @operationId updateBlogPost
 * @bodyDescription The details of the blog post to update.
 * @bodyContent {
    "title": "string",
    "short_content": "string",
    "content": {},
    "category_id": "uuid",
    "image_file_id": "uuid",
    "publish_at": "2024-05-29T00:00:00.000Z"
  } application/json
 * @bodyRequired
 * @response 200 - Blog post updated successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog post updated successfully",
    "data": {
      "blog_posts_id": "uuid",
      "slug": "string",
      "title": "string",
      "short_content": "string",
      "image_file_id": "uuid",
      "content": {},
      "author_id": "uuid",
      "category_id": "uuid",
      "publish_at": "2024-05-29T00:00:00.000Z"
    }
  }
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
		const { title, short_content, content, category_id, image_file_id, publish_at } = req.body;
		const updatedBlogPost = await BlogDao.updateBlogPost(blog_posts_id, {
			title,
			short_content,
			content,
			category_id,
			image_file_id,
			publish_at,
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
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog post deleted successfully",
    "data": {
      "blog_posts_id": "uuid",
      "slug": "string",
      "title": "string",
      "short_content": "string",
      "image_file_id": "uuid",
      "content": {},
      "author_id": "uuid",
      "category_id": "uuid",
      "publish_at": "2024-05-29T00:00:00.000Z"
    }
  }
 * @response 404 - Blog post not found
 * @response 500 - Error deleting blog post
 * @prisma_model blog_posts
 */
export async function deleteBlogPost(req: Request, res: Response): Promise<void> {
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
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog posts retrieved successfully",
    "data": [
      {
        "blog_posts_id": "uuid",
        "slug": "string",
        "title": "string",
        "short_content": "string",
        "image_file_id": "uuid",
        "content": {},
        "author_id": "uuid",
        "category_id": "uuid",
        "publish_at": "2024-05-29T00:00:00.000Z"
      }
    ]
  }
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
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog categories retrieved successfully",
    "data": [
      {
        "blog_categories_id": "uuid",
        "name": "string",
        "description": "string"
      }
    ]
  }
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
 * @bodyContent {
    "name": "string",
    "description": "string"
  } application/json
 * @bodyRequired
 * @response 201 - Blog category created successfully
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
    "message": "Blog category created successfully",
    "data": {
      "blog_categories_id": "uuid",
      "name": "string",
      "description": "string"
    }
  }
 * @response 500 - Error creating blog category
 * @prisma_model blog_categories
 */
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

/**
 * DELETE /blog/categories/:id
 * @tag Blog
 * @summary Delete a blog category
 * @description Deletes a blog category by its unique ID.
 * @operationId deleteBlogCategory
 * @response 200 - Blog category deleted successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog category deleted successfully",
    "data": {
      "blog_categories_id": "uuid",
      "name": "string",
      "description": "string"
    }
  }
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
 * @bodyContent {
    "name": "string",
    "description": "string"
  } application/json
 * @bodyRequired
 * @response 200 - Blog category updated successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog category updated successfully",
    "data": {
      "blog_categories_id": "uuid",
      "name": "string",
      "description": "string"
    }
  }
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
 * GET /blog/tags
 * @tag Blog
 * @summary Get all blog tags
 * @description Retrieves all blog tags.
 * @operationId getBlogTags
 * @response 200 - Blog tags retrieved successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog tags retrieved successfully",
    "data": [
      {
        "blog_tags_id": "uuid",
        "name": "string",
        "description": "string"
      }
    ]
  }
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
 * POST /blog/tags
 * @tag Blog
 * @summary Create a new blog tag
 * @description Creates a new blog tag.
 * @operationId createBlogTag
 * @bodyDescription The details of the blog tag to create.
 * @bodyContent {
    "name": "string",
    "description": "string"
  } application/json
 * @bodyRequired
 * @response 201 - Blog tag created successfully
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
    "message": "Blog tag created successfully",
    "data": {
      "blog_tags_id": "uuid",
      "name": "string",
      "description": "string"
    }
  }
 * @response 400 - Error creating blog tag
 * @response 500 - Error creating blog tag
 * @prisma_model blog_tags
 */
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

/**
 * DELETE /blog/tags/:id
 * @tag Blog
 * @summary Delete a blog tag
 * @description Deletes a blog tag by its unique ID.
 * @operationId deleteBlogTag
 * @response 200 - Blog tag deleted successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog tag deleted successfully",
    "data": {
      "blog_tags_id": "uuid",
      "name": "string",
      "description": "string"
    }
  }
 * @response 404 - Blog tag not found
 * @response 500 - Error deleting blog tag
 * @prisma_model blog_tags
 */
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
 * PATCH /blog/tags/:id
 * @tag Blog
 * @summary Update a blog tag
 * @description Updates an existing blog tag by ID.
 * @operationId updateBlogTag
 * @bodyDescription The details of the blog tag to update.
 * @bodyContent {
    "name": "string",
    "description": "string"
  } application/json
 * @bodyRequired
 * @response 200 - Blog tag updated successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
    "message": "Blog tag updated successfully",
    "data": {
      "blog_tags_id": "uuid",
      "name": "string",
      "description": "string"
    }
  }
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
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
    "message": "Image created successfully",
    "file": {
      "url": "https://example.com/image.jpg"
    }
  }
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

		res.status(201).json({
			message: 'Image created successfully',
			file: {
				url: newImage.url || newImage.file_url || newImage.s3_url,
			},
		});
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
 * @bodyContent {file: "image file"} multipart/form-data
 * @bodyRequired
 * @response 201 - Image created successfully
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
    "message": "Image created successfully",
    "data": {
      "file_id": "uuid",
      "url": "string",
      "file_type": "IMAGE",
      "mime_type": "string",
      "public": true
    }
  }
 * @response 400 - Invalid image file
 * @response 500 - Error creating image
 * @prisma_model files
 */
export async function createBlogImageByFile(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const { file } = req;
		if (!file) {
			res.status(400).json({ message: 'Base64 image data is required' });
			return;
		}
		const base64 = file.buffer.toString('base64');
		const mime_type = file.mimetype;
		const newImage = await createFileHelper(req.user?.user_id, {
			file_type: 'image',
			mime_type,
			base64,
			public: true,
		});
		res.status(201).json({
			message: 'Image created successfully',
			data: newImage,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error creating image', error });
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
