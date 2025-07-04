import type { menus, menu_categories, daily_meal_categories, daily_meal_category_prices } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import MenuDao from '../dao/Menu.js';
import MenuCategoryDao from '../dao/MenuCategory.js';

function getDateRangeMidnight(date1: Date, date2: Date): Date[] {
	const start = new Date(date1);
	const end = new Date(date2);

	// Set both to midnight
	start.setHours(0, 0, 0, 0);
	end.setHours(0, 0, 0, 0);

	const result = [];
	let current = new Date(start);

	while (current <= end) {
		result.push(new Date(current)); // Push a copy
		current.setDate(current.getDate() + 1); // Move to next day
	}

	return result;
}

export async function generateDailyMealMenuCategoriesUpToDate(future_date: Date | string) {
	//TODO: make function for date range for all busiensses that offer DMs
	const now = new Date(new Date().setHours(0, 0, 0, 0));
	const max_date = new Date(new Date(future_date).setHours(23, 59, 59, 999));

	const DM_businesses = await prisma.business.findMany({
		where: {
			offers_daily_meals: true,
		},
		include: {
			daily_meal_categories: {
				include: { daily_meal_category_prices: true },
			},
		},
	});
	//TODO:make function for day range generation for each business
	for (let business of DM_businesses) {
		const valid_menus = (await prisma.menus.findMany({
			where: {
				business_id: business.business_id,
				isDailyMeal: true,
				date: {
					gte: now,
					lte: max_date,
				},
			},
			include: {
				menu_categories: true,
			},
		})) as Array<menus & { date: Date; menu_categories: menu_categories[] }>;

		// CEHCK ALL valid menus if they have all the menucategories that they should. If not, create them
		//TODO:make function for single day geenration for single business
		for (let menu of valid_menus) {
			for (let dmc of business.daily_meal_categories.filter(
				(cat: daily_meal_categories) => cat.start_date.getTime() <= menu.date.getTime()
			)) {
				const sorted_prices: daily_meal_category_prices[] = dmc.daily_meal_category_prices.sort(
					(p1: daily_meal_category_prices, p2: daily_meal_category_prices) =>
						p2.valid_from.getTime() - p1.valid_from.getTime()
				);
				const relevant_price = sorted_prices.find((p) => menu.date.getTime() >= p.valid_from.getTime());
				if (relevant_price) {
					const existing_mc = menu.menu_categories.find(
						(mc) => mc.daily_meal_category_id === dmc.daily_meal_category_id
					);
					if (!existing_mc) {
						try {
							//TODO: make function that generates menucategory and dm_instances.
							const new_menu_category = await MenuCategoryDao.createDailyMealMenuCategory(
								menu.menu_id,
								relevant_price.daily_meal_category_prices_id
							);
						} catch (error) {
							console.error('Error creating new menu category', error);
						}
					} else {
						//TODO: make function that checks menucategory and creates missing dm_instances.
					}
				}
			}
		}

		// Create a Set of all menu dates (normalized to midnight)
		const validMenuDatesSet: Set<number> = new Set(
			valid_menus
				.filter((menu) => menu.date) // guard against null
				.map((menu) => new Date(menu.date!.setHours(0, 0, 0, 0)).getTime())
		);

		// Filter out any date that already exists in menus
		const create_dates = getDateRangeMidnight(now, max_date).filter((date) => {
			return !validMenuDatesSet.has(date.getTime());
		});

		for (let date of create_dates) {
			try {
				const new_menu: menus & { date: Date; menu_categories: menu_categories[] } = await MenuDao.createMenu(
					business.business_id,
					true,
					date
				);
				for (let dmc of business.daily_meal_categories.filter(
					(cat: daily_meal_categories) => cat.start_date.getTime() <= new_menu.date.getTime()
				)) {
					const sorted_prices: daily_meal_category_prices[] = dmc.daily_meal_category_prices.sort(
						(p1: daily_meal_category_prices, p2: daily_meal_category_prices) =>
							p2.valid_from.getTime() - p1.valid_from.getTime()
					);
					const relevant_price = sorted_prices.find((p) => new_menu.date.getTime() >= p.valid_from.getTime());
					if (relevant_price) {
						try {
							//make function for creating all necessary instances when creating menu_categories
							const new_menu_category = await MenuCategoryDao.createDailyMealMenuCategory(
								new_menu.menu_id,
								relevant_price.daily_meal_category_prices_id
							);
						} catch (error) {
							console.error('Error creating new menu category', error);
						}
					}
				}
			} catch (error) {
				console.error('Error creating menu', error);
			}
		}
	}
}

export async function generateDailyMealMenuCategoriesUpToToday() {
	const now = new Date();
	const futureDate = new Date(now);
	futureDate.setDate(futureDate.getDate() + 14);
	futureDate.setHours(0, 0, 0, 0);

	console.log('Generating MenuCategories up to ', futureDate.toISOString());
	await generateDailyMealMenuCategoriesUpToDate(futureDate);
}

export default {
	generateDailyMealMenuCategoriesUpToDate,
	generateDailyMealMenuCategoriesUpToToday,
};
