import express from 'express';

import ReservationController from '../../../controllers/TableReservationController.js';
import { validate } from '../../../middleware/zod.ts';
import {
	CreateReservationSchema,
	AddTableNumberSchema,
	UpdateReservationStatusSchema,
} from '../../../schemas/dto/TableReservation/TableReservationRequest.dto.ts';

const router = express.Router();

router.get('', ReservationController.getReservations);
router.get('/:reservation_id', ReservationController.getReservationById);
router.get('/business/:business_id', ReservationController.getReservationsByBusinessId);
router.get('/active/:user_id', ReservationController.getActiveTableReservation);

// Body validation only
router.post('/create', validate(CreateReservationSchema), ReservationController.createReservation);
router.post('/table', validate(AddTableNumberSchema), ReservationController.addTableNumber);
router.patch('/status', validate(UpdateReservationStatusSchema), ReservationController.updateReservationStatus);

router.delete('/:reservation_id', ReservationController.deleteReservation);

export default router;
