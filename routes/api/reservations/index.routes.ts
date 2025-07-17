import express from 'express';

import customerRoutes from './customer.routes';
import employeeRoutes from './employee.routes';
import serviceRoutes from './services.routes';
import serviceCategoryRoutes from './serviceCategory.routes';
import locationRoutes from './location.routes';
import authRoutes from './auth.routes';
const router = express.Router();

router.use('/customers', customerRoutes);
router.use('/employees', employeeRoutes);
router.use('/services', serviceRoutes);
router.use('/service-categories', serviceCategoryRoutes);
router.use('/locations', locationRoutes);
router.use('/auth', authRoutes);

export default router;
