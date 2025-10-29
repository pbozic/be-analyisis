import prisma from '../prisma/prisma.js';
/**
 * Set food_drinks online status.
 *
 * @param {string} food_drinks_id
 * @param {boolean} online
 * @returns {Promise<FoodDrinks>}
 */
export async function setFoodDrinksOnline(food_drinks_id: string, online: boolean) {
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
 * @returns {Promise<FoodDrinks>}
 */
export async function setFoodDrinksOverwhelmed(food_drinks_id: string, overwhelmed: boolean) {
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
 * @returns {Promise<FoodDrinks>}
 */
export async function disableFoodDrinks(food_drinks_id: string) {
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
 * @returns {Promise<FoodDrinks>}
 */
export async function enableFoodDrinks(food_drinks_id: string) {
	try {
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { enabled: true } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error enabling food_drinks:', message);
		throw new Error(message);
	}
}

export default { setFoodDrinksOnline, setFoodDrinksOverwhelmed, disableFoodDrinks, enableFoodDrinks };
