import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { DELIVERY_ORDER_STATUS, MODULE, PAYMENT_METHOD } from '@prisma/client';

import { UUID, Timestamp, URL } from '../../primitives.js';
import {
	OrderItemWithAddonsSchema,
	OrderItemUpdateSchema,
	OrderPricingSchema,
	OrderPaymentSchema,
	OrderLocationSchema,
} from './deliveryOrder.dto.js';
import { TimelineEntrySchema } from './deliveryOrder.dto.js';

extendZodWithOpenApi(z);

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
