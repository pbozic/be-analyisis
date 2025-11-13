import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';
import { LocationWithAddressSchema } from '../Address/address.js';
import { PaymentRefSchema } from '../Payments/payment.dto.js';
import { OrderLobbyItemRefSchema } from './orderLobbyItem.dto.js';

extendZodWithOpenApi(z);

// ===== Request Schemas =====
export const CreateOrderLobbySchema = z
	.object({
		lobby_name: z.string().min(1).describe('Name of the order lobby'),
		lobby_description: z.string().describe('Description of the order lobby'),
		business_id: UUID.describe('ID of the associated business'),
		restaurant_id: UUID.describe('ID of the associated restaurant'),
		creator_id: UUID.describe('ID of the user who created the lobby'),
		creating_business_id: UUID.describe('ID of the business that created the lobby'),
		delivery_location: LocationWithAddressSchema.nullable().optional(),
		courier_note: z.string().nullable().optional(),
		restaurant_message: z.string().nullable().optional(),
		stores_id: UUID.optional(),
		food_drinks_id: UUID.nullable().optional(),
		user_limits_map: z
			.record(z.string(), z.number().nonnegative())
			.openapi({ example: { 'user-uuid-1': 5, 'user-uuid-2': 10 } })
			.describe('Map of user_id to limit for users in the lobby'),
	})
	.openapi('CreateOrderLobby');

export type CreateOrderLobby = z.infer<typeof CreateOrderLobbySchema>;

export const UpdateOrderLobbySchema = z
	.object({
		order_lobbies_id: UUID,
		data: z
			.object({
				lobby_name: z.string().min(1).optional(),
				lobby_description: z.string().optional(),
				active: z.boolean().optional(),
				delivery_location: LocationWithAddressSchema.nullable().optional(),
				courier_note: z.string().nullable().optional(),
				restaurant_message: z.string().nullable().optional(),
			})
			.openapi('UpdateOrderLobbyData'),
	})
	.openapi('UpdateOrderLobby');

export type UpdateOrderLobby = z.infer<typeof UpdateOrderLobbySchema>;

export const SubmitLobbyRequestSchema = z
	.object({
		paymentMethod: PaymentRefSchema,
		useCredits: z.boolean().openapi({ example: false }),
	})
	.openapi('SubmitLobbyRequest');

export type SubmitLobbyRequest = z.infer<typeof SubmitLobbyRequestSchema>;

export const SetLobbyUsersWithLimitsRequestSchema = z
	.object({
		user_limits_map: z
			.record(UUID, z.number().nonnegative())
			.openapi({ example: { 'user-uuid-1': 5, 'user-uuid-2': 10 } })
			.describe('Map of user_id to limit'),
	})
	.openapi('SetLobbyUsersWithLimitsRequest');

export type SetLobbyUsersWithLimitsRequest = z.infer<typeof SetLobbyUsersWithLimitsRequestSchema>;

export const SetUserOrderLobbyItemsRequestSchema = z
	.object({
		items: OrderLobbyItemRefSchema.array().describe('Array of menu items to set for the user in the lobby'),
	})
	.openapi('SetUserOrderLobbyItemsRequest');

export type SetUserOrderLobbyItemsRequest = z.infer<typeof SetUserOrderLobbyItemsRequestSchema>;

export const SetOrderLobbyActiveSchema = z
	.object({
		order_lobbies_id: UUID,
		active: z.boolean(),
	})
	.openapi('SetOrderLobbyActive');

export type SetOrderLobbyActive = z.infer<typeof SetOrderLobbyActiveSchema>;

export const EditUsersInOrderLobbySchema = z
	.object({
		order_lobbies_id: UUID,
		users: z.record(z.string(), z.number().nonnegative()).describe('Map of user_id to limit'),
	})
	.openapi('EditUsersInOrderLobby');

export type EditUsersInOrderLobby = z.infer<typeof EditUsersInOrderLobbySchema>;

export const DeleteOrderLobbySchema = z
	.object({
		order_lobbies_id: UUID,
	})
	.openapi('DeleteOrderLobby');

export type DeleteOrderLobby = z.infer<typeof DeleteOrderLobbySchema>;

// ===== Query Schemas =====
export const GetOrderLobbyByIdQuerySchema = z
	.object({
		order_lobbies_id: UUID,
	})
	.openapi('GetOrderLobbyByIdQuery');

export type GetOrderLobbyByIdQuery = z.infer<typeof GetOrderLobbyByIdQuerySchema>;

export const GetOrderLobbiesForBusinessQuerySchema = z
	.object({
		business_id: UUID,
	})
	.openapi('GetOrderLobbiesForBusinessQuery');

export type GetOrderLobbiesForBusinessQuery = z.infer<typeof GetOrderLobbiesForBusinessQuerySchema>;

export const GetActiveOrderLobbiesByUserIdQuerySchema = z
	.object({
		user_id: UUID,
	})
	.openapi('GetActiveOrderLobbiesByUserIdQuery');

export type GetActiveOrderLobbiesByUserIdQuery = z.infer<typeof GetActiveOrderLobbiesByUserIdQuerySchema>;

// ===== OpenAPI Registration =====
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateOrderLobby', CreateOrderLobbySchema);
	registry.register('UpdateOrderLobby', UpdateOrderLobbySchema);
	registry.register('DeleteOrderLobby', DeleteOrderLobbySchema);
	registry.register('SubmitLobbyRequest', SubmitLobbyRequestSchema);
	registry.register('SetLobbyUsersWithLimitsRequest', SetLobbyUsersWithLimitsRequestSchema);
	registry.register('SetUserOrderLobbyItemsRequest', SetUserOrderLobbyItemsRequestSchema);
	registry.register('SetOrderLobbyActive', SetOrderLobbyActiveSchema);
	registry.register('EditUsersInOrderLobby', EditUsersInOrderLobbySchema);
	registry.register('GetOrderLobbyByIdQuery', GetOrderLobbyByIdQuerySchema);
	registry.register('GetOrderLobbiesForBusinessQuery', GetOrderLobbiesForBusinessQuerySchema);
	registry.register('GetActiveOrderLobbiesByUserIdQuery', GetActiveOrderLobbiesByUserIdQuerySchema);
}
