import { Request, Response } from 'express';
import {
	SPLIT_DESTINATION_TYPE,
	PAYMENT_STATUS,
	SUBSCRIPTION_STATUS,
	SUBSCRIPTION_TYPE,
	DAILY_MEAL_INSTANCE_STATUS,
	subscription,
	daily_meal_subscription_customers,
	TRANSFER_GROUP_TYPE,
	payment_splits,
	SPLIT_STATUS,
} from '@prisma/client';

import UsersDao from '../dao/User.js';
import BusinessDao from '../dao/Business.js';
import PaymentHelpers from '../lib/paymentHelpers.js';
import { ValidatedRequest } from '../types/validatedRequest.js';
import { DailyMealsSubscriptionRequest } from '../types/dailymeal/DailyMealSubscription.ts';
import DailyMealDao from '../dao/DailyMealDao.ts';
import AddressDao from '../dao/Address.js';
import { DAILY_MEAL_DELIVERY_COST_CENTS, RESTAURANT_SHARE_PERC } from '../lib/constants.js';
import dailyMealHelpers, { mapDateToEarlierWeekday } from '../lib/dailyMealHelpers.ts';
import prisma from '../prisma/prisma.js';
import stripe from '../lib/stripe.js';
import DailyMealCategoryDao from '../dao/DailyMealCategory.ts';

/**
 *
 * - POST /delivery/orders/daily_meals/subscription/payment
 * - @tag Delivery
 * - @summary Create a daily meals subscription payment
 * - @description Creates a payment intent for a daily meals subscription, creates the subscription (with nested customers, days, weekdays), and returns the subscription id and payment intent.
 * - @operationId dailyMealsSubscriptionPayment
 * - @bodyDescription The daily meals subscription payment details to create
 * - @bodyContent {
 *     "cart": {
 *       "start_date": "2025-07-01T00:00:00.000Z",
 *       "end_date": null,
 *       "isRecurring": false,
 *       "daysOfWeek": [1, 3, 5],
 *       "dates": ["2025-07-01T00:00:00.000Z", "2025-07-03T00:00:00.000Z"],
 *       "peopleData": [
 *         {
 *           "first_name": "John",
 *           "last_name": "Doe",
 *           "telephone": "+123456789",
 *           "menu_category_id": "c9b1e7c2-1234-4f8a-9b2e-abcdef123456",
 *           "restaurant_comment": "No onions"
 *         }
 *       ],
 *       "courier_comment": "Leave at the door"
 *     },
 *     "details": {
 *       "total_price": 100.0,
 *       "delivery_cost": 10.0,
 *       "sub_total_price": 90.0,
 *       "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf"
 *     },
 *     "delivery_location": {
 *       "address": "123 Main St",
 *       "coordinates": { "latitude": 45.8150, "longitude": 15.9819 }
 *     },
 *     "payment": {
 *       "payment_type": "CARD",
 *       "payment_method_id": "pm_123456789"
 *     },
 *     "return_url": "https://example.com/return",
 *     "allow_credits_usage": true
 *   } application/json
 * - @bodyRequired
 * - @response 200 - Daily meals subscription payment created successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "status": "Success",
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "payment_intent": { "id": "pi_...", ... }
 *   }
 * - @response 500 - Error creating daily meals subscription payment
 * - @prisma_model users
 * - @prisma_model business
 * - @prisma_model payments
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model address
 * - @prisma_model payment_splits
 * - @prisma_model wallet_funds
 * - @prisma_model payment_intent_logs
 *
 * ./prisma/schema.prisma
 */
