import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuItem } from './MenuItem.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import { MenuItemResponseSchema } from './MenuItem';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type MenuItemStockChange = {
	id: string;
	menu_item_id: string;
	quantity: number;
	reason: string;
	menu_item: MenuItem;
	order_id?: string | null;
	order?: DeliveryOrder | null;
	created_at: Date;
};

export const CreateMenuItemStockChangeSchema = z
	.object({
		id: z.string().uuid(),
		menu_item_id: z.string().uuid(),
		quantity: z.number(),
		reason: z.string(),
		order_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateMenuItemStockChange');

export type CreateMenuItemStockChangeInput = z.infer<typeof CreateMenuItemStockChangeSchema>;

export const UpdateMenuItemStockChangeSchema =
	CreateMenuItemStockChangeSchema.partial().openapi('UpdateMenuItemStockChange');
export type UpdateMenuItemStockChangeInput = z.infer<typeof UpdateMenuItemStockChangeSchema>;

export const MenuItemStockChangeResponseSchema = z
	.object({
		id: z.string(),
		menu_item_id: z.string(),
		quantity: z.number(),
		reason: z.string(),
		menu_item: MenuItemResponseSchema,
		order_id: z.string().nullable().optional(),
		order: DeliveryOrderResponseSchema.nullable().optional(),
		created_at: z.string().datetime(),
	})
	.openapi('MenuItemStockChangeResponse');

export type MenuItemStockChangeResponse = z.infer<typeof MenuItemStockChangeResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateMenuItemStockChange', CreateMenuItemStockChangeSchema);
	registry.register('UpdateMenuItemStockChange', UpdateMenuItemStockChangeSchema);
	registry.register('MenuItemStockChangeResponse', MenuItemStockChangeResponseSchema);
}
