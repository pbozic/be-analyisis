import express from 'express';
import multer from 'multer';

import BlogController from '../../controllers/BlogController';
import { validate } from '../../middleware/zod';
import { CreateBlogPostSchema, UpdateBlogPostSchema, SearchBlogPostsSchema } from '../../types/blog/BlogPost';
import { CreateBlogCategorySchema, UpdateBlogCategorySchema } from '../../types/blog/BlogCategory';
import { CreateBlogTagSchema, UpdateBlogTagSchema } from '../../types/blog/BlogTag';
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', BlogController.getBlogPosts);
router.get('/:id', BlogController.getBlogPostById);
router.get('/slug/:slug', BlogController.getBlogPostBySlug);
router.post('/', validate(CreateBlogPostSchema, 'body'), BlogController.createBlogPost);
router.put('/:id', validate(UpdateBlogPostSchema, 'body'), BlogController.updateBlogPost);
router.delete('/:id', BlogController.deleteBlogPost);
router.post('/search', validate(SearchBlogPostsSchema, 'body'), BlogController.searchBlogPosts);

router.get('/category', BlogController.getBlogCategories);
router.post('/category', validate(CreateBlogCategorySchema), BlogController.createBlogCategory);
router.delete('/category/:id', BlogController.deleteBlogCategory);
router.put('/category/:id', validate(UpdateBlogCategorySchema), BlogController.updateBlogCategory);

router.get('/tag', BlogController.getBlogTags);
router.post('/tag', validate(CreateBlogTagSchema), BlogController.createBlogTag);
router.delete('/tag/:id', BlogController.deleteBlogTag);
router.put('/tag/:id', validate(UpdateBlogTagSchema), BlogController.updateBlogTag);

router.post('/upload/file', upload.single('image'), BlogController.createBlogImageByFile);
router.post('/upload/url', BlogController.createBlogImageByFile);

export default router;