export async function dailyMealsSubscriptionPayment(
	req: ValidatedRequest<DailyMealsSubscriptionRequest>,
	res: Response
): Promise<void> {
	const {
		cart,
		details: { total_price, delivery_cost, sub_total_price, business_id },
		delivery_location,
		payment,
		return_url,
		allow_credits_usage,
	} = req.body;
	const { payment_type, payment_method_id } = payment ? payment : {};

	let created_payment = null;
	try {
		const user = await UsersDao.getUserById(req.user?.user_id);
		const business = await BusinessDao.getBusinessById(business_id);
		const deliverydaymapping: Record<number, number> = business.daily_meals_delivery_mapping || {};

		const subscriptions = await DailyMealDao.getDailyMealSubscriptionsByBusinessId(business_id, {
			status: {
				in: [SUBSCRIPTION_STATUS.ACTIVE, SUBSCRIPTION_STATUS.AWAITING_PAYMENT],
			},
		});
		const customers = subscriptions.flatMap(
			(sub: subscription & { customers: daily_meal_subscription_customers }) => sub.customers
		);
		if (customers.length > business.maximum_daily_meals_subscribers) {
			res.status(400).json({ message: `Business has reached the maximum number of daily meal subscribers` });
			return;
		}
		const today = new Date();
		const dailyMealCategoryPriceMap = new Map<string, string>();
		const daily_meal_categories = await DailyMealCategoryDao.getDailyMealCategoriesForBusiness(business_id, true);

		for (const dmc of daily_meal_categories) {
			const dmc_price = DailyMealCategoryDao.getDailyMealCategoryPriceForDate(dmc, today);
			if (!dmc_price) {
				throw new Error(`No valid price for dmc: ${dmc.daily_meal_category_id}`);
			}
			dailyMealCategoryPriceMap.set(dmc.daily_meal_category_id, dmc_price.daily_meal_category_prices_id);
		}

		const restaurant_acc = business.stripe_account_id;
		const delivery_address = await AddressDao.addAddress({
			address: delivery_location.address,
			latitude: `${delivery_location.coordinates.latitude}`,
			longitude: `${delivery_location.coordinates.longitude}`,
		});

		const new_subscription = await DailyMealDao.createDailyMealSubscription(
			user.user_id,
			business_id,
			delivery_address.address_id,
			cart.isRecurring ? SUBSCRIPTION_TYPE.RECURRING : SUBSCRIPTION_TYPE.DATED,
			cart.peopleData.map((person) => ({
				...person,
				daily_meal_category_price_id: dailyMealCategoryPriceMap.get(person.daily_meal_category_id)!,
			})),
			cart.start_date,
			cart.end_date,
			!cart.isRecurring
				? cart.dates.map((datestr) => {
						const date = new Date(datestr);
						date.setUTCHours(0, 0, 0, 0);
						return {
							intended_date: date,
							delivery_date: mapDateToEarlierWeekday(date, deliverydaymapping),
						};
					})
				: [],
			cart.isRecurring
				? cart.daysOfWeek.map((day_i) => ({
						intended_weekday: day_i,
						delivery_weekday: deliverydaymapping[day_i] || day_i,
					}))
				: [],
			cart.courier_comment
		);

		//TODO: calculate price form menu_categories linked to the created subscription customers

		//TODO: verify price
		const TOTAL_PRICE_CENTS = Math.round(total_price * 100);

		let payment_response = null;
		if (new_subscription.type === SUBSCRIPTION_TYPE.DATED) {
			if (!payment_type) {
				throw new Error('Missing Payment type');
			}
			payment_response = await PaymentHelpers.createPaymentHelper(
				user.user_id,
				TOTAL_PRICE_CENTS,
				'DELIVERY',
				'daily_meals_subscription_payment',
				payment_type,
				payment_method_id,
				'automatic',
				allow_credits_usage,
				cart.dates.map(() => ({
					destination_type: SPLIT_DESTINATION_TYPE.DRIVER,
					value: DAILY_MEAL_DELIVERY_COST_CENTS,
				})),
				[
					{
						destination_type: SPLIT_DESTINATION_TYPE.MERCHANT,
						destination_id: restaurant_acc,
						value: RESTAURANT_SHARE_PERC,
					},
				],
				return_url,
				new_subscription.id
			);

			created_payment = payment_response?.payment;
			if (created_payment.status === PAYMENT_STATUS.SUCCEEDED) {
				const updated_sub = await dailyMealHelpers.activateSubscriptionById(new_subscription.id);
			}
		}

		const payment_intent = payment_response?.payment_intent;

		res.status(200).json({
			status: 'Success',
			id: new_subscription.id,
			payment_intent,
		});
		return;
	} catch (e) {
		console.error('Error creating daily meals subscription payment', e);
		if (created_payment) {
			try {
				await PaymentHelpers.handlePaymentRefund(created_payment);
			} catch (error) {
				console.error('Error cleaning daily meals subscription payment', error);
			}
		}
		res.status(500).json(e);
	}
}

