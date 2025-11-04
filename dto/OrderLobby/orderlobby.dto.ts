import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// =======================
// Small helper schemas
// =======================
export const CoordinatesSchema = z
	.object({
		latitude: z.number().openapi({ example: 46.056946 }),
		longitude: z.number().openapi({ example: 14.505751 }),
	})
	.openapi('OrderLobbyCoordinates');

export const LocationSchema = z
	.object({
		address: z.string().openapi({ example: 'Prešernova cesta 1, 1000 Ljubljana, Slovenia' }),
		coordinates: CoordinatesSchema.optional(),
	})
	.openapi('OrderLobbyLocation');

// =======================
// createLobby - request body
// POST /order_lobby/create
// =======================
export const CreateLobbyRequestSchema = z
	.object({
		user_limits_map: z
			.record(z.number().int().nonnegative())
			.openapi({ example: { '990e8400-e29b-41d4-a716-446655440000': 3 } }),
		lobby_name: z.string().optional().openapi({ example: 'Friday Lunch' }),
		lobby_description: z.string().optional().openapi({ example: 'Group order for team' }),
		business_id: z.string().uuid().optional().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
		restaurant_id: z.string().uuid().optional().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		restaurant_message: z.string().optional().openapi({ example: 'Please add cutlery' }),
		courier_note: z.string().optional().openapi({ example: 'Leave at reception' }),
		delivery_location: LocationSchema.optional(),
	})
	.openapi('CreateLobbyRequest');

// =======================
// submitLobby - request body
// POST /order_lobby/submit/{order_lobbies_id}
// =======================
export const PaymentMethodSchema = z
	.object({
		type: z.string().openapi({ example: 'CARD' }),
		// other provider-specific fields may be present; allow passthrough
	})
	.passthrough()
	.openapi('OrderLobbyPaymentMethod');

export const SubmitLobbyRequestSchema = z
	.object({
		paymentMethod: PaymentMethodSchema,
		useCredits: z.boolean().optional().default(false).openapi({ example: false }),
	})
	.openapi('SubmitLobbyRequest');

// =======================
// setLobbyUsersWithLimits - request body
// PUT /order_lobby/users/{order_lobbies_id}
// =======================
export const SetLobbyUsersWithLimitsRequestSchema = z
	.object({
		user_limits_map: z.record(z.number().int().nonnegative()).openapi({ example: { '990e8400-e29b-41d4-a716-446655440000': 2 } }),
	})
	.openapi('SetLobbyUsersWithLimitsRequest');

// =======================
// setUserOrderLobbyItems - request body
// PATCH /order_lobby/items/{order_lobbies_id}
// =======================
export const OrderLobbyItemInputSchema = z
	.object({
		menu_item_id: z.string().uuid().openapi({ example: 'bb0e8400-e29b-41d4-a716-446655440000' }),
		sides: z.array(z.string().uuid()).optional().openapi({ example: [] }),
		extras: z.array(z.string().uuid()).optional().openapi({ example: [] }),
		quantity: z.number().int().min(1).openapi({ example: 1 }),
		customer_note: z.string().optional().openapi({ example: 'No onions please' }),
	})
	.openapi('OrderLobbyItemInput');

export const SetUserOrderLobbyItemsRequestSchema = z
	.object({
		items: z.array(OrderLobbyItemInputSchema).openapi({ example: [{ menu_item_id: 'bb0e8400-e29b-41d4-a716-446655440000', quantity: 1 }] }),
	})
	.openapi('SetUserOrderLobbyItemsRequest');

// =======================
// Export types and register
// =======================
export type CreateLobbyRequest = z.infer<typeof CreateLobbyRequestSchema>;
export type SubmitLobbyRequest = z.infer<typeof SubmitLobbyRequestSchema>;
export type SetLobbyUsersWithLimitsRequest = z.infer<typeof SetLobbyUsersWithLimitsRequestSchema>;
export type SetUserOrderLobbyItemsRequest = z.infer<typeof SetUserOrderLobbyItemsRequestSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLobbyRequest', CreateLobbyRequestSchema);
	registry.register('SubmitLobbyRequest', SubmitLobbyRequestSchema);
	registry.register('SetLobbyUsersWithLimitsRequest', SetLobbyUsersWithLimitsRequestSchema);
	registry.register('SetUserOrderLobbyItemsRequest', SetUserOrderLobbyItemsRequestSchema);
	registry.register('OrderLobbyItemInput', OrderLobbyItemInputSchema);
	registry.register('OrderLobbyLocation', LocationSchema);
	registry.register('OrderLobbyCoordinates', CoordinatesSchema);
}
