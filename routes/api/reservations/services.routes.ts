import express from 'express';

import ServiceController from '../../../controllers/reservation/ServiceController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateServiceRequestSchema,
	UpdateServiceRequestSchema,
	CreateServiceWithEmployeesSchema,
	UpdateServiceWithEmployeesSchema,
} from '../../../schemas/dto/reservations/service/service.dto.js';
const router = express.Router();
router.get('/', ServiceController.getServices);
router.get('/form-data', ServiceController.getDataForServiceForm);
router.post('/', validate(CreateServiceRequestSchema), ServiceController.createService);
router.post(
	'/service-with-employees',
	validate(CreateServiceWithEmployeesSchema),
	ServiceController.createServiceWithData
);
router.put(
	'/service-with-employees/:service_id',
	validate(UpdateServiceWithEmployeesSchema),
	ServiceController.updateServiceWithData
);
router.put('/:service_id', validate(UpdateServiceRequestSchema), ServiceController.updateService);
router.delete('/:service_id', ServiceController.deleteService);
router.get('/:service_id', ServiceController.getServiceById);
router.post('/:service_id/connect-category/:service_category_id', ServiceController.connectServiceToCategory);
router.delete('/:service_id/disconnect-category', ServiceController.disconnectServiceFromCategory);
router.get('/category/:service_category_id', ServiceController.getServicesByCategoryId);

export default router;
