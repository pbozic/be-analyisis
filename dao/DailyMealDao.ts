import { Prisma, SUBSCRIPTION_STATUS, SUBSCRIPTION_TYPE, DAILY_MEAL_INSTANCE_STATUS } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { DOCUMENT_TYPE } from '../lib/constants.js';
import { Timestamp, UUID } from '../schemas/primitives.js';
import type { DailyMealSubscriptionWithIncludesPrisma } from '../prisma/includes/dailyMealSubscriptions.js';
import dailyMealInstanceDefaultInclude from '../prisma/includes/dailyMealInstance.js';
import type { DailyMealInstanceWithIncludesPrisma } from '../prisma/includes/dailyMealInstance.js';
import {
	toDailyMealInstanceList,
	toDailyMealInstanceResponse,
} from '../schemas/dto/DailyMealInstance/dailyMealInstance.mappers.js';
import {
	toDailyMealSubscriptionList,
	toDailyMealSubscriptionResponse,
} from '../schemas/dto/DailyMealSubscription/dailyMealSubscription.mappers.js';
import { DailyMealSubscriptionDetail } from '../schemas/dto/DailyMeal/dailymeal.dto.js';
import { DailyMealsCartPersonWithPrice } from '../schemas/dto/DailyMealSubscription/dailymealSubscription.validators.js';
import { DailyMealInstanceResponse } from '../schemas/dto/DailyMealInstance/dailyMealInstance.dto.js';

const defaultIncludeObj = {
	user: true,
	daily_meal_module: true,
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
					menu_items: {
						include: {
							tax_rate: true,
						},
					},
				},
			},
			customer: true,
		},
		orderBy: {
			intended_date: 'asc',
		},
	},
	driver: {
		include: {
			user: true,
		},
	},
};

/**
 * Get active daily meal subscriptions by daily_meal_module_id
 * @param {UUID} daily_meal_module_id
 * @param {Prisma.daily_meal_subscriptionsWhereInput} args
 * @returns {DailyMealSubscriptionDetail[]}
 */
