import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuItem } from './MenuItem.js';
import type { User } from '../users/User.js';
import type { AllergensToMenuItem } from './AllergensToMenuItem.js';
import type { UserAllergen } from '../users/UserAllergen.js';
import { AllergensToMenuItemResponseSchema } from './AllergensToMenuItem';
import { UserAllergenResponseSchema } from '../users/UserAllergen';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateAllergenSchema = z
	.object({
		allergen_id: z.string().uuid(),
		name: z.string(),
		description: z.string().nullable().optional(),
		code: z.number(),
	})
	.openapi('CreateAllergen');

export type CreateAllergenInput = z.infer<typeof CreateAllergenSchema>;

export const UpdateAllergenSchema = CreateAllergenSchema.partial().openapi('UpdateAllergen');
export type UpdateAllergenInput = z.infer<typeof UpdateAllergenSchema>;

export const AllergenResponseSchema = z
	.object({
		allergen_id: z.string(),
		name: z.string(),
		description: z.string().nullable().optional(),
		code: z.number(),
		allergens_to_menu_items: z.array(AllergensToMenuItemResponseSchema),
		users: z.array(UserAllergenResponseSchema),
	})
	.openapi('AllergenResponse');

export type AllergenResponse = z.infer<typeof AllergenResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateAllergen', CreateAllergenSchema);
	registry.register('UpdateAllergen', UpdateAllergenSchema);
	registry.register('AllergenResponse', AllergenResponseSchema);
}

export type Allergen = {
	allergen_id: string;
	name: string;
	description?: string | null;
	code: number;
	allergens_to_menu_items?: AllergensToMenuItem[];
	users?: UserAllergen[];
};
