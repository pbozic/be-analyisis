import { Response } from 'express';

import { ValidatedRequest } from '../types/validatedRequest.ts';
import DmcDao from '../dao/DailyMealCategory.ts';
import type {
	CreateDailyMealCategoryWithPriceInput,
	AddPriceToDailyMealCategoryInput,
	DailyMealCategory,
	DailyMealCategoryPrice,
} from '../types/dailyMeals/DailyMealCategory.ts';
import MenuCategory from '../dao/MenuCategory.js';
import dailyMealHelpers from '../lib/dailyMealHelpers.ts';

/**
 * POST /business/:business_id/daily-meal-categories
 * @tag DailyMealCategories
 * @summary Create a daily meal category for a business
 * @description Creates a new daily meal category for a business and sets its initial price.
 * @operationId createDailyMealCategoryWithPrice
 * @bodyDescription The daily meal category details to create.
 * @bodyContent {
 *   "category_id": "uuid",
 *   "price": 1000,
 *   "start_date": "2024-07-01T00:00:00.000Z"
 * } application/json
 * @bodyRequired
 * @response 201 - Daily meal category created successfully
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
 *   "daily_meal_category_id": "uuid",
 *   "business_id": "uuid",
 *   "category_id": "uuid",
 *   "created_at": "2024-07-01T00:00:00.000Z",
 *   "start_date": "2024-07-01T00:00:00.000Z",
 *   "category": {
 *     "categories_id": "uuid",
 *     "name": "string",
 *     "description": "string",
 *     "type": "string"
 *   },
 *   "daily_meal_category_prices": [
 *     {
 *       "daily_meal_category_prices_id": "uuid",
 *       "daily_meal_category_id": "uuid",
 *       "price": 1000,
 *       "valid_from": "2024-07-01T00:00:00.000Z",
 *       "created_at": "2024-07-01T00:00:00.000Z"
 *     }
 *   ]
 * }
 * @response 500 - Error creating daily meal category
 * @prisma_model daily_meal_categories
 */
export async function createDailyMealCategoryWithPrice(
	req: ValidatedRequest<CreateDailyMealCategoryWithPriceInput, { business_id: string }>,
	res: Response<DailyMealCategory | { message: string; error?: string }>
) {
	try {
		const { business_id } = req.params;
		const { category_id, price, start_date } = req.body;
		const dmc = await DmcDao.createDailyMealCategoryWithPrice({
			business_id,
			category_id,
			price,
			start_date: new Date(start_date),
		});

		const futureDate = new Date();
		futureDate.setUTCHours(0, 0, 0, 0);
		futureDate.setUTCDate(futureDate.getUTCDate() + 13);
		await dailyMealHelpers.generateDailyMealMenuCategoriesUpToDateForCategory(
			dmc.daily_meal_category_id,
			futureDate
		);

		res.status(201).json(dmc);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating daily meal category', error: message });
	}
}

/**
 * GET /business/:business_id/daily-meal-categories
 * @tag DailyMealCategories
 * @summary List active daily meal categories for a business
 * @description Lists all currently active daily meal categories for a business, including their latest price.
 * @operationId getDailyMealCategoriesForBusiness
 * @response 200 - List of active daily meal categories
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json [
 *   {
 *     "daily_meal_category_id": "uuid",
 *     "business_id": "uuid",
 *     "category_id": "uuid",
 *     "created_at": "2024-07-01T00:00:00.000Z",
 *     "start_date": "2024-07-01T00:00:00.000Z",
 * 	   "active": true,
 *     "category": {
 *       "categories_id": "uuid",
 *       "name": "string",
 *       "description": "string",
 *       "type": "string"
 *     },
 *     "daily_meal_category_prices": [
 *       {
 *         "daily_meal_category_prices_id": "uuid",
 *         "daily_meal_category_id": "uuid",
 *         "price": 1000,
 *         "valid_from": "2024-07-01T00:00:00.000Z",
 *         "created_at": "2024-07-01T00:00:00.000Z"
 *       }
 *     ]
 *   }
 * ]
 * @response 500 - Error fetching daily meal categories
 * @prisma_model daily_meal_categories
 */
export async function getDailyMealCategoriesForBusiness(
	req: ValidatedRequest<unknown, { business_id: string }, { detailed?: string }>,
	res: Response<DailyMealCategory[] | { message: string; error?: string }>
) {
	try {
		const { business_id } = req.params;
		const detailed = req.query?.detailed === 'true';
		const dmcs = await DmcDao.getDailyMealCategoriesForBusiness(business_id, detailed);
		res.status(200).json(dmcs);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error fetching daily meal categories', error: message });
	}
}

