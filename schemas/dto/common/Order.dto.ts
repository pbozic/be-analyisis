import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Order Item Patterns ===

// Order Item with addons (used in delivery orders, taxi cargo, etc.)
export const OrderItemSchema = z
	.object({
		menu_item_id: UUID,
		quantity: z.number().min(1),
		price: z.number().min(0),
		is_weighted: z.boolean().optional(),
		notes: z.string().optional(),
	})
	.openapi({
		title: 'OrderItem',
		description: 'Basic order item with menu item, quantity, and price',
	});

// Order Item with addons support
export const OrderItemWithAddonsSchema = OrderItemSchema.extend({
	addons: z
		.array(
			z.object({
				addon_id: UUID,
				quantity: z.number().min(1).optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'OrderItemWithAddons',
	description: 'Order item with optional addons',
});

// Order Item for updates (with availability flag)
export const OrderItemUpdateSchema = OrderItemSchema.extend({
	is_available: z.boolean().optional(),
	addons: z
		.array(
			z.object({
				addon_id: UUID,
				quantity: z.number().min(1).optional(),
			})
		)
		.optional(),
}).openapi({
	title: 'OrderItemUpdate',
	description: 'Order item for updates with availability status',
});

// === Order Pricing ===
export const OrderPricingSchema = z
	.object({
		delivery_cost: z.number().min(0),
		sub_total_price: z.number().min(0),
		total_price: z.number().min(0),
		discount_savings: z.number().min(0).optional(),
		credit_discount: z.number().min(0).optional(),
	})
	.openapi({
		title: 'OrderPricing',
		description: 'Order pricing breakdown with costs and discounts',
	});

// === Order Payment ===
export const OrderPaymentSchema = z
	.object({
		type: z.string().min(1),
		payment_method_id: z.string().optional(),
		price: z.number().min(0).optional(),
		subtype: z.string().optional(),
	})
	.openapi({
		title: 'OrderPayment',
		description: 'Order payment information',
	});

// === Order Location ===
export const OrderLocationSchema = z
	.object({
		address: z.string().min(1),
		coordinates: z.object({
			latitude: z.number(),
			longitude: z.number(),
		}),
	})
	.openapi({
		title: 'OrderLocation',
		description: 'Order location with address and coordinates',
	});

// === Type exports ===
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type OrderItemWithAddons = z.infer<typeof OrderItemWithAddonsSchema>;
export type OrderItemUpdate = z.infer<typeof OrderItemUpdateSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderPayment = z.infer<typeof OrderPaymentSchema>;
export type OrderLocation = z.infer<typeof OrderLocationSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('OrderItem', OrderItemSchema);
	registry.register('OrderItemWithAddons', OrderItemWithAddonsSchema);
	registry.register('OrderItemUpdate', OrderItemUpdateSchema);
	registry.register('OrderPricing', OrderPricingSchema);
	registry.register('OrderPayment', OrderPaymentSchema);
	registry.register('OrderLocation', OrderLocationSchema);
}
