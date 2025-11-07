import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { MODULE, PAYMENT_METHOD } from '@prisma/client';

import { UUID, Timestamp, URL } from '../../primitives.js';
import {
	OrderItemWithAddonsSchema,
	OrderItemUpdateSchema,
	OrderPricingSchema,
	OrderPaymentSchema,
	OrderLocationSchema,
} from '../common/Order.dto.js';
import { TimelineEntrySchema } from '../common/Timeline.dto.js';
extendZodWithOpenApi(z);

// ===== DELIVERY ORDER CREATION =====

/**
 * Used by createOrder function - POST /delivery/orders/order
 * Create a new delivery order with complete order details
 */
export const CreateDeliveryOrderSchema = z
	.object({
		orderBody: z.object({
			business_id: UUID,
			items: z.array(OrderItemWithAddonsSchema),
			delivery_location: OrderLocationSchema,
			pickup_location: OrderLocationSchema.optional(),
			payment: OrderPaymentSchema.extend({
				type: z.nativeEnum(PAYMENT_METHOD),
			}),
			details: OrderPricingSchema.extend({
				notes: z.string().optional(),
			}),
			scheduled: z
				.object({
					date: z.string().optional(),
					time: z.string().optional(),
				})
				.optional(),
			is_daily_meal: z.boolean().optional(),
			module: z.nativeEnum(MODULE),
		}),
		return_url: z.string().url().optional(),
	})
	.openapi({
		title: 'CreateDeliveryOrderRequest',
		description: 'Request body for creating a new delivery order with order details',
	});

/**
 * Used by startOrder function - POST /delivery/orders/order/start
 * Start an order and log promo analytics
 */
export const StartOrderSchema = z
	.object({
		business_id: UUID,
		is_daily_meal: z.boolean(),
	})
	.openapi({
		title: 'StartOrderRequest',
		description: 'Request body for starting an order and logging promo analytics',
	});

// ===== ORDER ACCEPTANCE AND REJECTION =====

/**
 * Used by acceptOrderDelivery function - POST /delivery/orders/order/accept
 * Accept a delivery order by driver or delivery driver
 */
export const AcceptDeliveryOrderSchema = z
	.object({
		order_id: UUID,
	})
	.openapi({
		title: 'AcceptDeliveryOrderRequest',
		description: 'Request body for accepting a delivery order by driver',
	});

/**
 * Used by rejectOrder function - POST /delivery/orders/order/reject
 * Reject a delivery order with reason and optional item updates
 */
export const RejectDeliveryOrderSchema = z
	.object({
		order_id: UUID,
		reason: z.string().min(1),
		items: z.array(OrderItemUpdateSchema.omit({ notes: true, addons: true })).optional(),
	})
	.openapi({
		title: 'RejectDeliveryOrderRequest',
		description: 'Request body for rejecting a delivery order with reason and item updates',
	});

// ===== ORDER STATUS UPDATES =====

/**
 * Used by updateOrderStatus function - POST /delivery/orders/order/status
 * Update delivery order status
 */
export const UpdateOrderStatusSchema = z
	.object({
		order_id: UUID,
		status: z.string().min(1),
	})
	.openapi({
		title: 'UpdateOrderStatusRequest',
		description: 'Request body for updating delivery order status',
	});

/**
 * Used by completeOrder function - POST /delivery/orders/order/complete
 * Complete a delivery order
 */
export const CompleteDeliveryOrderSchema = z
	.object({
		order_id: UUID,
	})
	.openapi({
		title: 'CompleteDeliveryOrderRequest',
		description: 'Request body for completing a delivery order',
	});

/**
 * Used by cancelOrderDelivery function - POST /delivery/orders/order/cancel_delivery
 * Cancel delivery by driver
 */
export const CancelDeliveryOrderSchema = z
	.object({
		order_id: UUID,
	})
	.openapi({
		title: 'CancelDeliveryOrderRequest',
		description: 'Request body for canceling delivery order by driver',
	});

// ===== MERCHANT ORDER MANAGEMENT =====

/**
 * Used by merchantAcceptOrder function - POST /delivery/orders/order/merchant_accept
 * Merchant accepts and processes order payment
 */
export const MerchantAcceptOrderSchema = z
	.object({
		order_id: UUID,
		preparation_time: Timestamp.optional(),
	})
	.openapi({
		title: 'MerchantAcceptOrderRequest',
		description: 'Request body for merchant accepting order with optional preparation time',
	});

/**
 * Used by merchantConfirmOrderReady function - POST /delivery/orders/order/merchant_ready
 * Merchant confirms order is ready for pickup
 */
export const MerchantConfirmOrderReadySchema = z
	.object({
		order_id: UUID,
	})
	.openapi({
		title: 'MerchantConfirmOrderReadyRequest',
		description: 'Request body for merchant confirming order is ready for pickup',
	});

/**
 * Used by localConfirmMultipleOrdersReady function - POST /delivery/orders/order/local_ready
 * LOCAL business confirms multiple orders ready for pickup
 */
export const LocalConfirmMultipleOrdersReadySchema = z
	.object({
		business_local_location_id: UUID,
	})
	.openapi({
		title: 'LocalConfirmMultipleOrdersReadyRequest',
		description: 'Request body for LOCAL business confirming multiple orders ready for pickup',
	});

