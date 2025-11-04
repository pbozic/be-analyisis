import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDailyMealSubscriptionDaySchema = z
	.object({
		id: z.string().uuid(),
		subscription_id: z.string().uuid(),
		intended_date: z.unknown(),
		delivery_date: z.unknown(),
	})
	.openapi('CreateDailyMealSubscriptionDay');

export type CreateDailyMealSubscriptionDayInput = z.infer<typeof CreateDailyMealSubscriptionDaySchema>;

export const UpdateDailyMealSubscriptionDaySchema = CreateDailyMealSubscriptionDaySchema.partial().openapi(
	'UpdateDailyMealSubscriptionDay'
);
export type UpdateDailyMealSubscriptionDayInput = z.infer<typeof UpdateDailyMealSubscriptionDaySchema>;

export const DailyMealSubscriptionDayResponseSchema = z
	.object({
		id: z.string(),
		subscription_id: z.string(),
		intended_date: z.string().datetime(),
		delivery_date: z.string().datetime(),
		subscription: DailyMealSubscriptionResponseSchema,
	})
	.openapi('DailyMealSubscriptionDayResponse');

export type DailyMealSubscriptionDayResponse = z.infer<typeof DailyMealSubscriptionDayResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealSubscriptionDay', CreateDailyMealSubscriptionDaySchema);
	registry.register('UpdateDailyMealSubscriptionDay', UpdateDailyMealSubscriptionDaySchema);
	registry.register('DailyMealSubscriptionDayResponse', DailyMealSubscriptionDayResponseSchema);
}

export type DailyMealSubscriptionDay = {
	id: string;
	subscription_id: string;
	intended_date: Date;
	delivery_date: Date;
	subscription?: DailyMealSubscription;
};
