import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { OrderLobbyItem } from './OrderLobbyItem.js';
import type { OrderLobbyUser } from './OrderLobbyUser.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import { OrderLobbyItemResponseSchema } from './OrderLobbyItem';
import { OrderLobbyUserResponseSchema } from './OrderLobbyUser';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateOrderLobbySchema = z
	.object({
		order_lobbies_id: z.string().uuid(),
		lobby_name: z.string(),
		lobby_description: z.string(),
		active: z.boolean(),
		delivery_location: z.unknown().nullable().optional(),
		courier_note: z.string().nullable().optional(),
		restaurant_message: z.string().nullable().optional(),
		stores_id: z.string().uuid(),
		food_drinks_id: z.string().uuid().nullable().optional(),
		creator_id: z.string().uuid(),
		delivery_orders_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateOrderLobby');

export type CreateOrderLobbyInput = z.infer<typeof CreateOrderLobbySchema>;

export const UpdateOrderLobbySchema = CreateOrderLobbySchema.partial().openapi('UpdateOrderLobby');
export type UpdateOrderLobbyInput = z.infer<typeof UpdateOrderLobbySchema>;

export const OrderLobbyResponseSchema = z
	.object({
		order_lobbies_id: z.string(),
		lobby_name: z.string(),
		lobby_description: z.string(),
		active: z.boolean(),
		delivery_location: z.unknown().nullable().optional(),
		courier_note: z.string().nullable().optional(),
		restaurant_message: z.string().nullable().optional(),
		stores_id: z.string(),
		food_drinks_id: z.string().nullable().optional(),
		creator_id: z.string(),
		delivery_orders_id: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		order_lobby_items: z.array(OrderLobbyItemResponseSchema),
		order_lobby_users: z.array(OrderLobbyUserResponseSchema),
		delivery_orders: DeliveryOrderResponseSchema.nullable().optional(),
		stores_module: StoresModuleResponseSchema.nullable().optional(),
		food_drinks_module: FoodDrinksModuleResponseSchema.nullable().optional(),
	})
	.openapi('OrderLobbyResponse');

export type OrderLobbyResponse = z.infer<typeof OrderLobbyResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateOrderLobby', CreateOrderLobbySchema);
	registry.register('UpdateOrderLobby', UpdateOrderLobbySchema);
	registry.register('OrderLobbyResponse', OrderLobbyResponseSchema);
}

export type OrderLobby = {
	order_lobbies_id: string;
	lobby_name: string;
	lobby_description: string;
	active: boolean;
	delivery_location?: unknown | null;
	courier_note?: string | null;
	restaurant_message?: string | null;
	stores_id: string;
	food_drinks_id?: string | null;
	creator_id: string;
	delivery_orders_id?: string | null;
	created_at: Date;
	updated_at: Date;
	order_lobby_items?: OrderLobbyItem[];
	order_lobby_users?: OrderLobbyUser[];
	delivery_orders?: DeliveryOrder | null;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
};
