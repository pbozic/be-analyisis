import express from 'express';

import customerRoutes from './customer.routes';
import employeeRoutes from './employee.routes';
import serviceRoutes from './services.routes';
import serviceCategoryRoutes from './serviceCategory.routes';
import locationRoutes from './location.routes';
import authRoutes from './auth.routes';
import authMiddleware from '../../../middleware/auth';
const router = express.Router();

router.use('/customers', [authMiddleware], customerRoutes);
router.use('/employees', [authMiddleware], employeeRoutes);
router.use('/services', [authMiddleware], serviceRoutes);
router.use('/service-categories', [authMiddleware], serviceCategoryRoutes);
router.use('/locations', [authMiddleware], locationRoutes);
router.use('/auth', authRoutes);

export default router;
