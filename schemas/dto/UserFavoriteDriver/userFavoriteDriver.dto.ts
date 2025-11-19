// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { Driver } from '../drivers/Driver.js';
import { UserResponseSchema } from './User';
import { DriverResponseSchema } from '../drivers/Driver';

extendZodWithOpenApi(z);

export const CreateUserFavoriteDriverSchema = z
	.object({
		user_favorite_drivers_id: z.string().uuid(),
		user_id: z.string().uuid(),
		driver_id: z.string().uuid(),
	})
	.openapi('CreateUserFavoriteDriver');

export type CreateUserFavoriteDriverInput = z.infer<typeof CreateUserFavoriteDriverSchema>;

export const UpdateUserFavoriteDriverSchema =
	CreateUserFavoriteDriverSchema.partial().openapi('UpdateUserFavoriteDriver');
export type UpdateUserFavoriteDriverInput = z.infer<typeof UpdateUserFavoriteDriverSchema>;

export const UserFavoriteDriverResponseSchema = z
	.object({
		user_favorite_drivers_id: z.string(),
		user_id: z.string(),
		driver_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		users: UserResponseSchema,
		drivers: DriverResponseSchema,
	})
	.openapi('UserFavoriteDriverResponse');

export type UserFavoriteDriverResponse = z.infer<typeof UserFavoriteDriverResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserFavoriteDriver', CreateUserFavoriteDriverSchema);
	registry.register('UpdateUserFavoriteDriver', UpdateUserFavoriteDriverSchema);
	registry.register('UserFavoriteDriverResponse', UserFavoriteDriverResponseSchema);
}

export type UserFavoriteDriver = {
	user_favorite_drivers_id: string;
	user_id: string;
	driver_id: string;
	created_at: Date;
	updated_at: Date;
	users?: User;
	drivers?: Driver;
};