/**
 *
 * - GET /delivery/orders/daily_meals/user
 * - @tag Delivery
 * - @summary Get all daily meal subscriptions for the current user
 * - @description Returns all daily meal subscriptions for the authenticated user, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances.
 * - @operationId getUserDailyMealSubscriptions
 * - @response 200 - List of daily meal subscriptions for the current user
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json [
 *     {
 *       "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "user_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "delivery_address_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "start_date": "2025-07-01T00:00:00.000Z",
 *       "end_date": null,
 *       "type": "DATED",
 *       "status": "ACTIVE",
 *       "courier_comment": "Leave at the door",
 *       "created_at": "2025-07-01T00:00:00.000Z",
 *       "updated_at": "2025-07-01T00:00:00.000Z",
 *       "user": { ... },
 *       "business": { ... },
 *       "delivery_address": { ... },
 *       "customers": [ ... ],
 *       "days": [ ... ],
 *       "weekdays": [ ... ],
 *       "daily_meal_instances": [ ... ]
 *     }
 *   ]
 * - @response 500 - Error fetching daily meal subscriptions
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model users
 * - @prisma_model business
 * - @prisma_model addresses
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model daily_meal_instances
 *
 * ./prisma/schema.prisma
 */
export async function getUserDailyMealSubscriptions(
	req: ValidatedRequest<{ start_date?: string }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ message: 'Unauthorized' });
			return;
		}
		const { start_date } = req.body;
		const subscriptions = await DailyMealDao.getDailyMealSubscriptionsByUserId(user_id, start_date);
		res.status(200).json(subscriptions);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error fetching daily meal subscriptions', error: message });
	}
}

/**
 *
 * - GET /delivery/orders/daily_meals/business/{business_id}
 * - @tag Delivery
 * - @summary Get active daily meal subscriptions for a business
 * - @description Returns all daily meal subscriptions for the given business, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances. Optionally filter by start_date in the request body.
 * - @operationId getDailyMealsSubscriptionsByBusinessId
 * - @pathParam {string} business_id - The ID of the business to fetch subscriptions for
 * - @bodyDescription Optionally filter by start_date (ISO string)
 * - @bodyContent {
 *     "start_date": "2025-07-01T00:00:00.000Z"
 *   } application/json
 * - @bodyRequired false
 * - @response 200 - List of daily meal subscriptions for the business
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json [
 *     {
 *       "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "user_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "delivery_address_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "start_date": "2025-07-01T00:00:00.000Z",
 *       "end_date": null,
 *       "type": "DATED",
 *       "status": "ACTIVE",
 *       "courier_comment": "Leave at the door",
 *       "created_at": "2025-07-01T00:00:00.000Z",
 *       "updated_at": "2025-07-01T00:00:00.000Z",
 *       "user": { ... },
 *       "business": { ... },
 *       "delivery_address": { ... },
 *       "customers": [ ... ],
 *       "days": [ ... ],
 *       "weekdays": [ ... ],
 *       "daily_meal_instances": [ ... ]
 *     }
 *   ]
 * - @response 500 - Error fetching daily meal subscriptions
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model users
 * - @prisma_model business
 * - @prisma_model addresses
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model daily_meal_instances
 *
 * ./prisma/schema.prisma
 */
export async function getActiveDailyMealsSubscriptionsByBusinessId(
	req: ValidatedRequest<{ start_date?: string }, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const { start_date } = req.body;
		const subscriptions = await DailyMealDao.getActiveDailyMealSubscriptionsByBusinessId(business_id, start_date);
		res.status(200).json(subscriptions);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error fetching active daily meal subscriptions', error: message });
	}
}

