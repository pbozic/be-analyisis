import express from 'express';

import ServiceCategoryController from '../../../controllers/reservation/ServiceCategoryController';
import { validate } from '../../../middleware/zod';
import { CreateServiceCategorySchema, UpdateServiceCategorySchema } from '../../../types/reservation/ServiceCategory';

const router = express.Router();
router.get('/', ServiceCategoryController.getServiceCategories);
router.post('/', validate(CreateServiceCategorySchema), ServiceCategoryController.createServiceCategory);
router.put(
	'/:service_category_id',
	validate(UpdateServiceCategorySchema),
	ServiceCategoryController.updateServiceCategory
);
router.delete('/:service_category_id', ServiceCategoryController.deleteServiceCategory);
router.get('/:service_category_id', ServiceCategoryController.getServiceCategoryById);

export default router;
