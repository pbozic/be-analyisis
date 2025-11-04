import { DAY_OF_WEEK } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DailyMealsModule = {
	id: string;
	food_drinks_id: string;
	food_drinks_module: FoodDrinksModule;
	daily_meals_days: DAY_OF_WEEK;
	daily_meals_delivery_mapping?: unknown | null;
};

export const CreateDailyMealsModuleSchema = z
	.object({
		id: z.string().uuid(),
		food_drinks_id: z.string().uuid(),
		daily_meals_days: z.nativeEnum(DAY_OF_WEEK),
		daily_meals_delivery_mapping: z.unknown().nullable().optional(),
	})
	.openapi('CreateDailyMealsModule');

export type CreateDailyMealsModuleInput = z.infer<typeof CreateDailyMealsModuleSchema>;

export const UpdateDailyMealsModuleSchema = CreateDailyMealsModuleSchema.partial().openapi('UpdateDailyMealsModule');
export type UpdateDailyMealsModuleInput = z.infer<typeof UpdateDailyMealsModuleSchema>;

export const DailyMealsModuleResponseSchema = z
	.object({
		id: z.string(),
		food_drinks_id: z.string(),
		food_drinks_module: FoodDrinksModuleResponseSchema,
		daily_meals_days: z.nativeEnum(DAY_OF_WEEK),
		daily_meals_delivery_mapping: z.unknown().nullable().optional(),
	})
	.openapi('DailyMealsModuleResponse');

export type DailyMealsModuleResponse = z.infer<typeof DailyMealsModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealsModule', CreateDailyMealsModuleSchema);
	registry.register('UpdateDailyMealsModule', UpdateDailyMealsModuleSchema);
	registry.register('DailyMealsModuleResponse', DailyMealsModuleResponseSchema);
}
