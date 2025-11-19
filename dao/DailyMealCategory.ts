import type { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { UUID } from '../schemas/primitives.js';
import type { DailyMealCategoryWithPricesPrisma } from '../prisma/includes/dailyMealCategory.js';
import {
	toDailyMealCategoryResponse,
	toDailyMealCategoryList,
	toDailyMealCategoryPriceBase,
	toDailyMealCategoryDetail,
} from '../schemas/dto/DailyMealCategory/dailyMealCategory.mappers.js';
import {
	DailyMealCategoryBase,
	DailyMealCategoryDetail,
	DailyMealCategoryPriceBase,
} from '../schemas/dto/DailyMealCategory/dailyMealCategory.js';
/**
 * Get daily meal category by id.
 *
 * @param {UUID} daily_meal_category_id
 * @param {Prisma.daily_meal_categoriesInclude} [includeObj]
 * @returns {Promise<DailyMealCategoryDetail>}
 */
export async function getDailyMealCategoryById(
	daily_meal_category_id: UUID,
	includeObj?: Prisma.daily_meal_categoriesInclude
): Promise<DailyMealCategoryDetail> {
	try {
		const row = await prisma.daily_meal_categories.findUnique({
			where: { daily_meal_category_id },
			include: includeObj,
		});
		if (!row) throw new Error('Daily meal category not found');
		return toDailyMealCategoryDetail(row as DailyMealCategoryWithPricesPrisma);
	} catch (e) {
		// If parsing fails, return raw row to avoid changing runtime behaviour
		throw new Error('Error fetching daily meal category by id');
	}
}
/**
 * Create daily meal category with initial price.
 *
 * @param {UUID} daily_meals_module_id
 * @param {UUID} category_id
 * @param {number} price
 * @param {Date} start_date
 * @returns {Promise<DailyMealCategoryBase>}
 */
export async function createDailyMealCategoryWithPrice(
	daily_meals_module_id: string,
	category_id: string,
	price: number,
	start_date: Date
): Promise<DailyMealCategoryBase> {
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
		return toDailyMealCategoryResponse(dmc as DailyMealCategoryWithPricesPrisma);
	} catch (e) {
		throw new Error('Error parsing created daily meal category');
	}
}
/**
 * Get daily meal categories for a daily_meals_module.
 *
 * @param {UUID} daily_meals_module_id
 * @param {boolean} detailed
 * @returns {Promise<DailyMealCategoryDetail[]>}
 */
export async function getDailyMealCategoriesByModuleId(
	daily_meals_module_id: UUID,
	detailed: boolean = false
): Promise<DailyMealCategoryDetail[]> {
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
		throw new Error('Error parsing daily meal categories list');
	}
}
/**
 * Get active daily meal categories for a daily_meals_module.
 *
 * @param {UUID} daily_meals_module_id
 * @returns {Promise<DailyMealCategoryBase[]>}
 */
export async function getActiveDailyMealCategoriesByModuleId(
	daily_meals_module_id: UUID
): Promise<DailyMealCategoryBase[]> {
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
		throw new Error('Error parsing active daily meal categories list');
	}
}
/**
 * Add price to daily meal category.
 * @param {UUID} daily_meal_category_id
 * @param {number} price
 * @param {Date} valid_from
 * @returns {Promise<DailyMealCategoryPriceBase>}
 */
export async function addPriceToDailyMealCategory(
	daily_meal_category_id: UUID,
	price: number,
	valid_from: Date
): Promise<DailyMealCategoryPriceBase> {
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
 * @returns {Promise<DailyMealCategoryBase>}
 */
export async function deactivateDailyMealCategory(daily_meal_category_id: UUID): Promise<DailyMealCategoryBase> {
	const row = await prisma.daily_meal_categories.update({
		where: { daily_meal_category_id },
		data: { active: false },
	});

	try {
		return toDailyMealCategoryResponse(row as DailyMealCategoryWithPricesPrisma);
	} catch (e) {
		throw new Error('Error parsing deactivated daily meal category');
	}
}
/**
 * Activate daily meal category.
 *
 * @param {UUID} daily_meal_category_id
 * @returns {Promise<DailyMealCategoryBase>}
 */
export async function activateDailyMealCategory(daily_meal_category_id: UUID): Promise<DailyMealCategoryBase> {
	const row = await prisma.daily_meal_categories.update({
		where: { daily_meal_category_id },
		data: { active: true },
	});

	try {
		return toDailyMealCategoryResponse(row as DailyMealCategoryWithPricesPrisma);
	} catch (e) {
		throw new Error('Error parsing activated daily meal category');
	}
}

/**
 * Returns the price for a given date for a daily_meal_category object with included daily_meal_category_prices.
 * The price is the one with the latest valid_from that is less than or equal to the given date.
 * Returns null if no valid price is found.
 *
 * @param {DailyMealCategoryDetail} dailyMealCategory - The daily_meal_category object (must include daily_meal_category_prices: { price: number, valid_from: Date }[])
 * @param {Date} date - The date to check the price for
 * @returns {DailyMealCategoryPriceBase | null}
 */
export function getDailyMealCategoryPriceForDate(
	dailyMealCategory: DailyMealCategoryDetail,
	date: Date
): DailyMealCategoryPriceBase | null {
	if (!dailyMealCategory?.daily_meal_category_prices?.length) return null;
	const validPrices = dailyMealCategory.daily_meal_category_prices
		.filter((p) => new Date(p.valid_from) <= date)
		.sort((a, b) => new Date(b.valid_from).getTime() - new Date(a.valid_from).getTime());
	return validPrices.length > 0 ? toDailyMealCategoryPriceBase(validPrices[0]) : null;
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
