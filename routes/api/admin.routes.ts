import express from 'express';

import AdminUserRoutes from './admin/users.routes.js';
import AdminBusinessRoutes from './admin/business.routes.js';
const router = express.Router();
router.use('/users', AdminUserRoutes);
router.use('/business', AdminBusinessRoutes);
export default router;
