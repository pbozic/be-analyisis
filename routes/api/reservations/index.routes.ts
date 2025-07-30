import express from 'express';

import customerRoutes from './customer.routes';
import employeeRoutes from './employee.routes';
import serviceRoutes from './services.routes';
import serviceCategoryRoutes from './serviceCategory.routes';
import locationRoutes from './location.routes';
import scheduleRoutes from './schedule.routes';
import scheduleEmployeeRoutes from './scheduleEmployee.routes';
import scheduleSlotRoutes from './scheduleSlot.routes';
import scheduleSlotExceptionRoutes from './scheduleSlotException.routes';
import authRoutes from './auth.routes';
import authMiddleware from '../../../middleware/auth';
const router = express.Router();

router.use('/customers', [authMiddleware], customerRoutes);
router.use('/employees', [authMiddleware], employeeRoutes);
router.use('/services', [authMiddleware], serviceRoutes);
router.use('/schedules', [authMiddleware], scheduleRoutes);
router.use('/schedule-employees', [authMiddleware], scheduleEmployeeRoutes);
router.use('/schedule-slots', [authMiddleware], scheduleSlotRoutes);
router.use('/schedule-slot-exceptions', [authMiddleware], scheduleSlotExceptionRoutes);
router.use('/service-categories', [authMiddleware], serviceCategoryRoutes);
router.use('/locations', [authMiddleware], locationRoutes);
router.use('/auth', authRoutes);

export default router;
