import { Router } from 'express';

import {
	reviewPassenger,
	reviewDriver,
	reviewStore,
	reviewFoodDrinks,
	reviewReservationModule,
	reviewTransportModule,
	reviewReservationBooking,
} from '../../controllers/ReviewsController.js';
import { validate } from '../../middleware/zod.ts';
import { ReviewPayloadSchema } from '../../types/reviews/ReviewRequests.ts';

const router = Router();
router.post('/passenger/:user_id', validate(ReviewPayloadSchema, 'body'), reviewPassenger);
router.post('/driver/:driver_id', validate(ReviewPayloadSchema, 'body'), reviewDriver);
router.post('/stores/:stores_id', validate(ReviewPayloadSchema, 'body'), reviewStore);
router.post('/food-drinks/:food_drinks_id', validate(ReviewPayloadSchema, 'body'), reviewFoodDrinks);
router.post(
	'/reservation-module/:reservation_module_id',
	validate(ReviewPayloadSchema, 'body'),
	reviewReservationModule
);
router.post('/transport-module/:transport_module_id', validate(ReviewPayloadSchema, 'body'), reviewTransportModule);
router.post('/reservation-booking/:booking_id', validate(ReviewPayloadSchema, 'body'), reviewReservationBooking);

export default router;
