import { z } from 'zod';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';

// User Ref Schema for embedding - cropped_user_columns from DAO
const UserRefSchema = z.object({
	user_id: UUID,
	first_name: z.string(),
	last_name: z.string(),
});

// Base Schema - scalar fields only
export const OrderLobbyUserBaseSchema = z.object({
	order_lobby_users_id: UUID,
	user_id: UUID,
	order_lobbies_id: UUID,
	limit: z.number().int().min(0),
	created_at: Timestamp,
	updated_at: Timestamp,
});

export type OrderLobbyUserBase = z.infer<typeof OrderLobbyUserBaseSchema>;

// Ref Schema - minimal identity for embedding elsewhere
export const OrderLobbyUserRefSchema = z.object({
	order_lobby_users_id: UUID,
	user_id: UUID,
	order_lobbies_id: UUID,
	limit: z.number().int().min(0),
});

export type OrderLobbyUserRef = z.infer<typeof OrderLobbyUserRefSchema>;

// Response Schema - extends Base and embeds ONLY other models' Ref-variants
export const OrderLobbyUserResponseSchema = OrderLobbyUserBaseSchema.extend({
	users: UserRefSchema.optional(),
});

export type OrderLobbyUserResponse = z.infer<typeof OrderLobbyUserResponseSchema>;

// Request Schemas for DAO functions

// CreateOrderLobbyUser request schema
export const CreateOrderLobbyUserRequestSchema = z.object({
	user_id: UUID,
	order_lobbies_id: UUID,
	limit: z.number().int().min(0),
});

export type CreateOrderLobbyUserRequest = z.infer<typeof CreateOrderLobbyUserRequestSchema>;

// GetOrderLobbyUsersInOrderLobby query schema
export const GetOrderLobbyUsersInOrderLobbyQuerySchema = z.object({
	order_lobbies_id: UUID,
});

export type GetOrderLobbyUsersInOrderLobbyQuery = z.infer<typeof GetOrderLobbyUsersInOrderLobbyQuerySchema>;

// UpdateOrderLobbyUserLimit request schema
export const UpdateOrderLobbyUserLimitRequestSchema = z.object({
	order_lobby_users_id: UUID,
	newLimit: z.number().int().min(0),
});

export type UpdateOrderLobbyUserLimitRequest = z.infer<typeof UpdateOrderLobbyUserLimitRequestSchema>;

// DeleteOrderLobbyUserWithItems request schema
export const DeleteOrderLobbyUserWithItemsRequestSchema = z.object({
	user_id: UUID,
	order_lobbies_id: UUID,
});

export type DeleteOrderLobbyUserWithItemsRequest = z.infer<typeof DeleteOrderLobbyUserWithItemsRequestSchema>;

// Response schemas for collections
export const OrderLobbyUsersListResponseSchema = z.array(OrderLobbyUserResponseSchema);

export type OrderLobbyUsersListResponse = z.infer<typeof OrderLobbyUsersListResponseSchema>;

// Transaction result schema for deleteOrderLobbyUserWithItems
export const DeleteOrderLobbyUserWithItemsResponseSchema = OrderLobbyUserBaseSchema;

export type DeleteOrderLobbyUserWithItemsResponse = z.infer<typeof DeleteOrderLobbyUserWithItemsResponseSchema>;

// Registry function to register all schemas
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('OrderLobbyUserBase', OrderLobbyUserBaseSchema);
	registry.register('OrderLobbyUserRef', OrderLobbyUserRefSchema);
	registry.register('OrderLobbyUserResponse', OrderLobbyUserResponseSchema);

	// Register request schemas
	registry.register('CreateOrderLobbyUserRequest', CreateOrderLobbyUserRequestSchema);
	registry.register('GetOrderLobbyUsersInOrderLobbyQuery', GetOrderLobbyUsersInOrderLobbyQuerySchema);
	registry.register('UpdateOrderLobbyUserLimitRequest', UpdateOrderLobbyUserLimitRequestSchema);
	registry.register('DeleteOrderLobbyUserWithItemsRequest', DeleteOrderLobbyUserWithItemsRequestSchema);

	// Register response schemas
	registry.register('OrderLobbyUsersListResponse', OrderLobbyUsersListResponseSchema);
	registry.register('DeleteOrderLobbyUserWithItemsResponse', DeleteOrderLobbyUserWithItemsResponseSchema);
}
