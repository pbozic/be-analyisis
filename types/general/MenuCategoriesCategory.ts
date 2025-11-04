// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuCategory } from '../menus/MenuCategory.js';
import type { Category } from '../menus/Category.js';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';
import { CategoryResponseSchema } from '../menus/Category';

extendZodWithOpenApi(z);

export type MenuCategoriesCategory = {
	menu_categories_id: string;
	categories_id: string;
	menu_category: MenuCategory;
	category: Category;
};

export const CreateMenuCategoriesCategorySchema = z
	.object({
		menu_categories_id: z.string().uuid(),
		categories_id: z.string().uuid(),
	})
	.openapi('CreateMenuCategoriesCategory');

export type CreateMenuCategoriesCategoryInput = z.infer<typeof CreateMenuCategoriesCategorySchema>;

export const UpdateMenuCategoriesCategorySchema =
	CreateMenuCategoriesCategorySchema.partial().openapi('UpdateMenuCategoriesCategory');
export type UpdateMenuCategoriesCategoryInput = z.infer<typeof UpdateMenuCategoriesCategorySchema>;

export const MenuCategoriesCategoryResponseSchema = z
	.object({
		menu_categories_id: z.string(),
		categories_id: z.string(),
		menu_category: MenuCategoryResponseSchema,
		category: CategoryResponseSchema,
	})
	.openapi('MenuCategoriesCategoryResponse');

export type MenuCategoriesCategoryResponse = z.infer<typeof MenuCategoriesCategoryResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuCategoriesCategory', CreateMenuCategoriesCategorySchema);
	registry.register('UpdateMenuCategoriesCategory', UpdateMenuCategoriesCategorySchema);
	registry.register('MenuCategoriesCategoryResponse', MenuCategoriesCategoryResponseSchema);
}