/**
 *
 * - GET /business/daily_meal_subscriptions/{business_id}
 * - @tag Delivery
 * - @summary Get all daily meal subscriptions for a business
 * - @description Returns all daily meal subscriptions for the given business, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances. Optionally filter by start_date in the request body.
 * - @operationId getDailyMealsSubscriptionsByBusinessId
 * - @pathParam {string} business_id - The ID of the business to fetch subscriptions for
 * - @bodyDescription Optionally filter by start_date (ISO string)
 * - @bodyContent {
 *     "start_date": "2025-07-01T00:00:00.000Z"
 *   } application/json
 * - @bodyRequired false
 * - @response 200 - List of daily meal subscriptions for the business
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json [
 *     {
 *       "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "user_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "delivery_address_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *       "start_date": "2025-07-01T00:00:00.000Z",
 *       "end_date": null,
 *       "type": "DATED",
 *       "status": "AWAITING_PAYMENT",
 *       "courier_comment": "Leave at the door",
 *       "created_at": "2025-07-01T00:00:00.000Z",
 *       "updated_at": "2025-07-01T00:00:00.000Z",
 *       "user": { ... },
 *       "business": { ... },
 *       "delivery_address": { ... },
 *       "customers": [ ... ],
 *       "days": [ ... ],
 *       "weekdays": [ ... ],
 *       "daily_meal_instances": [ ... ]
 *     }
 *   ]
 * - @response 500 - Error fetching daily meal subscriptions
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model users
 * - @prisma_model business
 * - @prisma_model addresses
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model daily_meal_instances
 *
 * ./prisma/schema.prisma
 */
export async function getDailyMealsSubscriptionsByBusinessId(
	req: ValidatedRequest<unknown, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id } = req.params;
		const subscriptions = await DailyMealDao.getDailyMealSubscriptionsByBusinessId(business_id);
		res.status(200).json(subscriptions);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error fetching active daily meal subscriptions', error: message });
	}
}

/**
 *
 * - PATCH /delivery/orders/daily_meals/subscription/{subscription_id}/activate
 * - @tag Delivery
 * - @summary Activate a daily meal subscription by ID
 * - @description Activates a daily meal subscription by its ID, marking it as active and ready for delivery.
 * - @operationId activateSubscriptionById
 * - @pathParam {string} subscription_id - The ID of the daily meal subscription to activate
 * - @response 200 - Daily meal subscription activated successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "status": "ACTIVE",
 *     "updated_at": "2025-07-01T00:00:00.000Z",
 *     "daily_meal_instances": [ ... ]
 *   }
 * - @response 500 - Error activating daily meal subscription
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model daily_meal_instances
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * ./prisma/schema.prisma
 */
export async function activateSubscriptionById(
	req: ValidatedRequest<unknown, { subscription_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { subscription_id } = req.params;
		const updated_subscription = await dailyMealHelpers.activateSubscriptionById(subscription_id);
		res.status(200).json(updated_subscription);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error activating daily meal subscription', error: message });
	}
}

/**
 * - PATCH /delivery/orders/daily_meals/subscription/{subscription_id}/cancel
 * - @tag Delivery
 * - @summary Cancel a daily meal subscription by ID
 * - @description Cancels a daily meal subscription by its ID, marking it as canceled and updating all related daily meal instances to CANCELED status.
 * - @operationId cancelSubscriptionById
 * - @pathParam {string} subscription_id - The ID of the daily meal subscription to cancel
 * - @response 200 - Daily meal subscription canceled successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "status": "CANCELED",
 *     "updated_at": "2025-07-01T00:00:00.000Z",
 *     "daily_meal_instances": [ ... ]
 *   }
 * - @response 500 - Error canceling daily meal subscription
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model daily_meal_instances
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * ./prisma/schema.prisma
 */
export async function cancelSubscriptionById(
	req: ValidatedRequest<unknown, { subscription_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { subscription_id } = req.params;
		const updated_subscription = await dailyMealHelpers.cancelSubscriptionById(subscription_id);
		res.status(200).json(updated_subscription);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error canceling daily meal subscription', error: message });
	}
}

/**
 * - PATCH /delivery/orders/daily_meals/instance/{instance_id}/cancel
 * - @tag Delivery
 * - @summary Cancel a daily meal instance by ID
 * - @description Cancels a daily meal instance by its ID, marking it as canceled.
 * - @operationId cancelDailyMealInstanceById
 * - @pathParam {string} instance_id - The ID of the daily meal instance to cancel
 * - @response 200 - Daily meal instance canceled successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "status": "CANCELED",
 *     "updated_at": "2025-07-01T00:00:00.000Z",
 *     "daily_meal_subscription_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "daily_meal_subscription": { ... },
 *     "daily_meal_subscription_customer": { ... },
 *     "daily_meal_subscription_day": { ... },
 *     "daily_meal_subscription_weekday": { ... },
 *     "delivery_address": { ... },
 *     "created_at": "2025-07-01T00:00:00.000Z",
 *     "updated_at": "2025-07-01T00:00:00.000Z"
 * *   }
 * - @response 500 - Error canceling daily meal instance
 * - @prisma_model daily_meal_instances
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model addresses
 * ./prisma/schema.prisma
 */
