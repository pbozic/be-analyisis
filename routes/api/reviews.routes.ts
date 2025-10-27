import { Router } from 'express';

import { reviewDriver, reviewStore, reviewFoodDrinks } from '../../controllers/ReviewsController.js';

const router = Router();

router.post('/driver/:driver_id', reviewDriver);
router.post('/stores/:stores_id', reviewStore);
router.post('/food-drinks/:food_drinks_id', reviewFoodDrinks);

export default router;
