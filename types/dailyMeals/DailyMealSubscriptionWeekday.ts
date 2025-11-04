import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDailyMealSubscriptionWeekdaySchema = z
	.object({
		id: z.string().uuid(),
		subscription_id: z.string().uuid(),
		intended_weekday: z.number(),
		delivery_weekday: z.number(),
	})
	.openapi('CreateDailyMealSubscriptionWeekday');

export type CreateDailyMealSubscriptionWeekdayInput = z.infer<typeof CreateDailyMealSubscriptionWeekdaySchema>;

export const UpdateDailyMealSubscriptionWeekdaySchema = CreateDailyMealSubscriptionWeekdaySchema.partial().openapi(
	'UpdateDailyMealSubscriptionWeekday'
);
export type UpdateDailyMealSubscriptionWeekdayInput = z.infer<typeof UpdateDailyMealSubscriptionWeekdaySchema>;

export const DailyMealSubscriptionWeekdayResponseSchema = z
	.object({
		id: z.string(),
		subscription_id: z.string(),
		intended_weekday: z.number(),
		delivery_weekday: z.number(),
		subscription: DailyMealSubscriptionResponseSchema,
	})
	.openapi('DailyMealSubscriptionWeekdayResponse');

export type DailyMealSubscriptionWeekdayResponse = z.infer<typeof DailyMealSubscriptionWeekdayResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealSubscriptionWeekday', CreateDailyMealSubscriptionWeekdaySchema);
	registry.register('UpdateDailyMealSubscriptionWeekday', UpdateDailyMealSubscriptionWeekdaySchema);
	registry.register('DailyMealSubscriptionWeekdayResponse', DailyMealSubscriptionWeekdayResponseSchema);
}

export type DailyMealSubscriptionWeekday = {
	id: string;
	subscription_id: string;
	intended_weekday: number;
	delivery_weekday: number;
	subscription?: DailyMealSubscription;
};