export async function getDailyMealSubscriptionsByModuleId(
	daily_meal_module_id: UUID,
	args: Prisma.daily_meal_subscriptionsWhereInput = {}
): Promise<DailyMealSubscriptionDetail[]> {
	const rows = await prisma.daily_meal_subscriptions.findMany({
		where: {
			daily_meal_module_id,
			...args,
		},
		include: {
			...defaultIncludeObj,
			daily_meal_module: false,
		},
		orderBy: { start_date: 'asc' },
	});

	try {
		return toDailyMealSubscriptionList(rows as DailyMealSubscriptionWithIncludesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}

/**
 * Get active daily meal subscriptions by daily_meal_module_id and optional start_date.
 * @param {UUID} daily_meal_module_id
 * @param {Timestamp} [start_date]
 * @returns {Promise<DailyMealSubscriptionDetail[]>}
 */
export async function getActiveDailyMealSubscriptionsByModuleId(
	daily_meal_module_id: UUID,
	start_date?: Timestamp
): Promise<DailyMealSubscriptionDetail[]> {
	const normalizedDate = start_date ? new Date(new Date(start_date).setUTCHours(0, 0, 0, 0)) : null;
	const rows = await prisma.daily_meal_subscriptions.findMany({
		where: {
			daily_meal_module_id,
			start_date: normalizedDate ? { gte: normalizedDate } : undefined,
			status: SUBSCRIPTION_STATUS.ACTIVE,
		},
		include: {
			...defaultIncludeObj,
			// daily_meal_instances: {
			// 	...defaultIncludeObj.daily_meal_instances,
			// 	where: {
			// 		status: { in: [DAILY_MEAL_INSTANCE_STATUS.PLANNED, DAILY_MEAL_INSTANCE_STATUS.DELIVERED] },
			// 		delivery_date: normalizedDate ? { gte: normalizedDate } : undefined,
			// 	},
			// },
			daily_meal_module: false,
		},
		orderBy: { start_date: 'asc' },
	});

	try {
		return toDailyMealSubscriptionList(rows as DailyMealSubscriptionWithIncludesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}

/**
 * Get daily meal subscriptions by user_id and optional start_date.
 * @param {UUID} user_id
 * @param {Timestamp} [start_date]
 * @returns {Promise<DailyMealSubscriptionDetail[]>}
 */
export async function getDailyMealSubscriptionsByUserId(
	user_id: UUID,
	start_date?: Timestamp
): Promise<DailyMealSubscriptionDetail[]> {
	const normalizedDate = start_date ? new Date(new Date(start_date).setUTCHours(0, 0, 0, 0)) : null;

	const rows = await prisma.daily_meal_subscriptions.findMany({
		where: {
			user_id,
			start_date: normalizedDate ? { gte: normalizedDate } : undefined,
		},
		include: {
			...defaultIncludeObj,
			daily_meal_module: {
				select: {
					daily_meal_module_id: true,
					daily_meal_module_group_name: true,
					name: true,
					telephone: true,
					email: true,
					daily_meals_days: true,
					daily_meals_delivery_mapping: true,
					delivery_address: true,
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
		},
		orderBy: { start_date: 'asc' },
	});

	try {
		return toDailyMealSubscriptionList(rows as DailyMealSubscriptionWithIncludesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}

/**
 * Get today's daily meal subscriptions by daily_meal_module_id.
 * @param {UUID} daily_meal_module_id
 * @returns {Promise<DailyMealSubscriptionDetail[]>}
 */
export async function getTodayDailyMealSubscriptionsByModuleId(
	daily_meal_module_id: UUID
): Promise<DailyMealSubscriptionDetail[]> {
	const todayStart = new Date();
	todayStart.setHours(0, 0, 0, 0);
	const todayEnd = new Date();
	todayEnd.setHours(23, 59, 59, 999);
	const rows = await prisma.daily_meal_subscriptions.findMany({
		where: {
			daily_meal_module_id,
			start_date: { lte: todayEnd },
			status: SUBSCRIPTION_STATUS.ACTIVE,
		},
		include: {
			...defaultIncludeObj,
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
							menu_items: {
								include: {
									tax_rate: true,
								},
							},
						},
					},
					customer: true,
					daily_meal_category_price: true,
				},
			},
		},
	});

	try {
		return toDailyMealSubscriptionList(rows as DailyMealSubscriptionWithIncludesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}

/**
 * Get daily meal subscriptions by grouped_id.
 * @param {UUID} grouped_id
 * @returns {Promise<DailyMealSubscriptionDetail[]>}
 */
export async function getDailyMealSubscriptionById(id: UUID): Promise<DailyMealSubscriptionDetail[]> {
	const rows = await prisma.daily_meal_subscriptions.findMany({
		where: { id },
		include: {
			user: true,
			daily_meals_module: true,
			delivery_address: true,
			customers: true,
			days: true,
			weekdays: true,
			daily_meal_instances: true,
		},
		orderBy: { start_date: 'asc' },
	});

	try {
		return toDailyMealSubscriptionList(rows as DailyMealSubscriptionWithIncludesPrisma[]);
	} catch (e) {
		return rows as any;
	}
}

/**
 * Create a daily meal subscription.
 * @param {UUID} user_id
 * @param {UUID} daily_meal_module_id
 * @param {UUID} delivery_address_id
 * @param {SUBSCRIPTION_TYPE} type
 * @param {Array<DailyMealsCartPersonWithPrice>} customers
 * @param {Date | string} start_date
 * @param {Date | string | null} end_date
 * @param {Array<{ intended_date: Date | string; delivery_date: Date | string; }>} [days]
 * @param {Array<{ intended_weekday: number; delivery_weekday: number; }>} [weekdays]
 * @param {string | null} [courier_comment]
 * @returns {Promise<DailyMealSubscriptionDetail>}
 */
export async function createDailyMealSubscription(
	user_id: UUID,
	daily_meal_module_id: UUID,
	delivery_address_id: UUID,
	type: SUBSCRIPTION_TYPE,
	customers: Array<DailyMealsCartPersonWithPrice>,
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
): Promise<DailyMealSubscriptionDetail> {
	try {
		const row = await prisma.daily_meal_subscriptions.create({
			data: {
				user: {
					connect: { user_id },
				},
				daily_meal_module: {
					connect: { daily_meal_module_id },
				},
				delivery_address: {
					connect: { address_id: delivery_address_id },
				},
				start_date: new Date(start_date),
				end_date: end_date ? new Date(end_date) : null,
				type,
				courier_comment: courier_comment ?? null,
				customers: {
					create: customers.map((c) => ({
						daily_meal_category_id: c.daily_meal_category_id,
						daily_meal_category_price_id: c.daily_meal_category_price_id,
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

		try {
			return toDailyMealSubscriptionResponse(row as DailyMealSubscriptionWithIncludesPrisma) as any;
		} catch (e) {
			return row as any;
		}
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
/**
 * Get subscription by id.
 *
 * @param {UUID} id
 * @param {Prisma.daily_meal_subscriptionsInclude} [includeObj]
 * @returns {Promise<DailyMealSubscriptionDetail | null>}
 */
export async function getSubscriptionById(
	id: UUID,
	includeObj?: Prisma.daily_meal_subscriptionsInclude
): Promise<DailyMealSubscriptionDetail | null> {
	const row = await prisma.daily_meal_subscriptions.findUnique({
		where: { id },
		include: includeObj || defaultIncludeObj,
	});

	if (!row) return null;

	try {
		return toDailyMealSubscriptionResponse(row as DailyMealSubscriptionWithIncludesPrisma) as any;
	} catch (e) {
		throw new Error('Failed to get subscription by id: ' + (e as Error)?.message);
	}
}
/**
 * Update subscription status.
 *
 * @param {UUID} id
 * @param {SUBSCRIPTION_STATUS} status
 * @param {Prisma.daily_meal_subscriptionsInclude} [includeObj]
 * @returns {Promise<DailyMealSubscriptionDetail>}
 */
export async function updateSubscriptionStatus(
	id: UUID,
	status: SUBSCRIPTION_STATUS,
	includeObj?: Prisma.daily_meal_subscriptionsInclude
): Promise<DailyMealSubscriptionDetail> {
	const row = await prisma.daily_meal_subscriptions.update({
		where: { id },
		data: { status: status },
		include: includeObj || defaultIncludeObj,
	});

	try {
		return toDailyMealSubscriptionResponse(row as DailyMealSubscriptionWithIncludesPrisma);
	} catch (e) {
		throw new Error('Failed to update subscription status: ' + (e as Error)?.message);
	}
}
/**
 * Connect subscription with delivery driver.
 *
 * @param {UUID} id
 * @param {UUID} driver_id
 * @param {Prisma.daily_meal_subscriptionsInclude} [includeObj]
 * @returns {Promise<DailyMealSubscriptionDetail>}
 */
export async function connectSubscriptionWithDriver(
	id: UUID,
	driver_id: UUID,
	includeObj?: Prisma.daily_meal_subscriptionsInclude
): Promise<DailyMealSubscriptionDetail> {
	const row = await prisma.daily_meal_subscriptions.update({
		where: { id },
		data: {
			driver: {
				connect: {
					driver_id: driver_id,
				},
			},
		},
		include: includeObj || defaultIncludeObj,
	});

	try {
		return toDailyMealSubscriptionResponse(row as DailyMealSubscriptionWithIncludesPrisma) as any;
	} catch (e) {
		throw new Error('Failed to connect subscription with driver: ' + (e as Error)?.message);
	}
}
/**
 * Update daily meal instances status.
 *
 * @param {UUID[]} instance_ids
 * @param {DAILY_MEAL_INSTANCE_STATUS} status
 * @returns {Promise<Prisma.BatchPayload>}
 */
export async function updateDailyMealInstances(
	instance_ids: UUID[],
	status: DAILY_MEAL_INSTANCE_STATUS
): Promise<DailyMealInstanceResponse[]> {
	// Update statuses
	await prisma.daily_meal_instances.updateMany({
		where: {
			id: { in: instance_ids },
		},
		data: { status: status },
	});

	// Fetch updated rows with includes for mapping
	const rows = await prisma.daily_meal_instances.findMany({
		where: { id: { in: instance_ids } },
		include: dailyMealInstanceDefaultInclude,
	});

	try {
		return toDailyMealInstanceList(rows as DailyMealInstanceWithIncludesPrisma[]);
	} catch (e: any) {
		// Do not return raw Prisma objects — surface a mapping error instead
		throw new Error('Failed to map updated daily meal instances to DTOs: ' + (e?.message ?? String(e)));
	}
}
/**
 * Update daily meal instance status by id.
 *
 * @param {UUID} instance_id
 * @param {DAILY_MEAL_INSTANCE_STATUS} status
 * @returns {Promise<daily_meal_instances>}
 */
export async function updateDailyMealInstanceStatusById(
	instance_id: UUID,
	status: DAILY_MEAL_INSTANCE_STATUS
): Promise<DailyMealInstanceResponse> {
	const row = await prisma.daily_meal_instances.update({
		where: {
			id: instance_id,
		},
		data: { status: status },
		include: dailyMealInstanceDefaultInclude,
	});

	try {
		// Map to public response DTO — never return raw Prisma objects
		return toDailyMealInstanceResponse(row as DailyMealInstanceWithIncludesPrisma);
	} catch (e: any) {
		throw new Error('Failed to map daily meal instance to DTO: ' + (e?.message ?? String(e)));
	}
}

export default {
	getDailyMealSubscriptionsByBusinessId: getDailyMealSubscriptionsByModuleId,
	getActiveDailyMealSubscriptionsByBusinessId: getActiveDailyMealSubscriptionsByModuleId,
	getDailyMealSubscriptionsByUserId,
	getTodayDailyMealSubscriptionsByBusinessId: getTodayDailyMealSubscriptionsByModuleId,
	createDailyMealSubscription,
	getSubscriptionById,
	updateSubscriptionStatus,
	updateDailyMealInstances,
	connectSubscriptionWithDriver,
	updateDailyMealInstanceStatusById,
};
