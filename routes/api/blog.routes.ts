import express from 'express';

import BlogController from '../../controllers/BlogController.ts';
import { validate } from '../../middleware/zod.ts';
import {
	CreateBlogPostSchema,
	UpdateBlogPostSchema,
	SearchBlogPostsSchema,
} from '../../schemas/dto/Blog/blogpost.dto.ts';
import { CreateBlogCategorySchema, UpdateBlogCategorySchema } from '../../schemas/dto/Blog/blogcategory.dto.ts';
import { CreateBlogTagSchema, UpdateBlogTagSchema } from '../../schemas/dto/Blog/blogtag.dto.ts';
import authMiddleware from '../../middleware/auth.js';
const router = express.Router();

router.post(
	'/upload/url',
	[authMiddleware],
	validate(CreateBlogPostSchema.partial()),
	BlogController.createBlogImageByFile
);

router.get('/', BlogController.getBlogPosts);

router.get('/slug/:slug', BlogController.getBlogPostBySlug);
router.post('/', [authMiddleware], validate(CreateBlogPostSchema, 'body'), BlogController.createBlogPost);

router.post('/search', validate(SearchBlogPostsSchema, 'body'), BlogController.searchBlogPosts);

router.get('/category', BlogController.getBlogCategories);
router.post('/category', [authMiddleware], validate(CreateBlogCategorySchema), BlogController.createBlogCategory);
router.delete('/category/:id', [authMiddleware], BlogController.deleteBlogCategory);
router.put('/category/:id', [authMiddleware], validate(UpdateBlogCategorySchema), BlogController.updateBlogCategory);

router.get('/tag', BlogController.getBlogTags);
router.post('/tag', [authMiddleware], validate(CreateBlogTagSchema), BlogController.createBlogTag);
router.delete('/tag/:id', [authMiddleware], BlogController.deleteBlogTag);
router.put('/tag/:id', [authMiddleware], validate(UpdateBlogTagSchema), BlogController.updateBlogTag);

router.get('/:id', BlogController.getBlogPostById);
router.put('/:id', [authMiddleware], validate(UpdateBlogPostSchema, 'body'), BlogController.updateBlogPost);
router.delete('/:id', [authMiddleware], BlogController.deleteBlogPost);

export default router;
