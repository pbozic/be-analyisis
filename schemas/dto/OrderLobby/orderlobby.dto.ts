import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { UserRefSchema } from '../User/user.js';
import { BusinessRefSchema } from '../Business/business.js';
import { LocationWithAddressSchema } from '../common/Location.dto.js';
import { PaymentRefSchema } from '../Payments/payment.dto.js';
import { OrderLobbyItemRefSchema } from './orderLobbyItem.dto.js';
extendZodWithOpenApi(z);

// ===== BASE SCHEMAS =====

// OrderLobby Base Schema - scalars only, no relations
export const OrderLobbyBaseSchema = z
	.object({
		order_lobbies_id: UUID,
		lobby_name: z.string().min(1).describe('Name of the order lobby'),
		lobby_description: z.string().describe('Description of the order lobby'),
		active: z.boolean().describe('Whether the lobby is active'),
		delivery_location: LocationWithAddressSchema.nullable().optional(),
		courier_note: z.string().nullable().optional().describe('Note for the courier'),
		restaurant_message: z.string().nullable().optional().describe('Message from restaurant'),
		stores_id: UUID.describe('ID of the associated store'),
		food_drinks_id: UUID.nullable().optional().describe('ID of the food/drinks module'),
		creator_id: UUID.describe('ID of the user who created the lobby'),
		creating_business_id: UUID.describe('ID of the business that created the lobby'),
		delivery_orders_id: UUID.nullable().optional().describe('ID of the associated delivery order'),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'OrderLobbyBase',
		description: 'Base order lobby schema with scalar fields only',
	});

export type OrderLobbyBase = z.infer<typeof OrderLobbyBaseSchema>;

// ===== REF SCHEMAS =====

// OrderLobby Ref Schema - minimal identity for embedding elsewhere
export const OrderLobbyRefSchema = z
	.object({
		order_lobbies_id: UUID,
		lobby_name: z.string(),
		active: z.boolean(),
		creator_id: UUID,
		created_at: Timestamp,
	})
	.openapi({
		title: 'OrderLobbyRef',
		description: 'Minimal order lobby reference for embedding in other responses',
	});

export type OrderLobbyRef = z.infer<typeof OrderLobbyRefSchema>;

// ===== RESPONSE SCHEMAS =====

// OrderLobby Response Schema - Base with embedded refs
export const OrderLobbyResponseSchema = OrderLobbyBaseSchema.extend({
	creator: UserRefSchema.optional(),
	business: BusinessRefSchema.optional(),
	order_lobby_items: z.array(OrderLobbyItemRefSchema).describe('Array of order lobby items').optional(),
	order_lobby_users: z
		.array(
			z.object({
				user: UserRefSchema.partial().describe('User in the order lobby'),
			})
		)
		.describe('Array of users in the order lobby'),
}).openapi({
	title: 'OrderLobbyResponse',
	description: 'Complete order lobby response with related entities',
});

export type OrderLobbyResponse = z.infer<typeof OrderLobbyResponseSchema>;

// ===== REQUEST SCHEMAS =====

// Create OrderLobby Schema - for createOrderLobby function
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
	.openapi({
		title: 'CreateOrderLobby',
		description: 'Schema for creating new order lobby',
	});

export type CreateOrderLobby = z.infer<typeof CreateOrderLobbySchema>;

// Update OrderLobby Schema - for updateOrderLobby function
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
			.openapi({
				title: 'UpdateOrderLobbyData',
				description: 'Fields that can be updated in order lobby',
			}),
	})
	.openapi({
		title: 'UpdateOrderLobby',
		description: 'Schema for updating order lobby',
	});

export type UpdateOrderLobby = z.infer<typeof UpdateOrderLobbySchema>;

export const SubmitLobbyRequestSchema = z
	.object({
		paymentMethod: PaymentRefSchema,
		useCredits: z.boolean().openapi({ example: false }),
	})
	.openapi({
		title: 'SubmitLobbyRequest',
		description: 'Schema for submitting an order lobby',
	});

export type SubmitLobbyRequest = z.infer<typeof SubmitLobbyRequestSchema>;

export const SetLobbyUsersWithLimitsRequestSchema = z
	.object({
		user_limits_map: z
			.record(UUID, z.number().nonnegative())
			.openapi({ example: { 'user-uuid-1': 5, 'user-uuid-2': 10 } })
			.describe('Map of user_id to limit'),
	})
	.openapi({
		title: 'SetLobbyUsersWithLimitsRequest',
		description: 'Schema for setting users in lobby with limits',
	});
export type SetLobbyUsersWithLimitsRequest = z.infer<typeof SetLobbyUsersWithLimitsRequestSchema>;

export const SetUserOrderLobbyItemsRequestSchema = z
	.object({
		items: OrderLobbyItemRefSchema.array().describe('Array of menu items to set for the user in the lobby'),
	})
	.openapi({
		title: 'SetUserOrderLobbyItemsRequest',
		description: 'Schema for setting user order lobby items',
	});

