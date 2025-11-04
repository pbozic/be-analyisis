import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuItem } from './MenuItem.js';
import type { OrderLobbyItem } from '../orderLobbies/OrderLobbyItem.js';
import type { LineItem } from './LineItem.js';
import { MenuItemResponseSchema } from './MenuItem';
import { OrderLobbyItemResponseSchema } from '../orderLobbies/OrderLobbyItem';
import { LineItemResponseSchema } from './LineItem';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateMenuItemVersionSchema = z
	.object({
		menu_item_version_id: z.string().uuid(),
		menu_item_id: z.string().uuid(),
		version: z.number(),
		snapshot: z.unknown(),
	})
	.openapi('CreateMenuItemVersion');

export type CreateMenuItemVersionInput = z.infer<typeof CreateMenuItemVersionSchema>;

export const UpdateMenuItemVersionSchema = CreateMenuItemVersionSchema.partial().openapi('UpdateMenuItemVersion');
export type UpdateMenuItemVersionInput = z.infer<typeof UpdateMenuItemVersionSchema>;

export const MenuItemVersionResponseSchema = z
	.object({
		menu_item_version_id: z.string(),
		menu_item_id: z.string(),
		version: z.number(),
		snapshot: z.unknown(),
		created_at: z.string().datetime(),
		menu_item: MenuItemResponseSchema,
		order_lobby_items: z.array(OrderLobbyItemResponseSchema),
		line_items: z.array(LineItemResponseSchema),
	})
	.openapi('MenuItemVersionResponse');

export type MenuItemVersionResponse = z.infer<typeof MenuItemVersionResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuItemVersion', CreateMenuItemVersionSchema);
	registry.register('UpdateMenuItemVersion', UpdateMenuItemVersionSchema);
	registry.register('MenuItemVersionResponse', MenuItemVersionResponseSchema);
}

export type MenuItemVersion = {
	menu_item_version_id: string;
	menu_item_id: string;
	version: number;
	snapshot: unknown;
	created_at: Date;
	menu_item?: MenuItem;
	order_lobby_items?: OrderLobbyItem[];
	line_items?: LineItem[];
};
