import * as express from 'express';

import joi from '../../middleware/joi.js';
import AdminUserRoutes from './admin/users.js';
import AdminBusinessRoutes from './admin/business.js';
const router = express.Router();
router.use('/users', AdminUserRoutes);
router.use('/business', AdminBusinessRoutes);
export default router;
