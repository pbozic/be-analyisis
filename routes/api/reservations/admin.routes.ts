import express from 'express';

import ReservationModuleController from '../../../controllers/reservation/ReservationModuleController';

const router = express.Router();

router.post('/settings/update', ReservationModuleController.updateReservationSettings);

export default router;
