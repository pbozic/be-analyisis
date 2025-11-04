import { SUBSCRIPTION_STATUS, SUBSCRIPTION_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { Driver } from '../drivers/Driver.js';
import type { Address } from '../addresses/Address.js';
import type { DailyMealsModule } from '../dailyMeals/DailyMealsModule.js';
import type { DailyMealSubscriptionCustomer } from '../dailyMeals/DailyMealSubscriptionCustomer.js';
import type { DailyMealSubscriptionDay } from '../dailyMeals/DailyMealSubscriptionDay.js';
import type { DailyMealSubscriptionWeekday } from '../dailyMeals/DailyMealSubscriptionWeekday.js';
import type { DailyMealInstance } from '../dailyMeals/DailyMealInstance.js';
import type { Payment } from '../payments/Payment.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import { UserResponseSchema } from '../users/User';
import { DriverResponseSchema } from '../drivers/Driver';
import { AddressResponseSchema } from '../addresses/Address';
import { DailyMealsModuleResponseSchema } from '../dailyMeals/DailyMealsModule';
import { DailyMealSubscriptionCustomerResponseSchema } from '../dailyMeals/DailyMealSubscriptionCustomer';
import { DailyMealSubscriptionDayResponseSchema } from '../dailyMeals/DailyMealSubscriptionDay';
import { DailyMealSubscriptionWeekdayResponseSchema } from '../dailyMeals/DailyMealSubscriptionWeekday';
import { DailyMealInstanceResponseSchema } from '../dailyMeals/DailyMealInstance';
import { PaymentResponseSchema } from '../payments/Payment';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export const CreateDailyMealSubscriptionSchema = z
	.object({
		id: z.string().uuid(),
		user_id: z.string().uuid(),
		daily_meals_id: z.string().uuid(),
		delivery_address_id: z.string().uuid(),
		driver_id: z.string().uuid().nullable().optional(),
		start_date: z.unknown(),
		end_date: z.unknown().nullable().optional(),
		type: z.nativeEnum(SUBSCRIPTION_TYPE),
		status: z.nativeEnum(SUBSCRIPTION_STATUS),
		courier_comment: z.string().nullable().optional(),
	})
	.openapi('CreateDailyMealSubscription');

export type CreateDailyMealSubscriptionInput = z.infer<typeof CreateDailyMealSubscriptionSchema>;

export const UpdateDailyMealSubscriptionSchema =
	CreateDailyMealSubscriptionSchema.partial().openapi('UpdateDailyMealSubscription');
export type UpdateDailyMealSubscriptionInput = z.infer<typeof UpdateDailyMealSubscriptionSchema>;

export const DailyMealSubscriptionResponseSchema = z
	.object({
		id: z.string(),
		user_id: z.string(),
		daily_meals_id: z.string(),
		delivery_address_id: z.string(),
		driver_id: z.string().nullable().optional(),
		start_date: z.string().datetime(),
		end_date: z.string().datetime().nullable().optional(),
		type: z.nativeEnum(SUBSCRIPTION_TYPE),
		status: z.nativeEnum(SUBSCRIPTION_STATUS),
		courier_comment: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user: UserResponseSchema,
		driver: DriverResponseSchema.nullable().optional(),
		delivery_address: AddressResponseSchema,
		daily_meals_module: DailyMealsModuleResponseSchema,
		customers: z.array(DailyMealSubscriptionCustomerResponseSchema),
		days: z.array(DailyMealSubscriptionDayResponseSchema),
		weekdays: z.array(DailyMealSubscriptionWeekdayResponseSchema),
		daily_meal_instances: z.array(DailyMealInstanceResponseSchema),
		payment: PaymentResponseSchema.nullable().optional(),
		promo_analytics: z.array(PromoAnalyticResponseSchema),
	})
	.openapi('DailyMealSubscriptionResponse');

export type DailyMealSubscriptionResponse = z.infer<typeof DailyMealSubscriptionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealSubscription', CreateDailyMealSubscriptionSchema);
	registry.register('UpdateDailyMealSubscription', UpdateDailyMealSubscriptionSchema);
	registry.register('DailyMealSubscriptionResponse', DailyMealSubscriptionResponseSchema);
}

export type DailyMealSubscription = {
	id: string;
	user_id: string;
	daily_meals_id: string;
	delivery_address_id: string;
	driver_id?: string | null;
	start_date: Date;
	end_date?: Date | null;
	type: SUBSCRIPTION_TYPE;
	status: SUBSCRIPTION_STATUS;
	courier_comment?: string | null;
	created_at: Date;
	updated_at: Date;
	user?: User;
	driver?: Driver | null;
	delivery_address?: Address;
	daily_meals_module?: DailyMealsModule;
	customers?: DailyMealSubscriptionCustomer[];
	days?: DailyMealSubscriptionDay[];
	weekdays?: DailyMealSubscriptionWeekday[];
	daily_meal_instances?: DailyMealInstance[];
	payment?: Payment | null;
	promo_analytics?: PromoAnalytic[];
};
