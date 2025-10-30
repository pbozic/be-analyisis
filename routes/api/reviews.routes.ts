import { Router } from 'express';

import { reviewDriver, reviewStore, reviewFoodDrinks } from '../../controllers/ReviewsController.js';
import { validate } from '../../middleware/zod.ts';
import { ReviewPayloadSchema } from '../../types/reviews/ReviewRequests.ts';

const router = Router();

router.post('/driver/:driver_id', validate(ReviewPayloadSchema, 'body'), reviewDriver);
router.post('/stores/:stores_id', validate(ReviewPayloadSchema, 'body'), reviewStore);
router.post('/food-drinks/:food_drinks_id', validate(ReviewPayloadSchema, 'body'), reviewFoodDrinks);

export default router;
