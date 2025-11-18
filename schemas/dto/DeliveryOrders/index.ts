import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerDeliveryOrderSchemas } from './deliveryOrder.dto.js';
import { registerSchemas as registerDeliveryOrderValidatorSchemas } from './deliveryOrder.validators.js';

// === DeliveryOrder DTOs (Response) ===
export {
	DeliveryOrderBaseSchema,
	DeliveryOrderRefSchema,
	DeliveryOrderDetailSchema,
	type DeliveryOrderBase,
	type DeliveryOrderRef,
	type DeliveryOrderDetail,
	type UpdateDeliveryOrder,
	registerSchemas as registerDeliveryOrderSchemas,
} from './deliveryOrder.dto.js';

// === DeliveryOrder Validators (Request Body, Query, Params) ===
export {
	CreateDeliveryOrderSchema,
	DeliveryOrderCreateRequestSchema,
	CreateDeliveryOrderDaoInputSchema,
	StartOrderSchema,
	AcceptDeliveryOrderSchema,
	RejectDeliveryOrderSchema,
	UpdateOrderStatusSchema,
	CompleteDeliveryOrderSchema,
	CancelDeliveryOrderSchema,
	MerchantAcceptOrderSchema,
	MerchantConfirmOrderReadySchema,
	LocalConfirmMultipleOrdersReadySchema,
	UpdateOrderPickupTimeSchema,
	UpdateOrderDeliveryTimeSchema,
	UpdateDeliveryOrderTimelineSchema,
	addToDeliveryOrderTimelineSchema,
	UpdateDeliveryOrderItemsSchema,
	DispatcherCancelOrderSchema,
	DispatcherRevokeOrderSchema,
	SetDeliveryImageSchema,
	StartDailyMealsSchema,
	type CreateDeliveryOrderInput,
	type DeliveryOrderCreateRequest,
	type CreateDeliveryOrderDaoInput,
	type StartOrderInput,
	type AcceptDeliveryOrderInput,
	type RejectDeliveryOrderInput,
	type UpdateOrderStatusInput,
	type CompleteDeliveryOrderInput,
	type CancelDeliveryOrderInput,
	type MerchantAcceptOrderInput,
	type MerchantConfirmOrderReadyInput,
	type LocalConfirmMultipleOrdersReadyInput,
	type UpdateOrderPickupTimeInput,
	type UpdateOrderDeliveryTimeInput,
	type UpdateDeliveryOrderTimelineInput,
	type AddToDeliveryOrderTimelineInput,
	type UpdateDeliveryOrderItemsInput,
	type DispatcherCancelOrderInput,
	type DispatcherRevokeOrderInput,
	type SetDeliveryImageInput,
	type StartDailyMealsInput,
	registerSchemas as registerDeliveryOrderValidatorSchemas,
} from './deliveryOrder.validators.js';

// === DeliveryOrder Mappers ===
export { toDeliveryOrderDetail, toDeliveryOrderRef } from './deliveryOrder.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerDeliveryOrderSchemas(registry);
	registerDeliveryOrderValidatorSchemas(registry);
}