export async function cancelDailyMealInstanceById(
	req: ValidatedRequest<unknown, { instance_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { instance_id } = req.params;
		let instance = await prisma.daily_meal_instances.findUnique({
			where: { id: instance_id },
			include: {
				daily_meal_category_price: true,
				subscription: {
					include: {
						payment: {
							include: {
								payment_splits: true,
							},
						},
					},
				},
			},
		});
		if (instance.status !== DAILY_MEAL_INSTANCE_STATUS.PLANNED) {
			res.status(400).json({ message: 'Daily meal instance is not in a cancellable state' });
			return;
		}

		if (instance.subscription.type === SUBSCRIPTION_TYPE.DATED) {
			const deliveryDateStart = new Date(instance.delivery_date);
			deliveryDateStart.setHours(0, 0, 0, 0);
			const deliveryDateEnd = new Date(instance.delivery_date);
			deliveryDateEnd.setHours(23, 59, 59, 999);
			const remaining_dmi_exist = !!(await prisma.daily_meal_instances.findFirst({
				where: {
					id: { not: instance.id },
					subscription_id: instance.subscription_id,
					delivery_date: {
						gte: deliveryDateStart,
						lte: deliveryDateEnd,
					},
					status: DAILY_MEAL_INSTANCE_STATUS.PLANNED,
				},
			}));
			const restaurant_business_stripe = await BusinessDao.getBusinessStripeByBusinessId(
				instance.subscription.business_id
			);

			const price = instance.daily_meal_category_price.price;
			const amount_merchant = Math.floor((price * RESTAURANT_SHARE_PERC) / 100);
			const amount_platform = price - amount_merchant;
			let amount_driver = 0;
			if (!remaining_dmi_exist) {
				const first_available_driver_split = instance.subscription.payment.payment_splits.find(
					(split: payment_splits) =>
						split.destination_type === SPLIT_DESTINATION_TYPE.DRIVER &&
						split.status === SPLIT_STATUS.RESERVED
				);
				if (!first_available_driver_split) {
					console.warn('No available driver split left but there are remaining instances for the day.');
					throw new Error('No available driver split left but there are remaining instances for the day.');
				}
				amount_driver =
					first_available_driver_split.amount_regular + first_available_driver_split.amount_credits;
			}

			const splitDefs: Array<{
				destination_type: SPLIT_DESTINATION_TYPE;
				destination_id?: string;
				new_destination_id?: string;
				amount: number;
			}> = [
				{
					destination_type: SPLIT_DESTINATION_TYPE.MERCHANT,
					destination_id: restaurant_business_stripe,
					amount: amount_merchant,
				},
				{
					destination_type: SPLIT_DESTINATION_TYPE.PLATFORM,
					destination_id: 'platform',
					amount: amount_platform,
				},
			];
			if (!remaining_dmi_exist) {
				splitDefs.push({
					destination_type: SPLIT_DESTINATION_TYPE.DRIVER,
					amount: amount_driver,
				});
			}
			console.log(splitDefs);
			await PaymentHelpers.createAndProcessTransferGroupSplits(
				instance.subscription.payment.payment_id,
				splitDefs,
				TRANSFER_GROUP_TYPE.REFUND,
				0.9
			);
		}

		instance = await prisma.daily_meal_instances.update({
			where: { id: instance_id },
			data: { status: DAILY_MEAL_INSTANCE_STATUS.CANCELED },
		});
		res.status(200).json(instance);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error canceling daily meal instance', error: message });
	}
}

