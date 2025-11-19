import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { PAYMENT_METHOD } from '@prisma/client';

import { PhoneNumber, Timestamp, UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

export const DailyMealsCartPersonSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	telephone: PhoneNumber,
	daily_meal_category_id: UUID,
	restaurant_comment: z.string(),
});

export const DailyMealsCartSchema = z.object({
	start_date: Timestamp,
	end_date: Timestamp.nullable().optional(),
	isRecurring: z.boolean(),
	daysOfWeek: z.array(z.number().int().min(0).max(6)),
	dates: z.array(Timestamp),
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
		daily_meals_module_id: UUID,
	}),
	payment: z
		.object({
			payment_type: z.nativeEnum(PAYMENT_METHOD),
			payment_method_id: z.string().nullable(),
			status: z.string().optional(),
			credit_card: z
				.object({
					issuer: z.string(),
					number: z.string(),
				})
				.optional(),
		})
		.nullable(),
	return_url: z.string().optional(),
	allow_credits_usage: z.boolean(),
});

export const DailyMealsSubscriptionQuerySchema = z.object({
	ANALYTICS_PARAM_PROMO_WORDS: z.array(z.string()).optional(),
	ANALYTICS_PARAM_PROMO_SECTION: z.string().optional(),
	ANALYTICS_PARAM_PROMO_AD: z.string().optional(),
});

export const GetUserDailyMealSubscriptionsSchema = z.object({
	start_date: Timestamp.optional(),
});

export const AssignDailyMealSubscriptionDriverSchema = z.object({
	driver_id: UUID,
});

export type GetUserDailyMealSubscriptionsRequest = z.infer<typeof GetUserDailyMealSubscriptionsSchema>;
export type DailyMealsCartPerson = z.infer<typeof DailyMealsCartPersonSchema>;
export type DailyMealsCartPersonWithPrice = DailyMealsCartPerson & { daily_meal_category_price_id: UUID };
export type DailyMealsCart = z.infer<typeof DailyMealsCartSchema>;
export type DailyMealsSubscriptionRequest = z.infer<typeof DailyMealsSubscriptionRequestSchema>;
export type DailyMealsSubscriptionQuery = z.infer<typeof DailyMealsSubscriptionQuerySchema>;
export type AssignDailyMealSubscriptionDriver = z.infer<typeof AssignDailyMealSubscriptionDriverSchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('DailyMealsCartPerson', DailyMealsCartPersonSchema);
	registry.register('DailyMealsCart', DailyMealsCartSchema);
	registry.register('DailyMealsSubscriptionRequest', DailyMealsSubscriptionRequestSchema);
	registry.register('GetUserDailyMealSubscriptionsRequest', GetUserDailyMealSubscriptionsSchema);
	registry.register('DailyMealsSubscriptionQuery', DailyMealsSubscriptionQuerySchema);
	registry.register('AssignDailyMealSubscriptionDriver', AssignDailyMealSubscriptionDriverSchema);
}
