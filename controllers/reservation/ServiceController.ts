import { Request, Response } from 'express';

import ServiceDao from '../../dao/reservation/Service.ts';

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
export async function getServices(req: Request, res: Response): Promise<void> {
	try {
		let businessId = req.body.businessId as string;
		let services = await ServiceDao.getServicesByBusinessId(businessId);
		res.status(200).json(services);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving services', error });
	}
}
