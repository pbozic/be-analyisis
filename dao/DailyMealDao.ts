import { Prisma, SUBSCRIPTION_STATUS, SUBSCRIPTION_TYPE, DAILY_MEAL_INSTANCE_STATUS } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { DailyMealsCartPerson } from '../types/dailymeal/DailyMealSubscription.ts';
import { DOCUMENT_TYPE } from '../lib/constants.js';

/**
 * Get active daily meal subscriptions by business_id
 * @param business_id
 * @returns daily_meal_subscriptions[]
 */
export async function getDailyMealSubscriptionsByBusinessId(business_id: string) {
	return prisma.daily_meal_subscriptions.findMany({
		where: {
			business_id,
		},
		include: {
			user: true,
			delivery_address: true,
			customers: true,
			days: true,
			weekdays: true,
			daily_meal_instances: {
				include: {
					menu_category: {
						include: {
							menu_categories_categories: {
								include: {
									category: true,
								},
							},
							menu_items: true,
						},
					},
					customer: true,
				},
			},
		},
		orderBy: { start_date: 'asc' },
	});
}

/**
 * Get active daily meal subscriptions by business_id and optional start_date.
 * @param business_id
 * @param start_date
 * @returns daily_meal_subscriptions[]
 */
export async function getActiveDailyMealSubscriptionsByBusinessId(business_id: string, start_date?: string) {
	const normalizedDate = start_date ? new Date(new Date(start_date).setUTCHours(0, 0, 0, 0)) : null;
	return prisma.daily_meal_subscriptions.findMany({
		where: {
			business_id,
			start_date: normalizedDate ? { gte: normalizedDate } : undefined,
			status: SUBSCRIPTION_STATUS.ACTIVE,
		},
		include: {
			user: true,
			delivery_address: true,
			customers: true,
			days: true,
			weekdays: true,
			daily_meal_instances: {
				include: {
					menu_category: {
						include: {
							menu_categories_categories: {
								include: {
									category: true,
								},
							},
							menu_items: true,
						},
					},
					customer: true,
				},
			},
		},
		orderBy: { start_date: 'asc' },
	});
}

/**
 * Get daily meal subscriptions by user_id and optional start_date.
 * @param user_id
 * @param start_date
 * @returns daily_meal_subscriptions[]
 */
export async function getDailyMealSubscriptionsByUserId(user_id: string, start_date?: string) {
	const normalizedDate = start_date ? new Date(new Date(start_date).setUTCHours(0, 0, 0, 0)) : null;

	return prisma.daily_meal_subscriptions.findMany({
		where: {
			user_id,
			start_date: normalizedDate ? { gte: normalizedDate } : undefined,
			status: SUBSCRIPTION_STATUS.ACTIVE,
		},
		include: {
			business: {
				select: {
					business_group_name: true,
					name: true,
					telephone: true,
					email: true,
					daily_meals_days: true,
					daily_meals_delivery_mapping: true,
					documents: {
						where: {
							document_type: DOCUMENT_TYPE.LOGO,
						},
						select: {
							files: true,
						},
					},
				},
			},
			delivery_address: true,
			customers: true,
			days: true,
			weekdays: true,
			daily_meal_instances: {
				include: {
					menu_category: {
						include: {
							menu_categories_categories: {
								include: {
									category: true,
								},
							},
							menu_items: true,
						},
					},
					customer: true,
				},
			},
		},
		orderBy: { start_date: 'asc' },
	});
}

/**
 * Get today's daily meal subscriptions by business_id.
 * @param business_id
 * @returns daily_meal_subscriptions[]
 */
export async function getTodayDailyMealSubscriptionsByBusinessId(business_id: string) {
	const todayStart = new Date();
	todayStart.setHours(0, 0, 0, 0);
	const todayEnd = new Date();
	todayEnd.setHours(23, 59, 59, 999);
	return prisma.daily_meal_subscriptions.findMany({
		where: {
			business_id,
			start_date: { lte: todayEnd },
			status: SUBSCRIPTION_STATUS.ACTIVE,
		},
		include: {
			user: true,
			business: true,
			delivery_address: true,
			customers: true,
			days: true,
			weekdays: true,
			daily_meal_instances: {
				where: {
					status: DAILY_MEAL_INSTANCE_STATUS.PLANNED,
					delivery_date: {
						gte: todayStart,
						lte: todayEnd,
					},
				},
				include: {
					menu_category: {
						include: {
							menu_categories_categories: {
								include: {
									category: true,
								},
							},
							menu_items: true,
						},
					},
					customer: true,
				},
			},
		},
	});
}

/**
 * Get daily meal subscriptions by grouped_id.
 * @param grouped_id
 * @returns daily_meal_subscriptions[]
 */
export async function getDailyMealSubscriptionById(id: string) {
	return prisma.daily_meal_subscriptions.findMany({
		where: { id },
		include: {
			user: true,
			business: true,
			delivery_address: true,
			customers: true,
			days: true,
			weekdays: true,
			daily_meal_instances: true,
		},
		orderBy: { start_date: 'asc' },
	});
}

