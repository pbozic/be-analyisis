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

export const GetUserDailyMealSubscriptionsSchema = z.object({
	start_date: z.string().datetime().optional(),
});

export type GetUserDailyMealSubscriptionsrequest = z.infer<typeof GetUserDailyMealSubscriptionsSchema>;
export type DailyMealsCartPerson = z.infer<typeof DailyMealsCartPersonSchema>;
export type DailyMealsCart = z.infer<typeof DailyMealsCartSchema>;
export type DailyMealsSubscriptionRequest = z.infer<typeof DailyMealsSubscriptionRequestSchema>;
