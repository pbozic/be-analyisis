import type { daily_meal_categories, daily_meal_category_prices, Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { UUID } from '../schemas/primitives.js';
import type { DailyMealCategoryWithPricesPrisma } from '../prisma/includes/dailyMealCategory.js';
import { toDailyMealCategoryResponse, toDailyMealCategoryList } from '../schemas/dto/DailyMealCategory/dailyMealCategory.mappers.js';
/**
 * Get daily meal category by id.
 *
 * @param {UUID} daily_meal_category_id
 * @param {Prisma.daily_meal_categoriesInclude} [includeObj]
 * @returns {Promise<Prisma.daily_meal_categoriesGetPayload<{ include: Prisma.daily_meal_categoriesInclude }>>}
 */
export async function getDailyMealCategoryById(
	daily_meal_category_id: UUID,
	includeObj?: Prisma.daily_meal_categoriesInclude
): Promise<Prisma.daily_meal_categoriesGetPayload<{ include: Prisma.daily_meal_categoriesInclude }>> {
	const row = await prisma.daily_meal_categories.findUnique({
		where: { daily_meal_category_id },
		include: includeObj,
	});
	if (!row) return row as any;
	try {
		return toDailyMealCategoryResponse(row as DailyMealCategoryWithPricesPrisma) as any;
	} catch (e) {
		// If parsing fails, return raw row to avoid changing runtime behaviour
		return row as any;
	}
}
/**
 * Create daily meal category with initial price.
 *
 * @param {UUID} daily_meals_module_id
 * @param {UUID} category_id
 * @param {number} price
 * @param {Date} start_date
 * @returns {Promise<Prisma.daily_meal_categoriesGetPayload>}
 */
export async function createDailyMealCategoryWithPrice({
	daily_meals_module_id,
	category_id,
	price,
	start_date,
}: {
	daily_meals_module_id: UUID;
	category_id: UUID;
	price: number;
	start_date: Date;
}) {
	const dmc = await prisma.daily_meal_categories.create({
		data: {
			daily_meals_module_id,
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

	try {
		return toDailyMealCategoryResponse(dmc as DailyMealCategoryWithPricesPrisma) as any;
	} catch (e) {
		return dmc as any;
	}
}
/**
 * Get daily meal categories for a daily_meals_module.
 *
 * @param {UUID} daily_meals_module_id
 * @param {boolean} detailed
 * @returns {Promise<Prisma.daily_meal_categoriesGetPayload[]>}
 */
export async function getDailyMealCategoriesByModuleId(daily_meals_module_id: UUID, detailed: boolean = false) {
	const rows = await prisma.daily_meal_categories.findMany({
		where: { daily_meals_module_id },
		include: {
			category: true,
			daily_meal_category_prices: {
				orderBy: { valid_from: 'desc' },
				take: detailed ? undefined : 1,
			},
		},
	});

	try {
		return toDailyMealCategoryList(rows as DailyMealCategoryWithPricesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}
/**
 * Get active daily meal categories for a daily_meals_module.
 *
 * @param {UUID} daily_meals_module_id
 * @returns {Promise<Prisma.daily_meal_categoriesGetPayload[]>}
 */
export async function getActiveDailyMealCategoriesByModuleId(daily_meals_module_id: UUID) {
	const rows = await prisma.daily_meal_categories.findMany({
		where: { daily_meals_module_id, active: true },
		include: {
			category: true,
			daily_meal_category_prices: {
				orderBy: { valid_from: 'desc' },
				take: 1,
			},
		},
	});

	try {
		return toDailyMealCategoryList(rows as DailyMealCategoryWithPricesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}
/**
 * Add price to daily meal category.
 * @param {UUID} daily_meal_category_id
 * @param {number} price
 * @param {Date} valid_from
 * @returns {Promise<Prisma.daily_meal_category_pricesGetPayload>}
 */
export async function addPriceToDailyMealCategory({
	daily_meal_category_id,
	price,
	valid_from,
}: {
	daily_meal_category_id: UUID;
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
/**
 * Deactivate daily meal category.
 *
 * @param {UUID} daily_meal_category_id
 * @returns {Promise<Prisma.daily_meal_categoriesGetPayload>}
 */
export async function deactivateDailyMealCategory(daily_meal_category_id: UUID) {
	const row = await prisma.daily_meal_categories.update({
		where: { daily_meal_category_id },
		data: { active: false },
	});

	try {
		return toDailyMealCategoryResponse(row as DailyMealCategoryWithPricesPrisma) as any;
	} catch (e) {
		return row as any;
	}
}
/**
 * Activate daily meal category.
 *
 * @param {UUID} daily_meal_category_id
 * @returns {Promise<Prisma.daily_meal_categoriesGetPayload>}
 */
export async function activateDailyMealCategory(daily_meal_category_id: UUID) {
	const row = await prisma.daily_meal_categories.update({
		where: { daily_meal_category_id },
		data: { active: true },
	});

	try {
		return toDailyMealCategoryResponse(row as DailyMealCategoryWithPricesPrisma) as any;
	} catch (e) {
		return row as any;
	}
}

/**
 * Returns the price for a given date for a daily_meal_category object with included daily_meal_category_prices.
 * The price is the one with the latest valid_from that is less than or equal to the given date.
 * Returns null if no valid price is found.
 *
 * @param {daily_meal_categories} dailyMealCategory - The daily_meal_category object (must include daily_meal_category_prices: { price: number, valid_from: Date }[])
 * @param {Date} date - The date to check the price for
 * @returns {number | null}
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
	getActiveDailyMealCategoriesForBusiness: getActiveDailyMealCategoriesByModuleId,
	getDailyMealCategoriesForBusiness: getDailyMealCategoriesByModuleId,
	addPriceToDailyMealCategory,
	deactivateDailyMealCategory,
	activateDailyMealCategory,
};
