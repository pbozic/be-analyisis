// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from './User.js';
import type { ServiceLink } from './ServiceLink.js';
import { UserResponseSchema } from './User';
import { ServiceLinkResponseSchema } from './ServiceLink';

extendZodWithOpenApi(z);

export type UserFavoriteServiceLink = {
	id: string;
	user_id: string;
	service_id: string;
	created_at: Date;
	updated_at: Date;
	order_index: number;
	users: User;
	services: ServiceLink;
};

export const CreateUserFavoriteServiceLinkSchema = z
	.object({
		id: z.string().uuid(),
		user_id: z.string().uuid(),
		service_id: z.string().uuid(),
		order_index: z.number(),
	})
	.openapi('CreateUserFavoriteServiceLink');

export type CreateUserFavoriteServiceLinkInput = z.infer<typeof CreateUserFavoriteServiceLinkSchema>;

export const UpdateUserFavoriteServiceLinkSchema = CreateUserFavoriteServiceLinkSchema.partial().openapi(
	'UpdateUserFavoriteServiceLink'
);
export type UpdateUserFavoriteServiceLinkInput = z.infer<typeof UpdateUserFavoriteServiceLinkSchema>;

export const UserFavoriteServiceLinkResponseSchema = z
	.object({
		id: z.string(),
		user_id: z.string(),
		service_id: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		order_index: z.number(),
		users: UserResponseSchema,
		services: ServiceLinkResponseSchema,
	})
	.openapi('UserFavoriteServiceLinkResponse');

export type UserFavoriteServiceLinkResponse = z.infer<typeof UserFavoriteServiceLinkResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUserFavoriteServiceLink', CreateUserFavoriteServiceLinkSchema);
	registry.register('UpdateUserFavoriteServiceLink', UpdateUserFavoriteServiceLinkSchema);
	registry.register('UserFavoriteServiceLinkResponse', UserFavoriteServiceLinkResponseSchema);
}
