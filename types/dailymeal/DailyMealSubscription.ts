/**
 *
 * - POST /delivery/orders/daily_meals/subscription/payment
 * - @tag Delivery
 * - @summary Create a daily meals subscription payment
 * - @description Creates a payment intent for a daily meals subscription, creates the subscriptions, and returns the grouped_id and payment intent.
 * - @operationId dailyMealsSubscriptionPayment
 * - @bodyDescription The daily meals subscription payment details to create
 * - @bodyContent {
 *     "cart": {
 *       "isRecurring": false,
 *       "daysOfWeek": [1, 3, 5],
 *       "dates": ["2025-07-01", "2025-07-03"],
 *       "peopleData": [
 *         {
 *           "first_name": "John",
 *           "last_name": "Doe",
 *           "telephone": "+123456789",
 *           "menu_category_id": "c9b1e7c2-1234-4f8a-9b2e-abcdef123456"
 *         }
 *       ]
 *     },
 *     "delivery_location": {
 *       "address": "123 Main St",
 *       "coordinates": { "longitude": 15.9819, "latitude": 45.8150 }
 *     },
 *     "details": {
 *       "total_price": 100.0,
 *       "delivery_cost": 10.0,
 *       "sub_total_price": 90.0,
 *       "business_id": "string"
 *     },
 *     "payment": {
 *       "payment_type": "CARD",
 *       "payment_method_id": "string"
 *     },
 *     "return_url": "https://example.com/return",
 *     "allow_credits_usage": true
 *   } application/json
 * - @bodyRequired
 * - @response 200 - Daily meals subscription payment created successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "status": "Success",
 *     "grouped_id": "string",
 *     "payment_intent": { "id": "pi_...", ... }
 *   }
 * - @response 500 - Error creating daily meals subscription payment
 * - @prisma_model users
 * - @prisma_model business
 * - @prisma_model payments
 * - @prisma_model daily_meals_subscriptions
 * - @prisma_model address
 * - @prisma_model payment_splits
 * - @prisma_model wallet_funds
 * - @prisma_model payment_intent_logs
 * - @prisma_model menu
 * - @prisma_model menu_categories
 *
 * ./prisma/schema.prisma
 */

import { z } from 'zod';
import { PAYMENT_METHOD } from '@prisma/client';

export const DailyMealsCartPersonSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	telephone: z.string(),
	daily_meal_category_id: z.string().uuid(),
	restaurant_comment: z.string(),
});

export const DailyMealsCartSchema = z.object({
	start_date: z.string().datetime(),
	end_date: z.string().datetime().nullable().optional(),
	isRecurring: z.boolean(),
	daysOfWeek: z.array(z.number().int().min(0).max(6)),
	dates: z.array(z.string().datetime()),
	peopleData: z.array(DailyMealsCartPersonSchema),
	courier_comment: z.string(),
});

export const DailyMealsSubscriptionRequestSchema = z.object({
	cart: DailyMealsCartSchema,
	delivery_location: z.object({
		address: z.string(),
		coordinates: z.object({
			longitude: z.string(),
			latitude: z.string(),
		}),
	}),
	details: z.object({
		total_price: z.number(),
		delivery_cost: z.number(),
		sub_total_price: z.number(),
		box_fee: z.number(),
		business_id: z.string().uuid(),
	}),
	payment: z.object({
		payment_type: z.nativeEnum(PAYMENT_METHOD),
		payment_method_id: z.string().nullable(),
		status: z.string().optional(),
		credit_card: z
			.object({
				issuer: z.string(),
				number: z.string(),
			})
			.optional(),
	}),
	return_url: z.string().optional(),
	allow_credits_usage: z.boolean(),
});

export const GetUserDailyMealSubscriptionsSchema = z.object({
	start_date: z.string().datetime().optional(),
});

export type GetUserDailyMealSubscriptionsrequest = z.infer<typeof GetUserDailyMealSubscriptionsSchema>;
export type DailyMealsCartPerson = z.infer<typeof DailyMealsCartPersonSchema>;
export type DailyMealsCart = z.infer<typeof DailyMealsCartSchema>;
export type DailyMealsSubscriptionRequest = z.infer<typeof DailyMealsSubscriptionRequestSchema>;
