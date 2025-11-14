import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE } from '@prisma/client';

import { Timestamp, UUID } from '../../primitives.js';
import { LineItemDetailSchema } from '../LineItems/index.js';

extendZodWithOpenApi(z);

// === Common Order Schemas (moved from common/Order.dto.ts) ===
// === Order Item Patterns ===
// Minimal Order Ref (shared)
export const OrderRefSchema = z
	.object({
		order_id: UUID,
	})
	.openapi('OrderRef');
export type OrderRef = z.infer<typeof OrderRefSchema>;

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

// === Common Timeline Schemas (moved from common/Timeline.dto.ts) ===
// === Timeline Entry ===
export const TimelineEntrySchema = z
	.object({
		status: z.string().min(1),
		timestamp: Timestamp,
		metadata: z.record(z.any()).optional(),
	})
	.openapi({
		title: 'TimelineEntry',
		description: 'Single timeline entry with status and timestamp',
	});

// === Timeline Update ===
export const TimelineUpdateSchema = z
	.object({
		timeline: z.array(TimelineEntrySchema),
	})
	.openapi({
		title: 'TimelineUpdate',
		description: 'Timeline update with multiple entries',
	});

// === Scheduled Date Time ===
export const ScheduledDateTimeSchema = z
	.object({
		date: z.string().optional(),
		time: z.string().optional(),
		datetime: Timestamp.optional(),
	})
	.openapi({
		title: 'ScheduledDateTime',
		description: 'Scheduled date and time options',
	});

// === Time Update ===
export const TimeUpdateSchema = z
	.object({
		timestamp: Timestamp,
	})
	.openapi({
		title: 'TimeUpdate',
		description: 'Generic timestamp update',
	});

// === Pickup Time Update ===
export const PickupTimeUpdateSchema = z
	.object({
		pickup_time: Timestamp,
	})
	.openapi({
		title: 'PickupTimeUpdate',
		description: 'Pickup time update',
	});

// === Delivery Time Update ===
export const DeliveryTimeUpdateSchema = z
	.object({
		delivery_time: Timestamp,
	})
	.openapi({
		title: 'DeliveryTimeUpdate',
		description: 'Delivery time update',
	});

// === Type exports ===
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type OrderItemWithAddons = z.infer<typeof OrderItemWithAddonsSchema>;
export type OrderItemUpdate = z.infer<typeof OrderItemUpdateSchema>;
export type OrderPricing = z.infer<typeof OrderPricingSchema>;
export type OrderPayment = z.infer<typeof OrderPaymentSchema>;
export type OrderLocation = z.infer<typeof OrderLocationSchema>;
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
export type TimelineUpdate = z.infer<typeof TimelineUpdateSchema>;
export type ScheduledDateTime = z.infer<typeof ScheduledDateTimeSchema>;
export type TimeUpdate = z.infer<typeof TimeUpdateSchema>;
export type PickupTimeUpdate = z.infer<typeof PickupTimeUpdateSchema>;
export type DeliveryTimeUpdate = z.infer<typeof DeliveryTimeUpdateSchema>;

// ===============
// Base Schema (scalars only, no relations)
// ===============
export const DeliveryOrderBaseSchema = z
	.object({
		order_id: UUID,
		user_id: UUID,
		module_id: UUID,
		module_type: z.union([z.literal(MODULE.STORES), z.literal(MODULE.FOOD_DRINKS)]),
		delivery_driver_id: UUID.nullable().optional(),
		driver_id: UUID.nullable().optional(),
		order_number: z.number().optional(),
		status: z.string(),
		details: z.record(z.any()).nullable().optional(),
		timeline: z.array(z.record(z.any())).optional().default([]),
		delivery_address: z.record(z.any()).nullable().optional(),
		pickup_address: z.record(z.any()).nullable().optional(),
		pickup_time: Timestamp.nullable().optional(),
		delivery_time: Timestamp.nullable().optional(),
		estimated_delivery_time: Timestamp.nullable().optional(),
		total_amount: z.number().nullable().optional(),
		delivery_fee: z.number().nullable().optional(),
		tip_amount: z.number().nullable().optional(),
		payment: z.record(z.any()).nullable().optional(),
		payment_method: z.string().nullable().optional(),
		is_daily_meal: z.boolean().optional(),
		special_instructions: z.string().nullable().optional(),
		last_sent_at: Timestamp.nullable().optional(),
		delivery_image: z.string().nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DeliveryOrderBase');

export type DeliveryOrderBase = z.infer<typeof DeliveryOrderBaseSchema>;

// ===============
// Ref Schema (minimal identity for embedding)
// ===============
export const DeliveryOrderRefSchema = z
	.object({
		order_id: UUID,
		order_number: z.number().optional(),
		status: z.string(),
		total_amount: z.number().nullable().optional(),
		created_at: Timestamp.optional(),
	})
	.openapi('DeliveryOrderRef');

export type DeliveryOrderRef = z.infer<typeof DeliveryOrderRefSchema>;

// ===============
// Detail Schema (extends Base with relations)
// ===============
export const DeliveryOrderDetailSchema = DeliveryOrderBaseSchema.extend({
	user: z.record(z.any()).nullable().optional(),
	business: z.record(z.any()).nullable().optional(),
	delivery_driver: z.record(z.any()).nullable().optional(),
	driver: z.record(z.any()).nullable().optional(),
	items: z.array(LineItemDetailSchema).optional(),
}).openapi('DeliveryOrderDetail');

export type DeliveryOrderDetail = z.infer<typeof DeliveryOrderDetailSchema>;
export const UpdateDeliveryOrderSchema = DeliveryOrderBaseSchema.partial()
	.omit({
		order_id: true,
		created_at: true,
	})
	.openapi('UpdateDeliveryOrder');

export type UpdateDeliveryOrder = z.infer<typeof UpdateDeliveryOrderSchema>;
// ===============
// Registry
// ===============
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register common order schemas
	registry.register('OrderRef', OrderRefSchema);
	registry.register('OrderItem', OrderItemSchema);
	registry.register('OrderItemWithAddons', OrderItemWithAddonsSchema);
	registry.register('OrderItemUpdate', OrderItemUpdateSchema);
	registry.register('OrderPricing', OrderPricingSchema);
	registry.register('OrderPayment', OrderPaymentSchema);
	registry.register('OrderLocation', OrderLocationSchema);

	// Register common timeline schemas
	registry.register('TimelineEntry', TimelineEntrySchema);
	registry.register('TimelineUpdate', TimelineUpdateSchema);
	registry.register('ScheduledDateTime', ScheduledDateTimeSchema);
	registry.register('TimeUpdate', TimeUpdateSchema);
	registry.register('PickupTimeUpdate', PickupTimeUpdateSchema);
	registry.register('DeliveryTimeUpdate', DeliveryTimeUpdateSchema);

	// Register delivery order schemas
	registry.register('DeliveryOrderBase', DeliveryOrderBaseSchema);
	registry.register('DeliveryOrderRef', DeliveryOrderRefSchema);
	registry.register('DeliveryOrderDetail', DeliveryOrderDetailSchema);
}
