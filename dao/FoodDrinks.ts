import prisma from '../prisma/prisma.js';

export async function setFoodDrinksOnline(food_drinks_id: string, online: boolean) {
	try {
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { online } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting food_drinks online:', message);
		throw new Error(message);
	}
}

export async function setFoodDrinksOverwhelmed(food_drinks_id: string, overwhelmed: boolean) {
	try {
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { overwhelmed } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting food_drinks overwhelmed:', message);
		throw new Error(message);
	}
}

export async function disableFoodDrinks(food_drinks_id: string) {
	try {
		return await prisma.food_drinks.update({ where: { food_drinks_id }, data: { enabled: false, online: false } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error disabling food_drinks:', message);
		throw new Error(message);
	}
}
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
