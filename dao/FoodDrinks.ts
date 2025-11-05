import prisma from '../prisma/prisma.js';
import { FoodDrinksDetail } from '../schemas/dto/FoodDrinks/food-drinks.dto';
/**
 * Set food_drinks online status.
 *
 * @param {string} food_drinks_id
 * @param {boolean} online
 * @returns {Promise<FoodDrinksDetail>}
 */
export async function setFoodDrinksOnline(food_drinks_id: string, online: boolean): Promise<FoodDrinksDetail> {
	try {
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { online } });
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
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { overwhelmed } });
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
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { enabled: false, online: false } });
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
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { enabled: true } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error enabling food_drinks:', message);
		throw new Error(message);
	}
}

export default { setFoodDrinksOnline, setFoodDrinksOverwhelmed, disableFoodDrinks, enableFoodDrinks };
