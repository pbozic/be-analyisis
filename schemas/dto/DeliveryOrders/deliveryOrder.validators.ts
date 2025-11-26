import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DELIVERY_ORDER_STATUS, MODULE, PAYMENT_METHOD } from '@prisma/client';

import { UUID, Timestamp, URL } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Common Order Schemas (moved from common/Order.dto.ts) ===
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
		minimum_order_fee: z.number().min(0).optional(),
		type: z.string().default('delivery'),
		business_id: UUID,
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
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
		timestamp: Timestamp,
		entry_data: z.record(z.any()).optional(),
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

export const DeliveryOrderSentBaseSchema = z
	.object({
		delivery_order_sent_id: UUID,
		order_id: UUID,
		accepted: z.boolean(),
		location: z.record(z.any()),
		timeline: z.array(z.record(z.any())),
		driver_id: UUID.nullable().optional(),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DeliveryOrderSent');

// === Type exports ===
export type DeliveryOrderSentBase = z.infer<typeof DeliveryOrderSentBaseSchema>;
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

// ===== DELIVERY ORDER CREATION =====
export const CreateDeliveryOrderSchema = z
	.object({
		// business_id: UUID,
		items: z.array(OrderItemWithAddonsSchema),
		delivery_location: OrderLocationSchema,
		pickup_location: OrderLocationSchema.optional(),
		payment: OrderPaymentSchema.extend({
			type: z.nativeEnum(PAYMENT_METHOD),
		}),
		details: OrderPricingSchema,
		scheduled_at: Timestamp.nullable().optional(),
		is_daily_meal: z.boolean().optional(),
		module_type: z.nativeEnum(MODULE),
		business_local_location_id: UUID.optional(),
	})
	.openapi('CreateDeliveryOrder');

export const CreateDeliveryOrderRequestSchema = z
	.object({
		orderBody: CreateDeliveryOrderSchema,
		return_url: z.string().url().optional(),
	})
	.openapi('CreateDeliveryOrderRequest');

export const DeliveryOrderCreateRequestSchema = z
	.object({
		user_id: UUID,
		module_id: UUID,
		module_type: z.union([z.literal(MODULE.STORES), z.literal(MODULE.FOOD_DRINKS)]),
		delivery_location: OrderLocationSchema,
		pickup_location: OrderLocationSchema.nullable().optional(),
		// pickup_time: Timestamp.nullable().optional(),
		// delivery_time: Timestamp.nullable().optional(),
		// estimated_delivery_time: Timestamp.nullable().optional(),
		// total_amount: z.number().nullable().optional(),
		// delivery_fee: z.number().nullable().optional(),
		// tip_amount: z.number().nullable().optional(),
		// payment_method: z.string().nullable().optional(),
		payment: OrderPaymentSchema.extend({
			type: z.nativeEnum(PAYMENT_METHOD),
		}),
		details: OrderPricingSchema,
		scheduled_at: Timestamp.nullable().optional(),
		is_daily_meal: z.boolean().optional(),
		// special_instructions: z.string().nullable().optional(),
		// items: z.array(LineItemBaseSchema).min(1),
		items: z.array(OrderItemWithAddonsSchema),
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
		business_local_location_id: UUID.optional(),
	})
	.openapi('DeliveryOrderCreateRequest');

export const CreateDeliveryOrderDaoInputSchema =
	DeliveryOrderCreateRequestSchema.openapi('CreateDeliveryOrderDaoInput');

export const StartOrderSchema = z
	.object({
		business_id: UUID,
		is_daily_meal: z.boolean(),
	})
	.openapi('StartOrderRequest');

// ===== ORDER ACCEPTANCE AND REJECTION =====
export const AcceptDeliveryOrderSchema = z
	.object({
		order_id: UUID,
	})
	.openapi('AcceptDeliveryOrderRequest');

export const RejectDeliveryOrderSchema = z
	.object({
		order_id: UUID,
		reason: z.string().min(1),
		items: z.array(OrderItemUpdateSchema.omit({ notes: true, addons: true })).optional(),
	})
	.openapi('RejectDeliveryOrderRequest');

// ===== ORDER STATUS UPDATES =====
export const UpdateOrderStatusSchema = z
	.object({
		order_id: UUID,
		status: z.nativeEnum(DELIVERY_ORDER_STATUS),
	})
	.openapi('UpdateOrderStatusRequest');

export const CompleteDeliveryOrderSchema = z
	.object({
		order_id: UUID,
	})
	.openapi('CompleteDeliveryOrderRequest');

export const CancelDeliveryOrderSchema = z
	.object({
		order_id: UUID,
	})
	.openapi('CancelDeliveryOrderRequest');

// ===== MERCHANT ORDER MANAGEMENT =====
export const MerchantAcceptOrderSchema = z
	.object({
		order_id: UUID,
		preparation_time: Timestamp.optional(),
	})
	.openapi('MerchantAcceptOrderRequest');

export const MerchantConfirmOrderReadySchema = z
	.object({
		order_id: UUID,
	})
	.openapi('MerchantConfirmOrderReadyRequest');

export const LocalConfirmMultipleOrdersReadySchema = z
	.object({
		business_local_location_id: UUID,
	})
	.openapi('LocalConfirmMultipleOrdersReadyRequest');

// ===== TIME UPDATES =====
export const UpdateOrderPickupTimeSchema = z
	.object({
		order_id: UUID,
		pickup_time: Timestamp,
	})
	.openapi('UpdateOrderPickupTimeRequest');

export const UpdateOrderDeliveryTimeSchema = z
	.object({
		order_id: UUID,
		delivery_time: Timestamp,
	})
	.openapi('UpdateOrderDeliveryTimeRequest');

export const UpdateDeliveryOrderTimelineSchema = z
	.object({
		order_id: UUID,
		timeline: z.array(TimelineEntrySchema),
	})
	.openapi('UpdateDeliveryOrderTimelineRequest');

export const addToDeliveryOrderTimelineSchema = z
	.object({
		order_id: UUID,
		timeline: TimelineEntrySchema,
	})
	.openapi('addToDeliveryOrderTimelineRequest');

// ===== ORDER ITEM UPDATES =====
export const UpdateDeliveryOrderItemsSchema = z
	.object({
		order_id: UUID,
		items: z.array(OrderItemUpdateSchema),
	})
	.openapi('UpdateDeliveryOrderItemsRequest');

// ===== DISPATCHER ACTIONS =====
export const DispatcherCancelOrderSchema = z
	.object({
		order_id: UUID,
		dispatcher_user_id: UUID.optional(),
		reason: z.string().optional(),
	})
	.openapi('DispatcherCancelOrderRequest');

export const DispatcherRevokeOrderSchema = z
	.object({
		order_id: UUID,
		dispatcher_user_id: UUID.optional(),
		reason: z.string().optional(),
	})
	.openapi('DispatcherRevokeOrderRequest');

// ===== FILE/IMAGE MANAGEMENT =====
export const SetDeliveryImageSchema = z
	.object({
		url: URL,
		mime_type: z.string().min(1),
		public: z.boolean().optional(),
	})
	.openapi('SetDeliveryImageRequest');

// ===== TYPE EXPORTS =====
export type CreateDeliveryOrder = z.infer<typeof CreateDeliveryOrderSchema>;
export type CreateDeliveryOrderInput = z.infer<typeof CreateDeliveryOrderRequestSchema>;
export type DeliveryOrderCreateRequest = z.infer<typeof DeliveryOrderCreateRequestSchema>;
export type CreateDeliveryOrderDaoInput = z.infer<typeof CreateDeliveryOrderDaoInputSchema>;
export type StartOrderInput = z.infer<typeof StartOrderSchema>;
export type AcceptDeliveryOrderInput = z.infer<typeof AcceptDeliveryOrderSchema>;
export type RejectDeliveryOrderInput = z.infer<typeof RejectDeliveryOrderSchema>;
export type UpdateOrderStatusInput = z.infer<typeof UpdateOrderStatusSchema>;
export type CompleteDeliveryOrderInput = z.infer<typeof CompleteDeliveryOrderSchema>;
export type CancelDeliveryOrderInput = z.infer<typeof CancelDeliveryOrderSchema>;
export type MerchantAcceptOrderInput = z.infer<typeof MerchantAcceptOrderSchema>;
export type MerchantConfirmOrderReadyInput = z.infer<typeof MerchantConfirmOrderReadySchema>;
export type LocalConfirmMultipleOrdersReadyInput = z.infer<typeof LocalConfirmMultipleOrdersReadySchema>;
export type UpdateOrderPickupTimeInput = z.infer<typeof UpdateOrderPickupTimeSchema>;
export type UpdateOrderDeliveryTimeInput = z.infer<typeof UpdateOrderDeliveryTimeSchema>;
export type UpdateDeliveryOrderTimelineInput = z.infer<typeof UpdateDeliveryOrderTimelineSchema>;
export type AddToDeliveryOrderTimelineInput = z.infer<typeof addToDeliveryOrderTimelineSchema>;
export type UpdateDeliveryOrderItemsInput = z.infer<typeof UpdateDeliveryOrderItemsSchema>;
export type DispatcherCancelOrderInput = z.infer<typeof DispatcherCancelOrderSchema>;
export type DispatcherRevokeOrderInput = z.infer<typeof DispatcherRevokeOrderSchema>;
export type SetDeliveryImageInput = z.infer<typeof SetDeliveryImageSchema>;

// ===== OPENAPI REGISTRY =====
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register common order schemas
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
	registry.register('CreateDeliveryOrder', CreateDeliveryOrderRequestSchema);
	registry.register('DeliveryOrderCreateRequest', DeliveryOrderCreateRequestSchema);
	registry.register('CreateDeliveryOrderDaoInput', CreateDeliveryOrderDaoInputSchema);
	registry.register('StartOrder', StartOrderSchema);
	registry.register('AcceptDeliveryOrder', AcceptDeliveryOrderSchema);
	registry.register('RejectDeliveryOrder', RejectDeliveryOrderSchema);
	registry.register('UpdateOrderStatus', UpdateOrderStatusSchema);
	registry.register('CompleteDeliveryOrder', CompleteDeliveryOrderSchema);
	registry.register('CancelDeliveryOrder', CancelDeliveryOrderSchema);
	registry.register('MerchantAcceptOrder', MerchantAcceptOrderSchema);
	registry.register('MerchantConfirmOrderReady', MerchantConfirmOrderReadySchema);
	registry.register('LocalConfirmMultipleOrdersReady', LocalConfirmMultipleOrdersReadySchema);
	registry.register('UpdateOrderPickupTime', UpdateOrderPickupTimeSchema);
	registry.register('UpdateOrderDeliveryTime', UpdateOrderDeliveryTimeSchema);
	registry.register('UpdateDeliveryOrderTimeline', UpdateDeliveryOrderTimelineSchema);
	registry.register('addToDeliveryOrderTimeline', addToDeliveryOrderTimelineSchema);
	registry.register('UpdateDeliveryOrderItems', UpdateDeliveryOrderItemsSchema);
	registry.register('DispatcherCancelOrder', DispatcherCancelOrderSchema);
	registry.register('DispatcherRevokeOrder', DispatcherRevokeOrderSchema);
	registry.register('SetDeliveryImage', SetDeliveryImageSchema);
}
