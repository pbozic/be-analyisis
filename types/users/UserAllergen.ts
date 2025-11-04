// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Allergen } from '../menuItems/Allergen.js';
import type { User } from './User.js';
import { AllergenResponseSchema } from '../menuItems/Allergen';
import { UserResponseSchema } from './User';

extendZodWithOpenApi(z);

export const CreateUserAllergenSchema = z
	.object({
		allergen_id: z.string().uuid(),
		user_id: z.string().uuid(),
	})
	.openapi('CreateUserAllergen');

export type CreateUserAllergenInput = z.infer<typeof CreateUserAllergenSchema>;

export const UpdateUserAllergenSchema = CreateUserAllergenSchema.partial().openapi('UpdateUserAllergen');
export type UpdateUserAllergenInput = z.infer<typeof UpdateUserAllergenSchema>;

export const UserAllergenResponseSchema = z
	.object({
		allergen_id: z.string(),
		user_id: z.string(),
		allergen: AllergenResponseSchema,
		user: UserResponseSchema,
	})
	.openapi('UserAllergenResponse');

export type UserAllergenResponse = z.infer<typeof UserAllergenResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserAllergen', CreateUserAllergenSchema);
	registry.register('UpdateUserAllergen', UpdateUserAllergenSchema);
	registry.register('UserAllergenResponse', UserAllergenResponseSchema);
}

export type UserAllergen = {
	allergen_id: string;
	user_id: string;
	allergen?: Allergen;
	user?: User;
};
