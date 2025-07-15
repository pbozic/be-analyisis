import {
	type menus,
	type menu_categories,
	type daily_meal_categories,
	type daily_meal_category_prices,
	type daily_meal_instances,
	type business,
	type daily_meal_subscriptions,
	type daily_meal_subscription_customers,
	type daily_meal_subscription_days,
	type daily_meal_subscription_weekdays,
	SUBSCRIPTION_STATUS,
	DAILY_MEAL_INSTANCE_STATUS,
	SUBSCRIPTION_TYPE,
} from '@prisma/client';

import prisma from '../prisma/prisma.js';
import MenuDao from '../dao/Menu.js';
import MenuCategoryDao from '../dao/MenuCategory.js';
import DailyMealDao from '../dao/DailyMealDao.js';
import DailyMealCategory from '../dao/DailyMealCategory.js';

/**
 * Convert JavaScript's weekday (Sunday=0) to our system's weekday (Monday=0)
 * @param jsWeekday JavaScript weekday (0-6, Sunday=0)
 * @returns Our system weekday (0-6, Monday=0)
 */
function jsWeekdayToOurWeekday(jsWeekday: number): number {
	return (jsWeekday + 6) % 7;
}

/**
 * Convert our system's weekday (Monday=0) to JavaScript's weekday (Sunday=0)
 * @param ourWeekday Our system weekday (0-6, Monday=0)
 * @returns JavaScript weekday (0-6, Sunday=0)
 */
function ourWeekdayToJsWeekday(ourWeekday: number): number {
	return (ourWeekday + 1) % 7;
}

/**
 * Maps a date to an earlier date according to the given weekday:weekday mapping.
 * @param {Date} date
 * @param {Record<number,number>} mapping
 * @returns {Date}
 */
export function mapDateToEarlierWeekday(date: Date, mapping: Record<number, number>): Date {
	const jsWeekday = date.getUTCDay();
	const currentWeekday = jsWeekdayToOurWeekday(jsWeekday);

	const targetWeekday = mapping[currentWeekday];

	if (typeof targetWeekday !== 'number' || targetWeekday === currentWeekday) {
		// No mapping or mapping to same day, return original
		return date;
	}

	const jsCurrentWeekday = ourWeekdayToJsWeekday(currentWeekday);
	const jsTargetWeekday = ourWeekdayToJsWeekday(targetWeekday);

	// Calculate days to subtract to reach the earlier day
	const diff = (jsCurrentWeekday - jsTargetWeekday + 7) % 7;
	const result = new Date(date);
	result.setUTCDate(date.getUTCDate() - diff);
	return result;
}

function getDateRangeMidnight(date1: Date, date2: Date): Date[] {
	const start = new Date(date1);
	const end = new Date(date2);

	// Set both to UTC midnight
	start.setUTCHours(0, 0, 0, 0);
	end.setUTCHours(0, 0, 0, 0);

	const result: Date[] = [];
	let current = new Date(start);

	while (current <= end) {
		result.push(new Date(current)); // Push a copy
		current.setUTCDate(current.getUTCDate() + 1); // Move to next day in UTC
	}

	return result;
}

