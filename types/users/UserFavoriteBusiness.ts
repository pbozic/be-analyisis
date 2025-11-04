// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { MODULE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { Business } from '../business/Business.js';
import { UserResponseSchema } from './User';
import { BusinessResponseSchema } from '../business/Business';

extendZodWithOpenApi(z);

export const CreateUserFavoriteBusinessSchema = z
	.object({
		user_favorite_businesses_id: z.string().uuid(),
		user_id: z.string().uuid(),
		business_id: z.string().uuid(),
		module: z.nativeEnum(MODULE),
	})
	.openapi('CreateUserFavoriteBusiness');

export type CreateUserFavoriteBusinessInput = z.infer<typeof CreateUserFavoriteBusinessSchema>;

export const UpdateUserFavoriteBusinessSchema =
	CreateUserFavoriteBusinessSchema.partial().openapi('UpdateUserFavoriteBusiness');
export type UpdateUserFavoriteBusinessInput = z.infer<typeof UpdateUserFavoriteBusinessSchema>;

export const UserFavoriteBusinessResponseSchema = z
	.object({
		user_favorite_businesses_id: z.string(),
		user_id: z.string(),
		business_id: z.string(),
		module: z.nativeEnum(MODULE),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		users: UserResponseSchema,
		businesses: BusinessResponseSchema,
	})
	.openapi('UserFavoriteBusinessResponse');

export type UserFavoriteBusinessResponse = z.infer<typeof UserFavoriteBusinessResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserFavoriteBusiness', CreateUserFavoriteBusinessSchema);
	registry.register('UpdateUserFavoriteBusiness', UpdateUserFavoriteBusinessSchema);
	registry.register('UserFavoriteBusinessResponse', UserFavoriteBusinessResponseSchema);
}

export type UserFavoriteBusiness = {
	user_favorite_businesses_id: string;
	user_id: string;
	business_id: string;
	module: MODULE;
	created_at: Date;
	updated_at: Date;
	users?: User;
	businesses?: Business;
};