/**
 * - GET /delivery/orders/daily_meals/subscription/{subscription_id}
 * - @tag Delivery
 * - @summary Get a daily meal subscription by ID
 * - @description Returns a daily meal subscription by its ID, including related user, business, delivery_address, customers, days, weekdays, and daily_meal_instances.
 * - @operationId getSubscriptionById
 * - @pathParam {string} subscription_id - The ID of the daily meal subscription to fetch
 * - @response 200 - Daily meal subscription found
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "user_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "business_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "delivery_address_id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "start_date": "2025-07-01T00:00:00.000Z",
 *     "end_date": null,
 *     "type": "DATED",
 *     "status": "ACTIVE",
 *     "courier_comment": "Leave at the door",
 *     "created_at": "2025-07-01T00:00:00.000Z",
 *     "updated_at": "2025-07-01T00:00:00.000Z",
 *     "user": { ... },
 *     "business": { ... },
 *     "delivery_address": { ... },
 *     "customers": [ ... ],
 *     "days": [ ... ],
 *     "weekdays": [ ... ],
 *     "daily_meal_instances": [ ... ],
 *     "payment": { ... }
 *   }
 * - @response 404 - Daily meal subscription not found
 * - @responseContent {object} 404.application/json
 * - @responseExample 404.application/json {
 *     "message": "Daily meal subscription not found"
 *   }
 * - @response 500 - Error fetching daily meal subscription
 * - @responseContent {object} 500.application/json
 * - @responseExample 500.application/json {
 *     "message": "Error fetching daily meal subscription",
 *     "error": "Error message here"
 *   }
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model users
 * - @prisma_model business
 * - @prisma_model addresses
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model daily_meal_instances
 * - @prisma_model payments
 * ./prisma/schema.prisma
 */
export async function getSubscriptionById(
	req: ValidatedRequest<unknown, { subscription_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { subscription_id } = req.params;
		const subscription = await DailyMealDao.getSubscriptionById(subscription_id);
		if (!subscription) {
			res.status(400).json({ message: 'Daily meal subscription not found' });
			return;
		}
		res.status(200).json(subscription);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error fetching daily meal subscription', error: message });
	}
}

/**
 * - PATCH /delivery/orders/daily_meals/subscription/{subscription_id}/assign_driver
 * - @tag Delivery
 * - @summary Assign a delivery driver to a daily meal subscription
 * - @description Assigns a delivery driver to a daily meal subscription by its ID, updating the subscription with the driver's ID.
 * - @operationId assignDeliveryDriverToSubscription
 * - @pathParam {string} subscription_id - The ID of the daily meal subscription to assign a driver to
 * - @bodyDescription The delivery driver ID to assign
 * - @bodyContent {
 *     "delivery_driver_id": "driver_id_here"
 *   } application/json
 * - @bodyRequired true
 * - @response 200 - Delivery driver assigned to daily meal subscription successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "id": "b6842fce-5e7f-4ee6-9467-56b3654475cf",
 *     "delivery_driver_id": "driver_id_here",
 *     "updated_at": "2025-07-01T00:00:00.000Z",
 *     "daily_meal_instances": [ ... ]
 *   }
 * - @response 500 - Error assigning delivery driver to daily meal subscription
 * - @responseContent {object} 500.application/json
 * - @responseExample 500.application/json {
 *     "message": "Error assigning delivery driver to subscription",
 *     "error": "Error message here"
 *   }
 * - @prisma_model daily_meal_subscriptions
 * - @prisma_model daily_meal_instances
 * - @prisma_model daily_meal_subscription_customers
 * - @prisma_model daily_meal_subscription_days
 * - @prisma_model daily_meal_subscription_weekdays
 * - @prisma_model delivery_drivers
 * ./prisma/schema.prisma
 */
export async function assignDeliveryDriverToSubscription(
	req: ValidatedRequest<{ delivery_driver_id: string }, { subscription_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { subscription_id } = req.params;
		const { delivery_driver_id } = req.body;
		const updated_subscription = await DailyMealDao.connectSubscriptionWithDriver(
			subscription_id,
			delivery_driver_id
		);
		res.status(200).json(updated_subscription);
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error assigning delivery driver to subscription', error: message });
	}
}

export default {
	dailyMealsSubscriptionPayment,
	getUserDailyMealSubscriptions,
	getActiveDailyMealsSubscriptionsByBusinessId,
	getDailyMealsSubscriptionsByBusinessId,
	activateSubscriptionById,
	cancelSubscriptionById,
	cancelDailyMealInstanceById,
	getSubscriptionById,
	assignDeliveryDriverToSubscription,
};