export async function generateDailyMealMenuCategoriesUpToDate(future_date: Date | string) {
	//TODO: make function for date range for all busiensses that offer DMs
	const now = new Date(new Date().setUTCHours(0, 0, 0, 0));
	const max_date = new Date(new Date(future_date).setUTCHours(23, 59, 59, 999));

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

							const new_menu_category = await MenuCategoryDao.createDailyMealMenuCategory(
								menu.menu_id,
								relevant_price.daily_meal_category_prices_id
							);
						} catch (error) {
							console.error('Error creating new menu category', error);
						}
					}
				}
			}
		}

		// Create a Set of all menu dates (normalized to midnight)
		const validMenuDatesSet: Set<number> = new Set(
			valid_menus
				.filter((menu) => menu.date) // guard against null
				.map((menu) => new Date(menu.date!.setUTCHours(0, 0, 0, 0)).getTime())
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

export async function generateDailyMealMenuCategoriesUpToDateForCategory(
	daily_meal_category_id: string,
	future_date: Date | string
) {
	//TODO: make function for date range for all busiensses that offer DMs
	const now = new Date(new Date().setUTCHours(0, 0, 0, 0));
	const max_date = new Date(new Date(future_date).setUTCHours(23, 59, 59, 999));
	const daily_meal_category = await DailyMealCategory.getDailyMealCategoryById(daily_meal_category_id);

	//TODO:make function for day range generation for each business
	const business = daily_meal_category.business;
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
		const sorted_prices: daily_meal_category_prices[] = daily_meal_category.daily_meal_category_prices.sort(
			(p1: daily_meal_category_prices, p2: daily_meal_category_prices) =>
				p2.valid_from.getTime() - p1.valid_from.getTime()
		);
		const relevant_price = sorted_prices.find((p) => menu.date.getTime() >= p.valid_from.getTime());
		if (relevant_price) {
			const existing_mc = menu.categories.find(
				(mc) => mc.daily_meal_category_id === daily_meal_category.daily_meal_category_id
			);
			if (!existing_mc) {
				try {
					console.log('Generating menu_category for ', menu.date, relevant_price.daily_meal_category_id);
					const new_menu_category = await MenuCategoryDao.createDailyMealMenuCategory(
						menu.menu_id,
						relevant_price.daily_meal_category_prices_id
					);
				} catch (error) {
					console.error('Error creating new menu category', error);
				}
			}
		}
	}

	// Create a Set of all menu dates (normalized to midnight)
	const validMenuDatesSet: Set<number> = new Set(
		valid_menus
			.filter((menu) => menu.date) // guard against null
			.map((menu) => menu.date!.setUTCHours(0, 0, 0, 0))
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

			const sorted_prices: daily_meal_category_prices[] = daily_meal_category.daily_meal_category_prices.sort(
				(p1: daily_meal_category_prices, p2: daily_meal_category_prices) =>
					p2.valid_from.getTime() - p1.valid_from.getTime()
			);
			const relevant_price = sorted_prices.find((p) => new_menu.date.getTime() >= p.valid_from.getTime());
			if (relevant_price) {
				try {
					console.log('Generating menu_category for ', new_menu.date, relevant_price.daily_meal_category_id);

					//make function for creating all necessary instances when creating menu_categories
					const new_menu_category = await MenuCategoryDao.createDailyMealMenuCategory(
						new_menu.menu_id,
						relevant_price.daily_meal_category_prices_id
					);
				} catch (error) {
					console.error('Error creating new menu category', error);
				}
			}
		} catch (error) {
			console.error('Error creating menu', error);
		}
	}
}

export async function generateDailyMealMenuCategoriesAndInstancesFor14Days() {
	const now = new Date();
	now.setUTCHours(0, 0, 0, 0);
	const futureDate = new Date(now);
	futureDate.setUTCDate(futureDate.getUTCDate() + 13);

	console.log('Generating MenuCategories up to ', futureDate.toISOString());
	try {
		await generateDailyMealMenuCategoriesUpToDate(futureDate);
	} catch (error) {
		console.error(error);
	}
	try {
		await generateDailyMealInstancesUpToDate(futureDate);
	} catch (error) {
		console.error(error);
	}
}

export async function generateDMInstancesForDateSimple(datestring: string) {
	const intended_date = new Date(datestring);
	intended_date.setUTCHours(0, 0, 0, 0);
	const jsWeekday = intended_date.getUTCDay();
	const intended_weekday = jsWeekdayToOurWeekday(jsWeekday);
	console.log('Generating DM instances for ', intended_date, 'weekday:', intended_weekday);
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
	// console.log(JSON.stringify(subscriptions, null, 2));
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
			date: intended_date,
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
					// console.log(JSON.stringify(menu_category,null,2))
					if (menu_category.daily_meal_category_price) {
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
								(instance: daily_meal_instances) =>
									instance.intended_date.getTime() === intended_date.getTime() &&
									instance.menu_category_id === menuCategory.menu_category_id
							)
						) {
							// console.log(JSON.stringify(sub_customer, null, 2));
							// console.log(
							// 	!sub_customer.daily_meal_instances.some(
							// 		(instance) =>
							// 			instance.intended_date.getTime() === intended_date.getTime() &&
							// 			instance.menu_category_id === menuCategory.menu_category_id
							// 	)
							// );
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
	// console.info(JSON.stringify(dailyMealInstanceCreateData, null, 2));
	try {
		const created_instances = await prisma.daily_meal_instances.createMany({
			data: dailyMealInstanceCreateData,
		});
	} catch (e) {
		console.error(e);
	}
}
export async function generateDailyMealInstancesUpToDate(max_date: Date) {
	const startDate = new Date();
	startDate.setUTCHours(0, 0, 0, 0);

	const endDate = new Date(max_date);
	endDate.setUTCHours(0, 0, 0, 0);

	for (
		let currentDate = new Date(startDate);
		currentDate <= endDate;
		currentDate.setUTCDate(currentDate.getUTCDate() + 1)
	) {
		console.log(currentDate.toISOString());
		await generateDMInstancesForDateSimple(currentDate.toISOString());
	}
}

