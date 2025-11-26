import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID, Timestamp } from '../../primitives.js';
import { UserRefSchema } from '../User/user.js';
import { BusinessRefSchema } from '../Business/business.js';
import { OrderLobbyItemRefSchema } from './orderLobbyItem.dto.js';
import { LocationWithAddressSchema } from '../Address/address.js';
import { OrderLobbyUserRefSchema } from './orderLobbyUser.dto.js';
extendZodWithOpenApi(z);

// ===== BASE SCHEMAS =====

// OrderLobby Base Schema - scalars only, no relations
export const OrderLobbyBaseSchema = z
	.object({
		order_lobbies_id: UUID,
		lobby_name: z.string().min(1).describe('Name of the order lobby'),
		lobby_description: z.string().describe('Description of the order lobby'),
		active: z.boolean().describe('Whether the lobby is active'),
		delivery_location: z
			.lazy(() => LocationWithAddressSchema)
			.nullable()
			.optional(),
		courier_note: z.string().nullable().optional().describe('Note for the courier'),
		restaurant_message: z.string().nullable().optional().describe('Message from restaurant'),
		stores_id: UUID.nullable().optional().describe('ID of the associated store'),
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
	creator: z.lazy(() => UserRefSchema).optional(),
	business: z.lazy(() => BusinessRefSchema).optional(),
	order_lobby_items: z.array(OrderLobbyItemRefSchema).describe('Array of order lobby items').optional(),
	order_lobby_users: z.array(OrderLobbyUserRefSchema).describe('Array of users in the order lobby'),
}).openapi({
	title: 'OrderLobbyResponse',
	description: 'Complete order lobby response with related entities',
});

export type OrderLobbyResponse = z.infer<typeof OrderLobbyResponseSchema>;

// Request and query schemas moved to orderLobby.validators.ts

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

// Special operation schemas moved to orderLobby.validators.ts

// ===== REGISTRATION FUNCTION =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base schemas
	registry.register('OrderLobbyBase', OrderLobbyBaseSchema);

	// Register ref schemas
	registry.register('OrderLobbyRef', OrderLobbyRefSchema);

	// Register main response
	registry.register('OrderLobbyResponse', OrderLobbyResponseSchema);
}
