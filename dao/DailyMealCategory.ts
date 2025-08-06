import type { daily_meal_categories, daily_meal_category_prices, Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';

export async function getDailyMealCategoryById(
	daily_meal_category_id: string,
	includeObj?: Prisma.daily_meal_categoriesInclude
): Promise<Prisma.daily_meal_categoriesGetPayload<{ include: Prisma.daily_meal_categoriesInclude }>> {
	return await prisma.daily_meal_categories.findUnique({
		where: { daily_meal_category_id },
		include: includeObj,
	});
}

export async function createDailyMealCategoryWithPrice({
	business_id,
	category_id,
	price,
	start_date,
}: {
	business_id: string;
	category_id: string;
	price: number;
	start_date: Date;
}) {
	const dmc = await prisma.daily_meal_categories.create({
		data: {
			business_id,
			category_id,
			start_date,
			daily_meal_category_prices: {
				create: {
					price,
					valid_from: start_date,
				},
			},
		},
		include: {
			category: true,
			daily_meal_category_prices: true,
		},
	});
	return dmc;
}

export async function getDailyMealCategoriesForBusiness(business_id: string, detailed: boolean = false) {
	return await prisma.daily_meal_categories.findMany({
		where: { business_id },
		include: {
			category: true,
			daily_meal_category_prices: {
				orderBy: { valid_from: 'desc' },
				take: detailed ? undefined : 1,
			},
		},
	});
}

export async function getActiveDailyMealCategoriesForBusiness(business_id: string) {
	return await prisma.daily_meal_categories.findMany({
		where: { business_id, active: true },
		include: {
			category: true,
			daily_meal_category_prices: {
				orderBy: { valid_from: 'desc' },
				take: 1,
			},
		},
	});
}

export async function addPriceToDailyMealCategory({
	daily_meal_category_id,
	price,
	valid_from,
}: {
	daily_meal_category_id: string;
	price: number;
	valid_from: Date;
}) {
	return prisma.daily_meal_category_prices.create({
		data: {
			daily_meal_category_id,
			price,
			valid_from,
		},
	});
}

export async function deactivateDailyMealCategory(daily_meal_category_id: string) {
	return prisma.daily_meal_categories.update({
		where: { daily_meal_category_id },
		data: { active: false },
	});
}

export async function activateDailyMealCategory(daily_meal_category_id: string) {
	return prisma.daily_meal_categories.update({
		where: { daily_meal_category_id },
		data: { active: true },
	});
}

/**
 * Returns the price for a given date for a daily_meal_category object with included daily_meal_category_prices.
 * The price is the one with the latest valid_from that is less than or equal to the given date.
 * Returns null if no valid price is found.
 *
 * @param dailyMealCategory - The daily_meal_category object (must include daily_meal_category_prices: { price: number, valid_from: Date }[])
 * @param date - The date to check the price for
 * @returns number | null
 */
export function getDailyMealCategoryPriceForDate(
	dailyMealCategory: daily_meal_categories & { daily_meal_category_prices: daily_meal_category_prices[] },
	date: Date
): daily_meal_category_prices | null {
	if (!dailyMealCategory?.daily_meal_category_prices?.length) return null;
	const validPrices = dailyMealCategory.daily_meal_category_prices
		.filter((p) => new Date(p.valid_from) <= date)
		.sort((a, b) => new Date(b.valid_from).getTime() - new Date(a.valid_from).getTime());
	return validPrices.length > 0 ? validPrices[0]! : null;
}

export default {
	getDailyMealCategoryPriceForDate,
	getDailyMealCategoryById,
	createDailyMealCategoryWithPrice,
	getActiveDailyMealCategoriesForBusiness,
	getDailyMealCategoriesForBusiness,
	addPriceToDailyMealCategory,
	deactivateDailyMealCategory,
	activateDailyMealCategory,
};
