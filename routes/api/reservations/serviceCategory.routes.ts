import express from 'express';

import ServiceCategoryController from '../../../controllers/reservation/ServiceCategoryController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateServiceCategoryRequestSchema,
	UpdateServiceCategoryRequestSchema,
} from '../../../schemas/dto/reservations/service-category/service-category.dto.js';

const router = express.Router();
router.get('/', ServiceCategoryController.getServiceCategories);
router.post('/', validate(CreateServiceCategoryRequestSchema), ServiceCategoryController.createServiceCategory);
router.put(
	'/:service_category_id',
	validate(UpdateServiceCategoryRequestSchema),
	ServiceCategoryController.updateServiceCategory
);
router.delete('/:service_category_id', ServiceCategoryController.deleteServiceCategory);
router.get('/:service_category_id', ServiceCategoryController.getServiceCategoryById);

export default router;
