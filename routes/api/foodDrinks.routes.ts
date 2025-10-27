import express from 'express';

import FoodDrinksController from '../../controllers/FoodDrinksController.ts';

const router = express.Router();

router.patch('/:food_drinks_id/online', FoodDrinksController.setFoodDrinksOnline);
router.patch('/:food_drinks_id/overwhelmed', FoodDrinksController.setFoodDrinksOverwhelmed);
router.post('/:food_drinks_id/disable', FoodDrinksController.disableFoodDrinks);
router.post('/:food_drinks_id/enable', FoodDrinksController.enableFoodDrinks);

export default router;