/**
 *
 * - POST
 * - @tag Delivery
 * - @summary Create a daily meals subscription
 * - @description Creates a new daily_meal_subscriptions record with nested daily_meal_subscription_customers, daily_meal_subscription_days, and daily_meal_subscription_weekdays depending on the type.
 * - @operationId createDailyMealSubscription
 * - @bodyDescription The daily meals subscription details to create
 * - @bodyContent {
 *     "user_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "delivery_address_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "start_date": "2025-07-01T00:00:00.000Z",
 *     "end_date": null,
 *     "type": "DAYS",
 *     "courier_comment": "Leave at the door",
 *     "customers": [
 *       {
 *         "menu_category_id": "c9b1e7c2-1234-4f8a-9b2e-abcdef123456",
 *         "name": "John",
 *         "surname": "Doe",
 *         "phone": "+123456789",
 *         "restaurant_comment": "No onions"
 *       }
 *     ],
 *     "days": [
 *       {
 *         "intended_date": "2025-07-01T00:00:00.000Z",
 *         "delivery_date": "2025-07-01T12:00:00.000Z"
 *       }
 *     ],
 *     "weekdays": [
 *       {
 *         "intended_weekday": 1,
 *         "delivery_weekday": 1
 *       }
 *     ]
 *   } application/json
 * - @bodyRequired
 * - @response 200 - Daily meal subscription created successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "user_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "delivery_address_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "start_date": "2025-07-01T00:00:00.000Z",
 *     "end_date": null,
 *     "type": "DAYS",
 *     "status": "AWAITING_PAYMENT",
 *     "courier_comment": "Leave at the door",
 *     "created_at": "2025-07-01T00:00:00.000Z",
 *     "updated_at": "2025-07-01T00:00:00.000Z",
 *     "customers": [
 *       {
 *         "id": "uuid",
 *         "menu_category_id": "c9b1e7c2-1234-4f8a-9b2e-abcdef123456",
 *         "name": "John",
 *         "surname": "Doe",
 *         "phone": "+123456789",
 *         "restaurant_comment": "No onions"
 *       }
 *     ],
 *     "days": [
 *       {
 *         "id": "uuid",
 *         "intended_date": "2025-07-01T00:00:00.000Z",
 *         "delivery_date": "2025-07-01T12:00:00.000Z"
 *       }
 *     ],
 *     "weekdays": [
 *       {
 *         "id": "uuid",
 *         "intended_weekday": 1,
 *         "delivery_weekday": 1
 *       }
 *     ]
 *   }
 * - @response 500 - Error creating daily meal subscription
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 *
 * ./prisma/schema.prisma
 */

export async function createDailyMealSubscription(
	user_id: string,
	business_id: string,
	delivery_address_id: string,
	type: SUBSCRIPTION_TYPE,
	customers: Array<DailyMealsCartPerson>,
	start_date: Date | string,
	end_date?: Date | string | null,
	days?: Array<{
		intended_date: Date | string;
		delivery_date: Date | string;
	}>,
	weekdays?: Array<{
		intended_weekday: number;
		delivery_weekday: number;
	}>,
	courier_comment?: string | null
) {
	try {
		return await prisma.daily_meal_subscriptions.create({
			data: {
				user_id,
				business_id,
				delivery_address_id,
				start_date: new Date(start_date),
				end_date: end_date ? new Date(end_date) : null,
				type,
				courier_comment: courier_comment ?? null,
				customers: {
					create: customers.map((c) => ({
						daily_meal_category_id: c.daily_meal_category_id,
						first_name: c.first_name,
						last_name: c.last_name,
						telephone: c.telephone,
						restaurant_comment: c.restaurant_comment ?? null,
					})),
				},
				days:
					type === SUBSCRIPTION_TYPE.DATED && days
						? {
								create: days.map((d) => ({
									intended_date: new Date(d.intended_date),
									delivery_date: new Date(d.delivery_date),
								})),
							}
						: undefined,
				weekdays:
					type === SUBSCRIPTION_TYPE.RECURRING && weekdays
						? {
								create: weekdays.map((w) => ({
									intended_weekday: w.intended_weekday,
									delivery_weekday: w.delivery_weekday,
								})),
							}
						: undefined,
			},
			include: {
				customers: {
					include: {
						daily_meal_categories: true,
					},
				},
				days: true,
				weekdays: true,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error creating daily meal subscription: ${message}`);
	}
}

export async function getSubscriptionById(id: string, includeObj?: Prisma.daily_meal_subscriptionsInclude) {
	return await prisma.daily_meal_subscriptions.findUnique({
		where: { id },
		include: includeObj,
	});
}

export async function updateSubscriptionStatus(
	id: string,
	status: SUBSCRIPTION_STATUS,
	includeObj?: Prisma.daily_meal_subscriptionsInclude
) {
	return await prisma.daily_meal_subscriptions.update({
		where: { id },
		data: { status: status },
		include: includeObj,
	});
}

export default {
	getDailyMealSubscriptionsByBusinessId,
	getActiveDailyMealSubscriptionsByBusinessId,
	getDailyMealSubscriptionsByUserId,
	getTodayDailyMealSubscriptionsByBusinessId,
	createDailyMealSubscription,
	getSubscriptionById,
	updateSubscriptionStatus,
};