function getUTCWeekdayDatesInRange(
	startDate: string | Date,
	endDate: string | Date,
	weekdays: { intended_weekday: number }[]
): Date[] {
	const start = new Date(startDate);
	const end = new Date(endDate);

	// Normalize time to UTC midnight
	start.setUTCHours(0, 0, 0, 0);
	end.setUTCHours(0, 0, 0, 0);

	const ourWeekdaySet = new Set(weekdays.map((w) => w.intended_weekday));
	const result: Date[] = [];

	for (let dt = new Date(start); dt <= end; dt.setUTCDate(dt.getUTCDate() + 1)) {
		const jsWeekday = dt.getUTCDay();
		const ourWeekday = jsWeekdayToOurWeekday(jsWeekday);

		if (ourWeekdaySet.has(ourWeekday)) {
			result.push(new Date(Date.UTC(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate())));
		}
	}

	return result;
}

/** * Cancel all daily meal instances for a subscription that are in PLANNED status.
 * This will not delete the instances, but only update their status to CANCELED.
 * It will also log the number of instances canceled.
 * If no instances are found, it will log that no instances were found for the subscription.
 * If the subscription is not found, it will throw an error.
 * @param subscription_id - The ID of the subscription for which to cancel instances
 * @throws {Error} If the subscription is not found
 */
export async function cancelInstancesForSubscription(subscription_id: string) {
	const sub = await DailyMealDao.getSubscriptionById(subscription_id, {
		daily_meal_instances: true,
	});
	if (!sub) {
		throw new Error(`Subscription with ID ${subscription_id} not found`);
	}
	if (sub.daily_meal_instances.length === 0) {
		console.log(`No daily meal instances found for subscription ${subscription_id}`);
		return;
	}
	const instanceIds = sub.daily_meal_instances.map((instance: daily_meal_instances) => instance.id);
	try {
		await prisma.daily_meal_instances.updateMany({
			where: {
				id: { in: instanceIds },
				status: DAILY_MEAL_INSTANCE_STATUS.PLANNED,
			},
			data: {
				status: DAILY_MEAL_INSTANCE_STATUS.CANCELED,
			},
		});
		console.info(`Canceled ${instanceIds.length} daily meal instances for subscription ${subscription_id}`);
	} catch (error) {
		console.error(`Error canceling daily meal instances for subscription ${subscription_id}:`, error);
		throw error;
	}
}

/**
 * Create daily meal instances for all customers of a subscription for a given date.
 * - For DATED subscriptions: verifies the date is in the subscription's days.
 * - For RECURRING subscriptions: verifies the weekday is in the subscription's weekdays.
 * Returns the created daily_meal_instances.
 *
 * @param subscriptionId - The subscription ID
 * @param date - The date for which to create instances (Date or ISO string)
 * @returns Array of created daily_meal_instances
 */
