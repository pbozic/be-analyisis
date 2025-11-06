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
import { ReviewBodySchema } from '../../schemas/dto/Reviews/review.dto.ts';

const router = Router();
router.post('/passenger/:user_id', validate(ReviewBodySchema, 'body'), reviewPassenger);
router.post('/driver/:driver_id', validate(ReviewBodySchema, 'body'), reviewDriver);
router.post('/stores/:stores_id', validate(ReviewBodySchema, 'body'), reviewStore);
router.post('/food-drinks/:food_drinks_id', validate(ReviewBodySchema, 'body'), reviewFoodDrinks);
router.post('/reservation-module/:reservation_module_id', validate(ReviewBodySchema, 'body'), reviewReservationModule);
router.post('/transport-module/:transport_module_id', validate(ReviewBodySchema, 'body'), reviewTransportModule);
router.post('/reservation-booking/:booking_id', validate(ReviewBodySchema, 'body'), reviewReservationBooking);

export default router;
