import express from 'express';

import ReservationController from '../../../controllers/ReservationController.js';
const router = express.Router();
router.get('', ReservationController.getReservations);
router.get('/:reservation_id', ReservationController.getReservationById);
router.get('/business/:business_id', ReservationController.getReservationsByBusinessId);
router.get('/active/:user_id', ReservationController.getActiveTableReservation);
router.post('/create', ReservationController.createReservation);
router.post('/table', ReservationController.addTableNumber);
router.patch('/status', ReservationController.updateReservationStatus);
router.delete('/:reservation_id', ReservationController.deleteReservation);
export default router;
