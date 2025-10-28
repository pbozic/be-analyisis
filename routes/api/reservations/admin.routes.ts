import express from 'express';

import ReservationModuleController from '../../../controllers/reservation/ReservationModuleController';

const router = express.Router();

router.post('/settings/update', ReservationModuleController.updateReservationSettings);
router.patch('/:reservation_module_id/enable', ReservationModuleController.enableReservations);
router.patch('/:reservation_module_id/disable', ReservationModuleController.disableReservations);

export default router;
