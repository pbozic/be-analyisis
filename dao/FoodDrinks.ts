import prisma from '../prisma/prisma.js';
import type { FoodDrinksDetail } from '../schemas/dto/FoodDrinks/food-drinks.dto';
import { toFoodDrinksDetail } from '../schemas/dto/FoodDrinks/food-drinks.dto';
import type { FoodDrinksWithIncludesPrisma } from '../prisma/includes/foodDrinks.js';
/**
 * Set food_drinks online status.
 *
 * @param {string} food_drinks_id
 * @param {boolean} online
 * @returns {Promise<FoodDrinksDetail>}
 */
export async function setFoodDrinksOnline(food_drinks_id: string, online: boolean): Promise<FoodDrinksDetail> {
	try {
		const row = await prisma.food_drinks.update({ where: { food_drinks_id }, data: { online } });
		try {
			return toFoodDrinksDetail(row as FoodDrinksWithIncludesPrisma);
		} catch (e: any) {
			console.error('Failed to map food_drinks to DTO:', e?.message ?? String(e));
			throw e;
		}
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting food_drinks online:', message);
		throw new Error(message);
	}
}
/**
 * Set food_drinks overwhelmed status.
 *
 * @param {string} food_drinks_id
 * @param {boolean} overwhelmed
 * @returns {Promise<FoodDrinksDetail>}
 */
export async function setFoodDrinksOverwhelmed(
	food_drinks_id: string,
	overwhelmed: boolean
): Promise<FoodDrinksDetail> {
	try {
		const row = await prisma.food_drinks.update({ where: { food_drinks_id }, data: { overwhelmed } });
		try {
			return toFoodDrinksDetail(row as FoodDrinksWithIncludesPrisma);
		} catch (e: any) {
			console.error('Failed to map food_drinks to DTO:', e?.message ?? String(e));
			throw e;
		}
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting food_drinks overwhelmed:', message);
		throw new Error(message);
	}
}
/**
 * Disable a food_drinks entry.
 *
 * @param {string} food_drinks_id
 * @returns {Promise<FoodDrinksDetail>}
 */
export async function disableFoodDrinks(food_drinks_id: string): Promise<FoodDrinksDetail> {
	try {
		const row = await prisma.food_drinks.update({
			where: { food_drinks_id },
			data: { enabled: false, online: false },
		});
		try {
			return toFoodDrinksDetail(row as FoodDrinksWithIncludesPrisma);
		} catch (e: any) {
			console.error('Failed to map food_drinks to DTO:', e?.message ?? String(e));
			throw e;
		}
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error disabling food_drinks:', message);
		throw new Error(message);
	}
}
/**
 * Enable a food_drinks entry.
 *
 * @param {string} food_drinks_id
 * @returns {Promise<FoodDrinksDetail>}
 */
export async function enableFoodDrinks(food_drinks_id: string): Promise<FoodDrinksDetail> {
	try {
		const row = await prisma.food_drinks.update({ where: { food_drinks_id }, data: { enabled: true } });
		try {
			return toFoodDrinksDetail(row as FoodDrinksWithIncludesPrisma);
		} catch (e: any) {
			console.error('Failed to map food_drinks to DTO:', e?.message ?? String(e));
			throw e;
		}
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error enabling food_drinks:', message);
		throw new Error(message);
	}
}

export default { setFoodDrinksOnline, setFoodDrinksOverwhelmed, disableFoodDrinks, enableFoodDrinks };