/**
 * POST /daily-meal-categories/:dmc_id/price
 * @tag DailyMealCategories
 * @summary Add a new price entry to a daily meal category
 * @description Adds a new price entry for a daily meal category, effective from a given date. Also updates all menu_category entries for the relevant daily meal category where the menu date is above the new price's valid_from, to connect with the new daily_meal_category_price_id.
 * @operationId addPriceToDailyMealCategory
 * @bodyDescription The new price and its valid_from date.
 * @bodyContent {
 *   "price": 1200,
 *   "valid_from": "2024-08-01T00:00:00.000Z"
 * } application/json
 * @bodyRequired
 * @response 201 - Price entry added successfully and menu categories updated
 * @responseContent {object} 201.application/json
 * @responseExample 201.application/json {
 *   "daily_meal_category_prices_id": "uuid",
 *   "daily_meal_category_id": "uuid",
 *   "price": 1200,
 *   "valid_from": "2024-08-01T00:00:00.000Z",
 *   "created_at": "2024-08-01T00:00:00.000Z"
 * }
 * @response 500 - Error adding price entry
 * @prisma_model daily_meal_category_prices
 */
export async function addPriceToDailyMealCategory(
	req: ValidatedRequest<AddPriceToDailyMealCategoryInput, { dmc_id: string }>,
	res: Response<DailyMealCategoryPrice | { message: string; error?: string }>
) {
	try {
		const { dmc_id } = req.params;
		const { price, valid_from } = req.body;
		const validFromDate = new Date(valid_from);

		// Create the new price entry
		const priceEntry = await DmcDao.addPriceToDailyMealCategory({
			daily_meal_category_id: dmc_id,
			price,
			valid_from: validFromDate,
		});

		await MenuCategory.updateMenuCategoriesWithNewPrice(
			dmc_id,
			priceEntry.daily_meal_category_prices_id,
			priceEntry.valid_from
		);

		res.status(201).json(priceEntry);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error adding price entry', error: message });
	}
}

/**
 * PATCH /daily-meal-categories/:dmc_id/deactivate
 * @tag DailyMealCategories
 * @summary Remove a daily meal category from a business
 * @description Deactivates a daily meal category from a business.
 * @operationId deactivateDailyMealCategory
 * @response 200 - Daily meal category deleted successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "daily_meal_category_id": "uuid",
 *   "business_id": "uuid",
 *   "category_id": "uuid",
 *   "created_at": "2024-07-01T00:00:00.000Z",
 *   "start_date": "2024-07-01T00:00:00.000Z"
 *   "active": false,
 * }
 * @response 500 - Error deleting daily meal category
 * @prisma_model daily_meal_categories
 */
export async function deactivateDailyMealCategory(
	req: ValidatedRequest<unknown, { dmc_id: string }>,
	res: Response<DailyMealCategory | { message: string; error?: string }>
) {
	try {
		const { dmc_id } = req.params;
		const deactivated = await DmcDao.deactivateDailyMealCategory(dmc_id);
		res.status(200).json(deactivated);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error deactivating daily meal category', error: message });
	}
}

/**
 * PATCH /daily-meal-categories/:dmc_id/activate
 * @tag DailyMealCategories
 * @summary Add a daily meal category back to business
 * @description Activates a daily meal category of a business.
 * @operationId activateDailyMealCategory
 * @response 200 - Daily meal category activated successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "daily_meal_category_id": "uuid",
 *   "business_id": "uuid",
 *   "category_id": "uuid",
 *   "created_at": "2024-07-01T00:00:00.000Z",
 *   "start_date": "2024-07-01T00:00:00.000Z"
 *   "active": true,
 * }
 * @response 500 - Error deleting daily meal category
 * @prisma_model daily_meal_categories
 */
export async function activateDailyMealCategory(
	req: ValidatedRequest<unknown, { dmc_id: string }>,
	res: Response<DailyMealCategory | { message: string; error?: string }>
) {
	try {
		const { dmc_id } = req.params;
		const activated = await DmcDao.activateDailyMealCategory(dmc_id);
		const futureDate = new Date();
		futureDate.setUTCHours(0, 0, 0, 0);
		futureDate.setUTCDate(futureDate.getUTCDate() + 13);
		await dailyMealHelpers.generateDailyMealMenuCategoriesUpToDateForCategory(
			activated.daily_meal_category_id,
			futureDate
		);
		res.status(200).json(activated);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error activating daily meal category', error: message });
	}
}
