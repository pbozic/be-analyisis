import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { UserRefSchema } from '../User/user.js';
import { OrderLobbyRefSchema } from './orderLobby.dto.js';

extendZodWithOpenApi(z);

// ===== BASE SCHEMAS =====

// OrderLobbyItem Base Schema - scalars only, no relations
export const OrderLobbyItemBaseSchema = z
	.object({
		order_lobby_items_id: UUID,
		order_lobbies_id: UUID,
		menu_item_id: UUID,
		menu_item_version_id: UUID,
		user_id: UUID.nullable().optional(),
		sides: z.array(UUID).default([]).describe('JSON array of side item IDs'),
		extras: z.array(UUID).default([]).describe('JSON array of extra item IDs'),
		quantity: z.number().int().positive().describe('Quantity of the item'),
		customer_note: z.string().nullable().optional().describe('Customer note for the item'),
		created_at: Timestamp,
		updated_at: Timestamp,
	})
	.openapi({
		title: 'OrderLobbyItemBase',
		description: 'Base order lobby item schema with scalar fields only',
	});

export type OrderLobbyItemBase = z.infer<typeof OrderLobbyItemBaseSchema>;

// ===== REF SCHEMAS =====

// OrderLobbyItem Ref Schema - minimal identity for embedding elsewhere
export const OrderLobbyItemRefSchema = z
	.object({
		order_lobby_items_id: UUID,
		order_lobbies_id: UUID,
		menu_item_id: UUID,
		user_id: UUID.nullable().optional(),
		sides: z.array(UUID).describe('JSON array of side item IDs'),
		extras: z.array(UUID).describe('JSON array of extra item IDs'),
		quantity: z.number().int().positive(),
		customer_note: z.string().nullable().optional(),
		price: z.number().optional().describe('Total price for the item including quantity and extras'),
		discount: z.number().optional().describe('Discount applied to the item if any'),
	})
	.openapi({
		title: 'OrderLobbyItemRef',
		description: 'Minimal order lobby item reference',
	});

export type OrderLobbyItemRef = z.infer<typeof OrderLobbyItemRefSchema>;

// MenuItem Ref Schema (for order lobby items)
export const MenuItemRefSchema = z
	.object({
		menu_item_id: UUID,
		name: z.string(),
		price_cents: z.number().int().nonnegative().optional(),
		description: z.string().nullable().optional(),
	})
	.openapi({
		title: 'MenuItemRef',
		description: 'Minimal menu item reference for order lobby items',
	});

export type MenuItemRef = z.infer<typeof MenuItemRefSchema>;

// ===== RESPONSE SCHEMAS =====

// OrderLobbyItem Response Schema - Base with embedded refs
export const OrderLobbyItemResponseSchema = OrderLobbyItemBaseSchema.extend({
	user: z.lazy(() => UserRefSchema).optional(),
	menu_item: MenuItemRefSchema.omit({ menu_item_id: true }).optional(),
	order_lobby: z.lazy(() => OrderLobbyRefSchema.omit({ order_lobbies_id: true })).optional(),
}).openapi({
	title: 'OrderLobbyItemResponse',
	description: 'Complete order lobby item response with related entities',
});

export type OrderLobbyItemResponse = z.infer<typeof OrderLobbyItemResponseSchema>;

// ===== REQUEST SCHEMAS =====

// Create OrderLobbyItem Schema - for createOrderLobbyItem function
export const CreateOrderLobbyItemSchema = z
	.object({
		order_lobbies_id: UUID,
		menu_item_id: UUID,
		menu_item_version_id: UUID,
		user_id: UUID.nullable().optional(),
		sides: z.array(UUID).default([]).describe('Array of side item UUIDs'),
		extras: z.array(UUID).default([]).describe('Array of extra item UUIDs'),
		quantity: z.number().int().positive().default(1),
		customer_note: z.string().nullable().optional(),
	})
	.openapi({
		title: 'CreateOrderLobbyItem',
		description: 'Schema for creating new order lobby item',
	});

export type CreateOrderLobbyItem = z.infer<typeof CreateOrderLobbyItemSchema>;
// Update OrderLobbyItem Quantity Schema - for updateOrderLobbyItemQuantity function
export const UpdateOrderLobbyItemQuantitySchema = z
	.object({
		order_lobby_items_id: UUID,
		quantity: z.number().int().positive(),
	})
	.openapi({
		title: 'UpdateOrderLobbyItemQuantity',
		description: 'Schema for updating order lobby item quantity',
	});

