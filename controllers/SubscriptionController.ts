import { Request, Response } from 'express';
import axios from 'axios';

import { ValidatedRequest } from '../types/validatedRequest.ts';
import type { CreateBlogPostInput, UpdateBlogPostInput, SearchBlogPostsInput } from '../types/blog/BlogPost.ts';
import { CreateBlogCategoryInput, UpdateBlogCategoryInput } from '../types/blog/BlogCategory.ts';
import { CreateBlogTagInput, DeleteBlogTagInput, UpdateBlogTagInput } from '../types/blog/BlogTag.ts';
