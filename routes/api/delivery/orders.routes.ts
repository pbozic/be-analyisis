import express from 'express';

import DeliveryOrderController from '../../../controllers/DeliveryOrderController.js';
import { validate } from '../../../middleware/zod.ts';
import {
	StartOrderSchema,
	MerchantAcceptOrderSchema,
	MerchantConfirmOrderReadySchema,
	LocalConfirmMultipleOrdersReadySchema,
	RejectDeliveryOrderSchema,
	UpdateOrderStatusSchema,
	UpdateOrderPickupTimeSchema,
	UpdateOrderDeliveryTimeSchema,
	AcceptDeliveryOrderSchema,
	CancelDeliveryOrderSchema,
	CompleteDeliveryOrderSchema,
	UpdateDeliveryOrderTimelineSchema,
	UpdateDeliveryOrderItemsSchema,
	SetDeliveryImageSchema,
	DispatcherCancelOrderSchema,
	DispatcherRevokeOrderSchema,
	addToDeliveryOrderTimelineSchema,
} from '../../../schemas/dto/DeliveryOrders/deliveryOrder.validators.js';
import { DeliveryOrderCreateRequestSchema } from '../../../schemas/dto/DeliveryOrders/index.ts';

const router = express.Router();

router.get('/today', DeliveryOrderController.getDeliveryOrdersToday);
router.get('/active', DeliveryOrderController.getActiveDeliveryOrders);
router.get('/active/:user_id', DeliveryOrderController.getActiveDeliveryOrdersByUserId);
router.get('/active/business/:business_id/:module', DeliveryOrderController.getActiveDeliveryOrdersByBusinessId);
router.get('/active/driver/:driver_id', DeliveryOrderController.getActiveDeliveryOrdersByDriverId);
router.get('/driver/:driver_id', DeliveryOrderController.getDeliveryOrdersByDriverId);
router.get('/completed/:driver_id', DeliveryOrderController.getCompletedDeliveryOrdersByDriverId);
router.get('/completed/user/:user_id', DeliveryOrderController.getCompletedDeliveryOrdersByUserId);
router.get('/completed/business/:business_id/:module', DeliveryOrderController.getCompletedDeliveryOrdersByBusinessId);
router.get('/order/:order_id', DeliveryOrderController.getOrder);
router.get('/order/user/:order_id', DeliveryOrderController.getUserByDeliveryOrderId);
router.get('/business/:business_id/:module', DeliveryOrderController.getDeliveryOrdersByBusinessId);
router.get('/:daily_meals', DeliveryOrderController.getDeliveryOrders);

router.post('/daily_meals', DeliveryOrderController.startDailyMeals);
router.post('/order', validate(DeliveryOrderCreateRequestSchema), DeliveryOrderController.createOrder);
router.post('/order/start', validate(StartOrderSchema), DeliveryOrderController.startOrder);
router.post('/order/merchant_accept', validate(MerchantAcceptOrderSchema), DeliveryOrderController.merchantAcceptOrder);
router.post(
	'/order/merchant_ready',
	validate(MerchantConfirmOrderReadySchema),
	DeliveryOrderController.merchantConfirmOrderReady
);
router.post(
	'/order/local_ready',
	validate(LocalConfirmMultipleOrdersReadySchema),
	DeliveryOrderController.localConfirmMultipleOrdersReady
);
router.post('/order/reject', validate(RejectDeliveryOrderSchema), DeliveryOrderController.rejectOrder);
router.post(
	'/order/dispatcher_cancel',
	validate(DispatcherCancelOrderSchema),
	DeliveryOrderController.dispatcherCancel
);
router.post(
	'/order/dispatcher_revoke',
	validate(DispatcherRevokeOrderSchema),
	DeliveryOrderController.dispatcherRevoke
);
router.post('/order/status', validate(UpdateOrderStatusSchema), DeliveryOrderController.updateOrderStatus);
router.post('/order/pickup_time', validate(UpdateOrderPickupTimeSchema), DeliveryOrderController.updateOrderPickupTime);
router.post(
	'/order/delivery_time',
	validate(UpdateOrderDeliveryTimeSchema),
	DeliveryOrderController.updateOrderDeliveryTime
);
router.post('/order/accept', validate(AcceptDeliveryOrderSchema), DeliveryOrderController.acceptOrderDelivery);
router.post('/order/cancel_delivery', validate(CancelDeliveryOrderSchema), DeliveryOrderController.cancelOrderDelivery);
router.post('/order/complete', validate(CompleteDeliveryOrderSchema), DeliveryOrderController.completeOrder);
router.post(
	'/timeline',
	validate(UpdateDeliveryOrderTimelineSchema),
	DeliveryOrderController.updateDeliveryOrderTimeline
);
router.post(
	'/add_to_timeline',
	validate(addToDeliveryOrderTimelineSchema),
	DeliveryOrderController.addToDeliveryOrderTimeline
);
router.post(
	'/order/update/items',
	validate(UpdateDeliveryOrderItemsSchema),
	DeliveryOrderController.updateDeliveryOrderItems
);

router.post('/order/:order_id/image', validate(SetDeliveryImageSchema), DeliveryOrderController.setDeliveryImage);

export default router;