export type UpdateOrderLobbyItemQuantity = z.infer<typeof UpdateOrderLobbyItemQuantitySchema>;

// ===== QUERY SCHEMAS =====

// Get OrderLobbyItems by Lobby and User ID Query - for getOrderLobbyItemsByLobbyAndUserId function
export const GetOrderLobbyItemsByLobbyAndUserIdQuerySchema = z
	.object({
		order_lobbies_id: UUID,
		user_id: UUID,
	})
	.openapi({
		title: 'GetOrderLobbyItemsByLobbyAndUserIdQuery',
		description: 'Query parameters for getting order lobby items by lobby and user ID',
	});

export type GetOrderLobbyItemsByLobbyAndUserIdQuery = z.infer<typeof GetOrderLobbyItemsByLobbyAndUserIdQuerySchema>;

// Delete OrderLobbyItem Schema - for deleteOrderLobbyItem function
export const DeleteOrderLobbyItemSchema = z
	.object({
		order_lobby_items_id: UUID,
	})
	.openapi({
		title: 'DeleteOrderLobbyItem',
		description: 'Schema for deleting order lobby item',
	});

export type DeleteOrderLobbyItem = z.infer<typeof DeleteOrderLobbyItemSchema>;
// ===== LIST RESPONSE SCHEMAS =====

// OrderLobbyItems List Response - for paginated/bulk endpoints
export const OrderLobbyItemsListResponseSchema = z
	.object({
		data: z.array(OrderLobbyItemResponseSchema),
		total: z.number().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	})
	.openapi({
		title: 'OrderLobbyItemsList',
		description: 'Paginated list of order lobby items',
	});

export type OrderLobbyItemsListResponse = z.infer<typeof OrderLobbyItemsListResponseSchema>;

// ===== UTILITY SCHEMAS =====

// Items Comparison Schema - for areItemsEqual function
export const ItemsComparisonSchema = z
	.object({
		item1: z
			.object({
				menu_item_id: UUID,
				customer_note: z.string().nullable().optional(),
				extras: z.array(z.string()),
				sides: z.array(z.string()),
			})
			.openapi({
				title: 'ComparisonItem',
				description: 'Item structure for comparison',
			}),
		item2: z
			.object({
				menu_item_id: UUID,
				customer_note: z.string().nullable().optional(),
				extras: z.array(z.string()),
				sides: z.array(z.string()),
			})
			.openapi({
				title: 'ComparisonItem',
				description: 'Item structure for comparison',
			}),
	})
	.openapi({
		title: 'ItemsComparison',
		description: 'Schema for comparing two order lobby items',
	});

export type ItemsComparison = z.infer<typeof ItemsComparisonSchema>;

// Comparison Result Schema
export const ItemsComparisonResultSchema = z
	.object({
		are_equal: z.boolean(),
	})
	.openapi({
		title: 'ItemsComparisonResult',
		description: 'Result of items comparison',
	});

export type ItemsComparisonResult = z.infer<typeof ItemsComparisonResultSchema>;

// ===== REGISTRATION FUNCTION =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('OrderLobbyItemBase', OrderLobbyItemBaseSchema);

	// Register ref schemas
	registry.register('OrderLobbyItemRef', OrderLobbyItemRefSchema);
	registry.register('MenuItemRef', MenuItemRefSchema);

	// Register request schemas
	registry.register('CreateOrderLobbyItem', CreateOrderLobbyItemSchema);
	registry.register('UpdateOrderLobbyItemQuantity', UpdateOrderLobbyItemQuantitySchema);
	registry.register('DeleteOrderLobbyItem', DeleteOrderLobbyItemSchema);

	// Register query schemas
	registry.register('GetOrderLobbyItemsByLobbyAndUserIdQuery', GetOrderLobbyItemsByLobbyAndUserIdQuerySchema);

	// Register response schemas
	registry.register('OrderLobbyItem', OrderLobbyItemResponseSchema);
	registry.register('OrderLobbyItemsList', OrderLobbyItemsListResponseSchema);

	// Register utility schemas
	registry.register('ItemsComparison', ItemsComparisonSchema);
	registry.register('ItemsComparisonResult', ItemsComparisonResultSchema);

	// Register main response
	registry.register('OrderLobbyItemResponse', OrderLobbyItemResponseSchema);
}
