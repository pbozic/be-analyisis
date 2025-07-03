import express from 'express';
import multer from 'multer';

import BlogController from '../../controllers/BlogController.ts';
import { validate } from '../../middleware/zod.ts';
import { CreateBlogPostSchema, UpdateBlogPostSchema, SearchBlogPostsSchema } from '../../types/blog/BlogPost.ts';
import { CreateBlogCategorySchema, UpdateBlogCategorySchema } from '../../types/blog/BlogCategory.ts';
import { CreateBlogTagSchema, UpdateBlogTagSchema } from '../../types/blog/BlogTag.ts';
import authMiddleware from '../../middleware/auth.js';
const router = express.Router();

router.post('/upload/url', [authMiddleware], BlogController.createBlogImageByFile);

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
