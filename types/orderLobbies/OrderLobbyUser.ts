import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { OrderLobby } from './OrderLobby.js';
import type { User } from '../users/User.js';
import { OrderLobbyResponseSchema } from './OrderLobby';
import { UserResponseSchema } from '../users/User';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateOrderLobbyUserSchema = z
	.object({
		order_lobby_users_id: z.string().uuid(),
		user_id: z.string().uuid(),
		order_lobbies_id: z.string().uuid(),
		limit: z.number(),
	})
	.openapi('CreateOrderLobbyUser');

export type CreateOrderLobbyUserInput = z.infer<typeof CreateOrderLobbyUserSchema>;

export const UpdateOrderLobbyUserSchema = CreateOrderLobbyUserSchema.partial().openapi('UpdateOrderLobbyUser');
export type UpdateOrderLobbyUserInput = z.infer<typeof UpdateOrderLobbyUserSchema>;

export const OrderLobbyUserResponseSchema = z
	.object({
		order_lobby_users_id: z.string(),
		user_id: z.string(),
		order_lobbies_id: z.string(),
		limit: z.number(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		order_lobbies: OrderLobbyResponseSchema,
		users: UserResponseSchema,
	})
	.openapi('OrderLobbyUserResponse');

export type OrderLobbyUserResponse = z.infer<typeof OrderLobbyUserResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateOrderLobbyUser', CreateOrderLobbyUserSchema);
	registry.register('UpdateOrderLobbyUser', UpdateOrderLobbyUserSchema);
	registry.register('OrderLobbyUserResponse', OrderLobbyUserResponseSchema);
}

export type OrderLobbyUser = {
	order_lobby_users_id: string;
	user_id: string;
	order_lobbies_id: string;
	limit: number;
	created_at: Date;
	updated_at: Date;
	order_lobbies?: OrderLobby;
	users?: User;
};
