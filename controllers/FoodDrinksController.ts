import { Request, Response } from 'express';

import * as FoodDrinksDao from '../dao/FoodDrinks.ts';

/**
 *
 * - PATCH /food-drinks/{food_drinks_id}/online
 * - @tag FoodDrinks
 * - @summary Toggle a food_drinks online status
 * - @description Sets food_drinks.online flag.
 * - @operationId setFoodDrinksOnline
 * - @bodyDescription Online state
 * - @bodyContent { "online": true } application/json
 * - @bodyRequired
 * - @prisma_model food_drinks
 * - @response 200 - FoodDrinks updated
 */
export async function setFoodDrinksOnline(req: Request, res: Response): Promise<void> {
	try {
		const { food_drinks_id } = req.params as { food_drinks_id: string };
		const { online } = req.body as { online: boolean };
		const updated = await FoodDrinksDao.setFoodDrinksOnline(food_drinks_id, !!online);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - PATCH /food-drinks/{food_drinks_id}/overwhelmed
 * - @tag FoodDrinks
 * - @summary Toggle a food_drinks overwhelmed status
 * - @description Sets food_drinks.overwhelmed flag.
 * - @operationId setFoodDrinksOverwhelmed
 * - @bodyDescription Overwhelmed state
 * - @bodyContent { "overwhelmed": true } application/json
 * - @bodyRequired
 * - @prisma_model food_drinks
 * - @response 200 - FoodDrinks updated
 */
export async function setFoodDrinksOverwhelmed(req: Request, res: Response): Promise<void> {
	try {
		const { food_drinks_id } = req.params as { food_drinks_id: string };
		const { overwhelmed } = req.body as { overwhelmed: boolean };
		const updated = await FoodDrinksDao.setFoodDrinksOverwhelmed(food_drinks_id, !!overwhelmed);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

/**
 *
 * - POST /food-drinks/{food_drinks_id}/disable
 * - @tag FoodDrinks
 * - @summary Disable a food_drinks module
 * - @description Sets food_drinks.enabled=false and food_drinks.online=false.
 * - @operationId disableFoodDrinks
 * - @prisma_model food_drinks
 * - @response 200 - FoodDrinks disabled
 */
export async function disableFoodDrinks(req: Request, res: Response): Promise<void> {
	try {
		const { food_drinks_id } = req.params as { food_drinks_id: string };
		const updated = await FoodDrinksDao.disableFoodDrinks(food_drinks_id);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}
/**
 *
 * - POST /food-drinks/{food_drinks_id}/enable
 * - @tag FoodDrinks
 * - @summary Enable a food_drinks module
 * - @description Sets food_drinks.enabled=true.
 * - @operationId enableFoodDrinks
 * - @prisma_model food_drinks
 * - @response 200 - FoodDrinks enabled
 */
export async function enableFoodDrinks(req: Request, res: Response): Promise<void> {
	try {
		const { food_drinks_id } = req.params as { food_drinks_id: string };
		const updated = await FoodDrinksDao.enableFoodDrinks(food_drinks_id);
		res.json(updated);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (e: any) {
		res.status(500).json({ error: e.message });
	}
}

export default { setFoodDrinksOnline, setFoodDrinksOverwhelmed, disableFoodDrinks, enableFoodDrinks };
