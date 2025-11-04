// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Word } from '../promoWords/Word.js';
import type { PromoSection } from '../promoSections/PromoSection.js';
import type { Translation } from './Translation.js';
import type { Category } from '../menus/Category.js';
import type { MenuCategory } from '../menus/MenuCategory.js';
import type { MenuItem } from '../menuItems/MenuItem.js';
import { TranslationResponseSchema } from './Translation';
import { WordResponseSchema } from '../promoWords/Word';
import { CategoryResponseSchema } from '../menus/Category';
import { PromoSectionResponseSchema } from '../promoSections/PromoSection';
import { MenuCategoryResponseSchema } from '../menus/MenuCategory';
import { MenuItemResponseSchema } from '../menuItems/MenuItem';

extendZodWithOpenApi(z);

export const CreateTranslatableSchema = z
	.object({
		translatable_id: z.string().uuid(),
	})
	.openapi('CreateTranslatable');

export type CreateTranslatableInput = z.infer<typeof CreateTranslatableSchema>;

export const UpdateTranslatableSchema = CreateTranslatableSchema.partial().openapi('UpdateTranslatable');
export type UpdateTranslatableInput = z.infer<typeof UpdateTranslatableSchema>;

export const TranslatableResponseSchema = z
	.object({
		translatable_id: z.string(),
		translations: z.array(TranslationResponseSchema),
		words: z.array(WordResponseSchema),
		categories: z.array(CategoryResponseSchema),
		promo_sections: z.array(PromoSectionResponseSchema),
		menu_categories_names: z.array(MenuCategoryResponseSchema),
		menu_categories_descriptions: z.array(MenuCategoryResponseSchema),
		menu_items_names: z.array(MenuItemResponseSchema),
		menu_items_descriptions: z.array(MenuItemResponseSchema),
	})
	.openapi('TranslatableResponse');

export type TranslatableResponse = z.infer<typeof TranslatableResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateTranslatable', CreateTranslatableSchema);
	registry.register('UpdateTranslatable', UpdateTranslatableSchema);
	registry.register('TranslatableResponse', TranslatableResponseSchema);
}

export type Translatable = {
	translatable_id: string;
	translations?: Translation[];
	words?: Word[];
	categories?: Category[];
	promo_sections?: PromoSection[];
	menu_categories_names?: MenuCategory[];
	menu_categories_descriptions?: MenuCategory[];
	menu_items_names?: MenuItem[];
	menu_items_descriptions?: MenuItem[];
};
