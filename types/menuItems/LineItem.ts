import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { MenuItem } from './MenuItem.js';
import type { MenuItemVersion } from './MenuItemVersion.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import { MenuItemResponseSchema } from './MenuItem';
import { MenuItemVersionResponseSchema } from './MenuItemVersion';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type LineItem = {
	line_item_id: string;
	menu_item_id: string;
	menu_item_version_id: string;
	order_id: string;
	quantity: number;
	comment?: string | null;
	menu_item: MenuItem;
	menu_item_version: MenuItemVersion;
	order: DeliveryOrder;
	replacement_id?: string | null;
	replacement?: LineItem | null;
	replaces_id?: string | null;
	replaces?: LineItem | null;
	parent_side_id?: string | null;
	parent_side?: LineItem | null;
	parent_extra_id?: string | null;
	parent_extra?: LineItem | null;
	sides: LineItem[];
	extras: LineItem[];
	removed: boolean;
};

export const CreateLineItemSchema = z
	.object({
		line_item_id: z.string().uuid(),
		menu_item_id: z.string().uuid(),
		menu_item_version_id: z.string().uuid(),
		order_id: z.string().uuid(),
		quantity: z.number(),
		comment: z.string().nullable().optional(),
		replacement_id: z.string().uuid().nullable().optional(),
		replacement: z.unknown().nullable().optional(),
		replaces_id: z.string().uuid().nullable().optional(),
		replaces: z.unknown().nullable().optional(),
		parent_side_id: z.string().uuid().nullable().optional(),
		parent_side: z.unknown().nullable().optional(),
		parent_extra_id: z.string().uuid().nullable().optional(),
		parent_extra: z.unknown().nullable().optional(),
		sides: z.array(z.unknown()),
		extras: z.array(z.unknown()),
		removed: z.boolean(),
	})
	.openapi('CreateLineItem');

export type CreateLineItemInput = z.infer<typeof CreateLineItemSchema>;

export const UpdateLineItemSchema = CreateLineItemSchema.partial().openapi('UpdateLineItem');
export type UpdateLineItemInput = z.infer<typeof UpdateLineItemSchema>;

export const baseLineItemResponseSchema = z
	.object({
		line_item_id: z.string().uuid(),
		menu_item_id: z.string().uuid(),
		menu_item_version_id: z.string().uuid(),
		order_id: z.string().uuid(),
		quantity: z.number(),
		comment: z.string().nullable().optional(),
		menu_item: MenuItemResponseSchema,
		menu_item_version: MenuItemVersionResponseSchema,
		order: DeliveryOrderResponseSchema,
		replacement_id: z.string().uuid().nullable().optional(),
		replaces_id: z.string().uuid().nullable().optional(),
		parent_side_id: z.string().uuid().nullable().optional(),
		parent_extra_id: z.string().uuid().nullable().optional(),
		removed: z.boolean(),
	})
	.openapi('LineItemResponse');

type LineItemRes = z.infer<typeof baseLineItemResponseSchema> & {
	sides: LineItemRes[];
	extras: LineItemRes[];
};

export const LineItemResponseSchema: z.ZodType<LineItemRes> = baseLineItemResponseSchema
	.extend({
		replacement: z
			.lazy(() => LineItemResponseSchema)
			.nullable()
			.optional(),
		replaces: z
			.lazy(() => LineItemResponseSchema)
			.nullable()
			.optional(),
		parent_side: z
			.lazy(() => LineItemResponseSchema)
			.nullable()
			.optional(),
		parent_extra: z
			.lazy(() => LineItemResponseSchema)
			.nullable()
			.optional(),
		sides: z.array(z.lazy(() => LineItemResponseSchema)),
		extras: z.array(z.lazy(() => LineItemResponseSchema)),
	})
	.openapi('LineItemResponse');

export type LineItemResponse = z.infer<typeof LineItemResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLineItem', CreateLineItemSchema);
	registry.register('UpdateLineItem', UpdateLineItemSchema);
	registry.register('LineItemResponse', LineItemResponseSchema);
}