export async function generateInstancesForSubscription(subscription_id: string) {
	const sub = await DailyMealDao.getSubscriptionById(subscription_id, {
		days: true,
		weekdays: true,
		customers: {
			include: { daily_meal_instances: true },
		},
		business: true,
	});
	console.log(sub);
	const startDate = new Date();
	startDate.setUTCHours(0, 0, 0, 0);
	const endDate = new Date(startDate);
	endDate.setUTCDate(endDate.getUTCDate() + 13);
	const create_dates =
		sub.type === SUBSCRIPTION_TYPE.DATED
			? sub.days
					.map((day: daily_meal_subscription_days) => day.intended_date)
					.filter((date: Date) => date >= startDate && date <= endDate)
			: getUTCWeekdayDatesInRange(startDate, endDate, sub.weekdays);

	const dailyMealInstanceCreateData: Array<{
		subscription_id: string;
		subscription_customer_id: string;
		menu_category_id: string;
		intended_date: Date;
		delivery_date: Date;
	}> = [];
	for (let intended_date of create_dates) {
		console.log(intended_date.toISOString());
		const menus = await prisma.menus.findMany({
			where: {
				date: intended_date,
				business_id: sub.business_id,
				isDailyMeal: true,
			},
			select: {
				menu_id: true,
				business_id: true,
				categories: {
					select: {
						menu_category_id: true,
						daily_meal_category_id: true,
					},
				},
			},
		});
		// Create a lookup map for menu_categories by daily_meal_category_id
		const menuCategoryIdMap = new Map<string, string>();
		for (const menu of menus) {
			for (const cat of menu.categories) {
				if (cat.daily_meal_category_id) {
					menuCategoryIdMap.set(`${cat.daily_meal_category_id}`, cat.menu_category_id);
				}
			}
		}

		sub.customers.forEach(
			(sub_customer: daily_meal_subscription_customers & { daily_meal_instances: daily_meal_instances[] }) => {
				const menuCategoryMapKey = `${sub_customer.daily_meal_category_id}`;
				const menuCategoryId = menuCategoryIdMap.get(menuCategoryMapKey);
				if (menuCategoryId) {
					if (
						!sub_customer.daily_meal_instances.some(
							(instance: daily_meal_instances) =>
								instance.intended_date.getTime() === intended_date.getTime() &&
								instance.menu_category_id === menuCategoryId
						)
					) {
						const delivery_date = sub.business.daily_meals_delivery_mapping
							? mapDateToEarlierWeekday(
									intended_date,
									sub.business.daily_meals_delivery_mapping as Record<number, number>
								)
							: intended_date;

						dailyMealInstanceCreateData.push({
							subscription_id: sub.id,
							subscription_customer_id: sub_customer.id,
							menu_category_id: menuCategoryId,
							intended_date: intended_date,
							delivery_date: delivery_date,
						});
					} else {
						console.info(
							`Instance for mc:${menuCategoryId} and sub_cust:${sub_customer.id} already exists`
						);
					}
				} else {
					console.warn(
						`Missing menu_category ${sub_customer.daily_meal_category_id} for date ${intended_date}`
					);
				}
			}
		);
	}
	console.info(JSON.stringify(dailyMealInstanceCreateData, null, 2));
	try {
		const created_instances = await prisma.daily_meal_instances.createMany({
			data: dailyMealInstanceCreateData,
		});
	} catch (e) {
		console.error(e);
	}
}

export async function activateSubscriptionById(subscription_id: string) {
	try {
		await generateInstancesForSubscription(subscription_id);
		const updated_subscription = await DailyMealDao.updateSubscriptionStatus(
			subscription_id,
			SUBSCRIPTION_STATUS.ACTIVE,
			{
				daily_meal_instances: true,
			}
		);
		return updated_subscription;
	} catch (error) {
		console.error(error);
	}
}

export async function cancelSubscriptionById(subscription_id: string) {
	try {
		await cancelInstancesForSubscription(subscription_id);
		const updated_subscription = await DailyMealDao.updateSubscriptionStatus(
			subscription_id,
			SUBSCRIPTION_STATUS.CANCELED
		);
		return updated_subscription;
	} catch (error) {
		console.error(error);
	}
}

export default {
	generateDailyMealMenuCategoriesUpToDate,
	generateDailyMealMenuCategoriesUpToDateForCategory,
	generateDailyMealMenuCategoriesAndInstancesFor14Days,
	generateDMInstancesForDateSimple,
	generateDailyMealInstancesUpToDate,
	generateInstancesForSubscription,
	activateSubscriptionById,
	cancelSubscriptionById,
};