export type SetUserOrderLobbyItemsRequest = z.infer<typeof SetUserOrderLobbyItemsRequestSchema>;
// ===== QUERY SCHEMAS =====

// Get OrderLobby by ID Query - for getOrderLobbyById function
export const GetOrderLobbyByIdQuerySchema = z
	.object({
		order_lobbies_id: UUID,
	})
	.openapi({
		title: 'GetOrderLobbyByIdQuery',
		description: 'Query parameters for getting order lobby by ID',
	});

export type GetOrderLobbyByIdQuery = z.infer<typeof GetOrderLobbyByIdQuerySchema>;

// Get OrderLobbies for Business Query - for getOrderLobbiesForBusiness function
export const GetOrderLobbiesForBusinessQuerySchema = z
	.object({
		business_id: UUID,
	})
	.openapi({
		title: 'GetOrderLobbiesForBusinessQuery',
		description: 'Query parameters for getting order lobbies by business ID',
	});

export type GetOrderLobbiesForBusinessQuery = z.infer<typeof GetOrderLobbiesForBusinessQuerySchema>;

// Get Active OrderLobbies by User ID Query - for getActiveOrderLobbiesByUserID function
export const GetActiveOrderLobbiesByUserIdQuerySchema = z
	.object({
		user_id: UUID,
	})
	.openapi({
		title: 'GetActiveOrderLobbiesByUserIdQuery',
		description: 'Query parameters for getting active order lobbies by user ID',
	});

export type GetActiveOrderLobbiesByUserIdQuery = z.infer<typeof GetActiveOrderLobbiesByUserIdQuerySchema>;

// Delete OrderLobby Schema - for deleteOrderLobby function
export const DeleteOrderLobbySchema = z
	.object({
		order_lobbies_id: UUID,
	})
	.openapi({
		title: 'DeleteOrderLobby',
		description: 'Schema for deleting order lobby',
	});

export type DeleteOrderLobby = z.infer<typeof DeleteOrderLobbySchema>;

// ===== LIST RESPONSE SCHEMAS =====

// OrderLobbies List Response - for paginated/bulk endpoints
export const OrderLobbiesListResponseSchema = z
	.object({
		data: z.array(OrderLobbyResponseSchema),
		total: z.number().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	})
	.openapi({
		title: 'OrderLobbiesList',
		description: 'Paginated list of order lobbies',
	});

export type OrderLobbiesListResponse = z.infer<typeof OrderLobbiesListResponseSchema>;

// ===== SPECIAL OPERATION SCHEMAS =====

// Set Lobby Active Status Schema - for setOrderLobbyActive function
export const SetOrderLobbyActiveSchema = z
	.object({
		order_lobbies_id: UUID,
		active: z.boolean(),
	})
	.openapi({
		title: 'SetOrderLobbyActive',
		description: 'Schema for setting order lobby active status',
	});

export type SetOrderLobbyActive = z.infer<typeof SetOrderLobbyActiveSchema>;

// Edit Users in OrderLobby Schema - for editUsersInOrderLobby function
export const EditUsersInOrderLobbySchema = z
	.object({
		order_lobbies_id: UUID,
		users: z.record(z.string(), z.number().nonnegative()).describe('Map of user_id to limit'),
	})
	.openapi({
		title: 'EditUsersInOrderLobby',
		description: 'Schema for editing users in order lobby with limits',
	});

export type EditUsersInOrderLobby = z.infer<typeof EditUsersInOrderLobbySchema>;

// ===== REGISTRATION FUNCTION =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('OrderLobbyBase', OrderLobbyBaseSchema);

	// Register ref schemas
	registry.register('OrderLobbyRef', OrderLobbyRefSchema);

	// Register request schemas
	registry.register('CreateOrderLobby', CreateOrderLobbySchema);
	registry.register('UpdateOrderLobby', UpdateOrderLobbySchema);
	registry.register('DeleteOrderLobby', DeleteOrderLobbySchema);
	registry.register('SubmitLobbyRequest', SubmitLobbyRequestSchema);
	registry.register('SetLobbyUsersWithLimitsRequest', SetLobbyUsersWithLimitsRequestSchema);
	registry.register('SetUserOrderLobbyItemsRequest', SetUserOrderLobbyItemsRequestSchema);

	// Register query schemas
	registry.register('GetOrderLobbyByIdQuery', GetOrderLobbyByIdQuerySchema);
	registry.register('GetOrderLobbiesForBusinessQuery', GetOrderLobbiesForBusinessQuerySchema);
	registry.register('GetActiveOrderLobbiesByUserIdQuery', GetActiveOrderLobbiesByUserIdQuerySchema);

	// Register response schemas
	registry.register('OrderLobby', OrderLobbyResponseSchema);
	registry.register('OrderLobbiesList', OrderLobbiesListResponseSchema);

	// Register special operation schemas
	registry.register('SetOrderLobbyActive', SetOrderLobbyActiveSchema);
	registry.register('EditUsersInOrderLobby', EditUsersInOrderLobbySchema);

	// Register main response
	registry.register('OrderLobbyResponse', OrderLobbyResponseSchema);
}
