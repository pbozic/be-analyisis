// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Allergen } from './Allergen.js';
import type { MenuItem } from './MenuItem.js';
import { AllergenResponseSchema } from './Allergen';
import { MenuItemResponseSchema } from './MenuItem';

extendZodWithOpenApi(z);

export type AllergensToMenuItem = {
	allergen_id: string;
	menu_item_id: string;
	allergen: Allergen;
	menu_item: MenuItem;
};

export const CreateAllergensToMenuItemSchema = z
	.object({
		allergen_id: z.string().uuid(),
		menu_item_id: z.string().uuid(),
	})
	.openapi('CreateAllergensToMenuItem');

export type CreateAllergensToMenuItemInput = z.infer<typeof CreateAllergensToMenuItemSchema>;

export const UpdateAllergensToMenuItemSchema =
	CreateAllergensToMenuItemSchema.partial().openapi('UpdateAllergensToMenuItem');
export type UpdateAllergensToMenuItemInput = z.infer<typeof UpdateAllergensToMenuItemSchema>;

export const AllergensToMenuItemResponseSchema = z
	.object({
		allergen_id: z.string(),
		menu_item_id: z.string(),
		allergen: AllergenResponseSchema,
		menu_item: MenuItemResponseSchema,
	})
	.openapi('AllergensToMenuItemResponse');

export type AllergensToMenuItemResponse = z.infer<typeof AllergensToMenuItemResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAllergensToMenuItem', CreateAllergensToMenuItemSchema);
	registry.register('UpdateAllergensToMenuItem', UpdateAllergensToMenuItemSchema);
	registry.register('AllergensToMenuItemResponse', AllergensToMenuItemResponseSchema);
}
