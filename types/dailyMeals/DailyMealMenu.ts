import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { DailyMealsModule } from './DailyMealsModule.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import { DailyMealsModuleResponseSchema } from './DailyMealsModule';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateDailyMealMenuSchema = z
	.object({
		daily_meal_menu_id: z.string().uuid(),
		daily_meals_module_id: z.string().uuid(),
		date: z.unknown(),
	})
	.openapi('CreateDailyMealMenu');

export type CreateDailyMealMenuInput = z.infer<typeof CreateDailyMealMenuSchema>;

export const UpdateDailyMealMenuSchema = CreateDailyMealMenuSchema.partial().openapi('UpdateDailyMealMenu');
export type UpdateDailyMealMenuInput = z.infer<typeof UpdateDailyMealMenuSchema>;

export const DailyMealMenuResponseSchema = z
	.object({
		daily_meal_menu_id: z.string(),
		daily_meals_module_id: z.string(),
		daily_meals_module: DailyMealsModuleResponseSchema,
		categories: z.array(MenuCategoryResponseSchema),
		date: z.string().datetime(),
	})
	.openapi('DailyMealMenuResponse');

export type DailyMealMenuResponse = z.infer<typeof DailyMealMenuResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateDailyMealMenu', CreateDailyMealMenuSchema);
	registry.register('UpdateDailyMealMenu', UpdateDailyMealMenuSchema);
	registry.register('DailyMealMenuResponse', DailyMealMenuResponseSchema);
}

export type DailyMealMenu = {
	daily_meal_menu_id: string;
	daily_meals_module_id: string;
	daily_meals_module?: DailyMealsModule;
	categories?: MenuCategory[];
	date: Date;
};
