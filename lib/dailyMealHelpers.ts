import type {
	menus,
	menu_categories,
	daily_meal_categories,
	daily_meal_category_prices,
	daily_meal_instances,
	business,
	daily_meal_subscriptions,
	daily_meal_subscription_customers,
	daily_meal_subscription_days,
	daily_meal_subscription_weekdays,
} from '@prisma/client';

import prisma from '../prisma/prisma.js';
import MenuDao from '../dao/Menu.js';
import MenuCategoryDao from '../dao/MenuCategory.js';

/**
 * Maps a date to an earlier date according to the given weekday:weekday mapping.
 * @param {Date} date
 * @param {Record<number,number>} mapping
 * @returns {Date}
 */
export function mapDateToEarlierWeekday(date: Date, mapping: Record<number, number>): Date {
	const currentWeekday = date.getDay();
	const targetWeekday = mapping[currentWeekday];

	if (typeof targetWeekday !== 'number' || targetWeekday === currentWeekday) {
		// No mapping or mapping to same day, return original
		return date;
	}

	// Calculate days to subtract to reach the earlier day
	const diff = (currentWeekday - targetWeekday + 7) % 7;
	const result = new Date(date);
	result.setDate(date.getDate() - diff);
	return result;
}

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
		console.log('Generating categories for business ', business.business_id);
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
				categories: true,
			},
		})) as Array<menus & { date: Date; categories: menu_categories[] }>;

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
					const existing_mc = menu.categories.find(
						(mc) => mc.daily_meal_category_id === dmc.daily_meal_category_id
					);
					if (!existing_mc) {
						try {
							console.log(
								'Generating menu_category for ',
								menu.date,
								relevant_price.daily_meal_category_id
							);

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
				const new_menu: menus & { date: Date; categories: menu_categories[] } = await MenuDao.createMenu(
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
							console.log(
								'Generating menu_category for ',
								new_menu.date,
								relevant_price.daily_meal_category_id
							);

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
	try {
		await generateDailyMealMenuCategoriesUpToDate(futureDate);
	} catch (error) {
		console.error(error);
	}
}

export async function generateDMInstancesForDateSimple(datestring: string) {
	const intended_date = new Date(new Date(datestring).setHours(0, 0, 0, 0));
	const intended_weekday = intended_date.getDay();
	console.log('Generating DM instances for ', intended_date);
	const subscriptions = await prisma.daily_meal_subscriptions.findMany({
		where: {
			status: 'ACTIVE',
			AND: [
				{ start_date: { lte: intended_date } },
				{
					OR: [{ end_date: null }, { end_date: { gte: intended_date } }],
				},
			],
			OR: [
				{
					type: 'DATED',
					days: { some: { intended_date: intended_date } },
				},
				{
					type: 'RECURRING',
					weekdays: { some: { intended_weekday: intended_weekday } },
				},
			],
		},
		include: {
			days: true,
			weekdays: true,
			customers: {
				include: { daily_meal_instances: true },
			},
		},
	});
	const business_id_set = new Set<string>();
	subscriptions.forEach((sub: { business_id: string }) => {
		business_id_set.add(sub.business_id);
	});

	const businesses = await prisma.business.findMany({
		where: {
			business_id: { in: Array.from(business_id_set) },
		},
	});
	type DeliveryDayMapping = {
		'0': number;
		'1': number;
		'2': number;
		'3': number;
		'4': number;
		'5': number;
		'6': number;
	};
	// Create a mapping: business_id -> business object
	const businessDeliveryMappingMap = new Map<string, DeliveryDayMapping>();
	businesses.forEach((business: business) => {
		businessDeliveryMappingMap.set(
			business.business_id,
			business.daily_meals_delivery_mapping as DeliveryDayMapping
		);
	});

	const menus = await prisma.menus.findMany({
		where: {
			business_id: { in: Array.from(business_id_set) },
			isDailyMeal: true,
		},
		include: {
			categories: {
				include: {
					daily_meal_category_price: true,
					daily_meal_instances: true,
				},
			},
		},
	});

	// Create menuCategoryMap: key is `${business_id},${daily_meal_category_id}`, value is menu_category_id
	const menuCategoryMap = new Map<
		string,
		menu_categories & {
			daily_meal_category_price: daily_meal_category_prices;
			daily_meal_instances: daily_meal_instances[];
		}
	>();
	menus.forEach(
		(
			menu: menus & {
				categories: (menu_categories & {
					daily_meal_category_price: daily_meal_category_prices;
					daily_meal_instances: daily_meal_instances[];
				})[];
			}
		) => {
			menu.categories.forEach(
				(
					menu_category: menu_categories & {
						daily_meal_category_price: daily_meal_category_prices;
						daily_meal_instances: daily_meal_instances[];
					}
				) => {
					if (menu_category.daily_meal_category_price.daily_meal_category_id) {
						const key = `${menu.business_id},${menu_category.daily_meal_category_price.daily_meal_category_id}`;
						menuCategoryMap.set(key, menu_category);
					}
				}
			);
		}
	);

	const dailyMealInstanceCreateData: Array<{
		subscription_id: string;
		subscription_customer_id: string;
		menu_category_id: string;
		intended_date: Date;
		delivery_date: Date;
	}> = [];

	subscriptions.forEach(
		(
			sub: daily_meal_subscriptions & {
				customers: Array<daily_meal_subscription_customers & { daily_meal_instances: daily_meal_instances[] }>;
				days: daily_meal_subscription_days[];
				weekdays: daily_meal_subscription_weekdays[];
			}
		) => {
			sub.customers.forEach(
				(
					sub_customer: daily_meal_subscription_customers & { daily_meal_instances: daily_meal_instances[] }
				) => {
					const menuCategoryMapKey = `${sub.business_id},${sub_customer.daily_meal_category_id}`;
					const menuCategory = menuCategoryMap.get(menuCategoryMapKey);
					if (menuCategory) {
						if (
							!sub_customer.daily_meal_instances.some(
								(instance) =>
									instance.intended_date === intended_date &&
									instance.menu_category_id === menuCategory.menu_category_id
							)
						) {
							const delivery_date = businessDeliveryMappingMap.get(sub.business_id)
								? mapDateToEarlierWeekday(
										intended_date,
										businessDeliveryMappingMap.get(sub.business_id) as Record<number, number>
									)
								: intended_date;

							dailyMealInstanceCreateData.push({
								subscription_id: sub.id,
								subscription_customer_id: sub_customer.id,
								menu_category_id: menuCategory.menu_category_id,
								intended_date: intended_date,
								delivery_date: delivery_date,
							});
						} else {
							console.info(
								`Instance for mc:${menuCategory.menu_category_id} and sub_cust:${sub_customer.id} already exists`
							);
						}
					} else {
						console.warn(
							`Missing menu_category ${`${sub.business_id},${sub_customer.daily_meal_category_id}`} for date ${intended_date}`
						);
					}
				}
			);
		}
	);
	console.info(JSON.stringify(dailyMealInstanceCreateData, null, 2));
	try {
		const created_instances = await prisma.daily_meal_instances.createMany({
			data: dailyMealInstanceCreateData,
		});
	} catch (e) {
		console.error(e);
	}
}
export async function generateDailyMealInstancesForToday() {
	await generateDMInstancesForDateSimple(new Date().toDateString());
}

export default {
	generateDailyMealMenuCategoriesUpToDate,
	generateDailyMealMenuCategoriesUpToToday,
	generateDMInstancesForDateSimple,
	generateDailyMealInstancesForToday,
};
