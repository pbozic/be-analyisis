import express from 'express';

import FoodDrinksController from '../../controllers/FoodDrinksController.ts';
import { validate } from '../../middleware/zod.ts';
import { FoodDrinksOnlineBodySchema, FoodDrinksOverwhelmedBodySchema } from '../../schemas/dto/FoodDrinks/index.js';

const router = express.Router();

router.patch(
	'/:food_drinks_id/online',
	validate(FoodDrinksOnlineBodySchema, 'body'),
	FoodDrinksController.setFoodDrinksOnline
);
router.patch(
	'/:food_drinks_id/overwhelmed',
	validate(FoodDrinksOverwhelmedBodySchema, 'body'),
	FoodDrinksController.setFoodDrinksOverwhelmed
);
router.post('/:food_drinks_id/disable', FoodDrinksController.disableFoodDrinks);
router.post('/:food_drinks_id/enable', FoodDrinksController.enableFoodDrinks);

export default router;
