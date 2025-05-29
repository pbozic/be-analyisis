import express from 'express';

import BlogController from '../../controllers/BlogController';
import { validate } from '../../middleware/zod';
import { CreateBlogPostSchema } from '../../types/blog/BlogPost';
import { route } from './ads';
const router = express.Router();

router.get('/', BlogController.getBlogPosts);
router.get('/:id', (req, res) => {});
router.get('/slug/:slug', BlogController.getBlogPostBySlug);
router.post('/', validate(CreateBlogPostSchema, 'body'), BlogController.createBlogPost);
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});
router.post('/search', (req, res) => {});

router.get('/category', (req, res) => {});
router.post('/category', BlogController.createBlogCategory);
router.delete('/category/:id', (req, res) => {});
router.put('/category/:id', (req, res) => {});

router.get('/tag', (req, res) => {});
router.post('/tag', BlogController.createBlogTag);
router.delete('/tag/:id', (req, res) => {});
router.put('/tag/:id', (req, res) => {});
