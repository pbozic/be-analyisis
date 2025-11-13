import { Response } from 'express';

import * as FoodDrinksDao from '../dao/FoodDrinks.ts';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import { FoodDrinksOnlineBody, FoodDrinksOverwhelmedBody } from '../schemas/dto/FoodDrinks/food-drinks.dto.ts';

/**
 * PATCH /food-drinks/{food_drinks_id}/online
 * @tag FoodDrinks
 * @summary Toggle a food_drinks online status
 * @description Sets a food_drinks online flag.
 * @operationId setFoodDrinksOnline
 * @bodyDescription Online state
 * @bodyContent {FoodDrinksOnlineBody} application/json
 * @bodyRequired
 * @response 200 - FoodDrinks updated
 * @responseContent {FoodDrinksBase} 200.application/json
 * @response 500 - Error updating food drinks
 * @prisma_model food_drinks
 */
export async function setFoodDrinksOnline(
	req: ValidatedRequest<FoodDrinksOnlineBody, { food_drinks_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { food_drinks_id } = req.params;
		const { online } = req.body;
		const updated = await FoodDrinksDao.setFoodDrinksOnline(food_drinks_id, !!online);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * PATCH /food-drinks/:food_drinks_id/overwhelmed
 * @tag FoodDrinks
 * @summary Toggle a food_drinks overwhelmed status
 * @description Sets a food_drinks overwhelmed flag.
 * @operationId setFoodDrinksOverwhelmed
 * @bodyDescription Overwhelmed state
 * @bodyContent {FoodDrinksOverwhelmedBody} application/json
 * @bodyRequired
 * @response 200 - FoodDrinks updated
 * @responseContent {FoodDrinksBase} 200.application/json
 * @response 500 - Error updating food drinks
 * @prisma_model food_drinks
 */
export async function setFoodDrinksOverwhelmed(
	req: ValidatedRequest<FoodDrinksOverwhelmedBody, { food_drinks_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { food_drinks_id } = req.params;
		const { overwhelmed } = req.body;
		const updated = await FoodDrinksDao.setFoodDrinksOverwhelmed(food_drinks_id, !!overwhelmed);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 * POST /food-drinks/:food_drinks_id/disable
 * @tag FoodDrinks
 * @summary Disable a food_drinks module
 * @description Sets a food_drinks enabled flag to false and online flag to false.
 * @operationId disableFoodDrinks
 * @prisma_model food_drinks
 * @response 200 - FoodDrinks disabled
 * @responseContent {FoodDrinksBase} 200.application/json
 * @response 500 - Error disabling food drinks
 * @prisma_model food_drinks
 */
export async function disableFoodDrinks(
	req: ValidatedRequest<never, { food_drinks_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { food_drinks_id } = req.params;
		const updated = await FoodDrinksDao.disableFoodDrinks(food_drinks_id);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
 * POST /food-drinks/:food_drinks_id/enable
 * @tag FoodDrinks
 * @summary Enable a food_drinks module
 * @description Sets a food_drinks enabled flag to true.
 * @operationId enableFoodDrinks
 * @prisma_model food_drinks
 * @response 200 - FoodDrinks enabled
 * @responseContent {FoodDrinksBase} 200.application/json
 * @response 500 - Error enabling food drinks
 * @prisma_model food_drinks
 */
export async function enableFoodDrinks(
	req: ValidatedRequest<never, { food_drinks_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { food_drinks_id } = req.params;
		const updated = await FoodDrinksDao.enableFoodDrinks(food_drinks_id);
		res.json(updated);
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { setFoodDrinksOnline, setFoodDrinksOverwhelmed, disableFoodDrinks, enableFoodDrinks };