// ===== TIME UPDATES =====

/**
 * Used by updateOrderPickupTime function - POST /delivery/orders/order/pickup_time
 * Update delivery order pickup time
 */
export const UpdateOrderPickupTimeSchema = z
	.object({
		order_id: UUID,
		pickup_time: Timestamp,
	})
	.openapi({
		title: 'UpdateOrderPickupTimeRequest',
		description: 'Request body for updating delivery order pickup time',
	});

/**
 * Used by updateOrderDeliveryTime function - POST /delivery/orders/order/delivery_time
 * Update delivery order delivery time
 */
export const UpdateOrderDeliveryTimeSchema = z
	.object({
		order_id: UUID,
		delivery_time: Timestamp,
	})
	.openapi({
		title: 'UpdateOrderDeliveryTimeRequest',
		description: 'Request body for updating delivery order delivery time',
	});

/**
 * Used by updateDeliveryOrderTimeline function - POST /delivery/orders/timeline
 * Update delivery order timeline
 */
export const UpdateDeliveryOrderTimelineSchema = z
	.object({
		order_id: UUID,
		timeline: z.array(TimelineEntrySchema),
	})
	.openapi({
		title: 'UpdateDeliveryOrderTimelineRequest',
		description: 'Request body for updating delivery order timeline',
	});

/**
 * Used by addToDeliveryOrderTimeline function - POST /delivery/orders/add_to_timeline
 * Update delivery order timeline
 */
export const addToDeliveryOrderTimelineSchema = z
	.object({
		order_id: UUID,
		timeline: TimelineEntrySchema,
	})
	.openapi({
		title: 'addToDeliveryOrderTimelineRequest',
		description: 'Request body for adding to delivery order timeline',
	});

// ===== ORDER ITEM UPDATES =====

/**
 * Used by updateDeliveryOrderItems function - POST /delivery/orders/order/items
 * Update delivery order items
 */
export const UpdateDeliveryOrderItemsSchema = z
	.object({
		order_id: UUID,
		items: z.array(OrderItemUpdateSchema),
	})
	.openapi({
		title: 'UpdateDeliveryOrderItemsRequest',
		description: 'Request body for updating delivery order items',
	});

// ===== DISPATCHER ACTIONS =====

/**
 * Used by dispatcherCancel function - POST /delivery/orders/order/dispatcher_cancel
 * Dispatcher cancels an order
 */
export const DispatcherCancelOrderSchema = z
	.object({
		order_id: UUID,
		dispatcher_user_id: UUID.optional(),
		reason: z.string().optional(),
	})
	.openapi({
		title: 'DispatcherCancelOrderRequest',
		description: 'Request body for dispatcher canceling an order',
	});

/**
 * Used by dispatcherRevoke function - POST /delivery/orders/order/dispatcher_revoke
 * Dispatcher revokes an order from driver
 */
export const DispatcherRevokeOrderSchema = z
	.object({
		order_id: UUID,
		dispatcher_user_id: UUID.optional(),
		reason: z.string().optional(),
	})
	.openapi({
		title: 'DispatcherRevokeOrderRequest',
		description: 'Request body for dispatcher revoking an order from driver',
	});

// ===== FILE/IMAGE MANAGEMENT =====

/**
 * Used by setDeliveryImage function - POST /delivery/orders/{order_id}/image
 * Set or replace delivery proof image for an order
 */
export const SetDeliveryImageSchema = z
	.object({
		url: URL,
		mime_type: z.string().min(1),
		public: z.boolean().optional(),
	})
	.openapi({
		title: 'SetDeliveryImageRequest',
		description: 'Request body for setting delivery proof image',
	});

// ===== DAILY MEALS =====

/**
 * Used by startDailyMeals function - POST /delivery/orders/daily_meals
 * Start daily meals delivery for subscribed users
 * Note: This function doesn't use request body, it uses authenticated user data
 */
export const StartDailyMealsSchema = z.object({}).openapi({
	title: 'StartDailyMealsRequest',
	description: 'Request body for starting daily meals (uses authenticated user data)',
});

// ===== TYPE EXPORTS =====

export type CreateDeliveryOrderInput = z.infer<typeof CreateDeliveryOrderSchema>;
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
export type UpdateDeliveryOrderItemsInput = z.infer<typeof UpdateDeliveryOrderItemsSchema>;
export type DispatcherCancelOrderInput = z.infer<typeof DispatcherCancelOrderSchema>;
export type DispatcherRevokeOrderInput = z.infer<typeof DispatcherRevokeOrderSchema>;
export type SetDeliveryImageInput = z.infer<typeof SetDeliveryImageSchema>;
export type StartDailyMealsInput = z.infer<typeof StartDailyMealsSchema>;

// ===== OPENAPI REGISTRY =====

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('CreateDeliveryOrder', CreateDeliveryOrderSchema);
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
	registry.register('UpdateDeliveryOrderItems', UpdateDeliveryOrderItemsSchema);
	registry.register('DispatcherCancelOrder', DispatcherCancelOrderSchema);
	registry.register('DispatcherRevokeOrder', DispatcherRevokeOrderSchema);
	registry.register('SetDeliveryImage', SetDeliveryImageSchema);
	registry.register('StartDailyMeals', StartDailyMealsSchema);
}
