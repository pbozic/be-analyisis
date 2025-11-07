import express from 'express';

import ReservationModuleController from '../../../controllers/reservation/ReservationModuleController';
import { validate } from '../../../middleware/zod.js';
import { UpdateReservationSettingsRequestSchema } from '../../../schemas/dto/reservations/reservation-module/reservation-module.dto.js';

const router = express.Router();

router.post(
	'/settings/update',
	validate(UpdateReservationSettingsRequestSchema),
	ReservationModuleController.updateReservationSettings
);
router.patch('/:reservation_module_id/enable', ReservationModuleController.enableReservations);
router.patch('/:reservation_module_id/disable', ReservationModuleController.disableReservations);

export default router;
