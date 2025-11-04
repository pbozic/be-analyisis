import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuItem } from '../menuItems/MenuItem.js';
import type { MenuItemVersion } from '../menuItems/MenuItemVersion.js';
import type { OrderLobby } from './OrderLobby.js';
import { MenuItemResponseSchema } from '../menuItems/MenuItem';
import { MenuItemVersionResponseSchema } from '../menuItems/MenuItemVersion';
import { OrderLobbyResponseSchema } from './OrderLobby';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateOrderLobbyItemSchema = z
	.object({
		order_lobby_items_id: z.string().uuid(),
		order_lobbies_id: z.string().uuid(),
		menu_item_id: z.string().uuid(),
		menu_item_version_id: z.string().uuid(),
		user_id: z.string().uuid().nullable().optional(),
		sides: z.string(),
		extras: z.string(),
		quantity: z.number(),
		customer_note: z.string().nullable().optional(),
	})
	.openapi('CreateOrderLobbyItem');

export type CreateOrderLobbyItemInput = z.infer<typeof CreateOrderLobbyItemSchema>;

export const UpdateOrderLobbyItemSchema = CreateOrderLobbyItemSchema.partial().openapi('UpdateOrderLobbyItem');
export type UpdateOrderLobbyItemInput = z.infer<typeof UpdateOrderLobbyItemSchema>;

export const OrderLobbyItemResponseSchema = z
	.object({
		order_lobby_items_id: z.string(),
		order_lobbies_id: z.string(),
		menu_item_id: z.string(),
		menu_item_version_id: z.string(),
		user_id: z.string().nullable().optional(),
		sides: z.string(),
		extras: z.string(),
		quantity: z.number(),
		customer_note: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		menu_items: MenuItemResponseSchema.nullable().optional(),
		menu_item_version: MenuItemVersionResponseSchema,
		order_lobbies: OrderLobbyResponseSchema,
	})
	.openapi('OrderLobbyItemResponse');

export type OrderLobbyItemResponse = z.infer<typeof OrderLobbyItemResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateOrderLobbyItem', CreateOrderLobbyItemSchema);
	registry.register('UpdateOrderLobbyItem', UpdateOrderLobbyItemSchema);
	registry.register('OrderLobbyItemResponse', OrderLobbyItemResponseSchema);
}

export type OrderLobbyItem = {
	order_lobby_items_id: string;
	order_lobbies_id: string;
	menu_item_id: string;
	menu_item_version_id: string;
	user_id?: string | null;
	sides: string;
	extras: string;
	quantity: number;
	customer_note?: string | null;
	created_at: Date;
	updated_at: Date;
	menu_items?: MenuItem | null;
	menu_item_version?: MenuItemVersion;
	order_lobbies?: OrderLobby;
};
