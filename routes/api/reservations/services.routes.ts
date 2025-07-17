import express from 'express';

import ServiceController from '../../../controllers/reservation/ServiceController';
import { validate } from '../../../middleware/zod';
import { CreateServiceSchema, UpdateServiceSchema } from '../../../types/reservation/Service';
const router = express.Router();
router.get('/', ServiceController.getServices);
router.post('/', validate(CreateServiceSchema), ServiceController.createService);
router.put('/:service_id', validate(UpdateServiceSchema), ServiceController.updateService);
router.delete('/:service_id', ServiceController.deleteService);
router.get('/:service_id', ServiceController.getServiceById);
router.post('/:service_id/connect-category/:service_category_id', ServiceController.connectServiceToCategory);
router.delete('/:service_id/disconnect-category', ServiceController.disconnectServiceFromCategory);
router.get('/category/:service_category_id', ServiceController.getServicesByCategoryId);

export default router;
