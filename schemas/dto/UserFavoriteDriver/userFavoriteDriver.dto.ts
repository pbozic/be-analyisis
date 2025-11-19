// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { UserResponse, UserResponseSchema } from '../User/index.js';
import { DriverBaseSchema, DriverBase } from '../Driver/driver.dto.js';

extendZodWithOpenApi(z);

export const CreateUserFavoriteDriverSchema = z
	.object({
		user_favorite_drivers_id: UUID,
		user_id: UUID,
		driver_id: UUID,
	})
	.openapi('CreateUserFavoriteDriver');

export type CreateUserFavoriteDriverInput = z.infer<typeof CreateUserFavoriteDriverSchema>;

export const UpdateUserFavoriteDriverSchema =
	CreateUserFavoriteDriverSchema.partial().openapi('UpdateUserFavoriteDriver');
export type UpdateUserFavoriteDriverInput = z.infer<typeof UpdateUserFavoriteDriverSchema>;

export const UserFavoriteDriverResponseSchema = z
	.object({
		user_favorite_drivers_id: UUID,
		user_id: UUID,
		driver_id: UUID,
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		users: UserResponseSchema,
		driver: DriverBaseSchema,
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
	users?: UserResponse;
	driver?: DriverBase;
};
