import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { MenuCategory } from './MenuCategory.js';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { MenuCategoryResponseSchema } from './MenuCategory';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateMenuSchema = z
	.object({
		menu_id: z.string().uuid(),
		stores_id: z.string().uuid().nullable().optional(),
		food_drinks_id: z.string().uuid().nullable().optional(),
		menu_categories_ordered: z.unknown().nullable().optional(),
	})
	.openapi('CreateMenu');

export type CreateMenuInput = z.infer<typeof CreateMenuSchema>;

export const UpdateMenuSchema = CreateMenuSchema.partial().openapi('UpdateMenu');
export type UpdateMenuInput = z.infer<typeof UpdateMenuSchema>;

export const MenuResponseSchema = z
	.object({
		menu_id: z.string(),
		stores_id: z.string().nullable().optional(),
		food_drinks_id: z.string().nullable().optional(),
		stores_module: StoresModuleResponseSchema.nullable().optional(),
		food_drinks_module: FoodDrinksModuleResponseSchema.nullable().optional(),
		categories: z.array(MenuCategoryResponseSchema),
		menu_categories_ordered: z.unknown().nullable().optional(),
	})
	.openapi('MenuResponse');

export type MenuResponse = z.infer<typeof MenuResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenu', CreateMenuSchema);
	registry.register('UpdateMenu', UpdateMenuSchema);
	registry.register('MenuResponse', MenuResponseSchema);
}

export type Menu = {
	menu_id: string;
	stores_id?: string | null;
	food_drinks_id?: string | null;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
	categories?: MenuCategory[];
	menu_categories_ordered?: unknown | null;
};
