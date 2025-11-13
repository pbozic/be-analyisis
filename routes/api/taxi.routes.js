import express from 'express';

import TaxiOrderController from '../../controllers/TaxiOrderController.js';
import { validate } from '../../middleware/zod.ts';
import {
	CreateTaxiOrderSchema,
	CreateDispatchOrderSchema,
	IdOnlySchema,
	IdAndStatusSchema,
	IdAndDriverSchema,
	UpdateTaxiOrderPreferencesSchema,
	UpdateRouteSchema,
	UpdatePickupLocationSchema,
	UpdateDeliveryLocationSchema,
	UpdateCompleteRouteSchema,
	UpdateTimelineSchema,
	UpdatePaymentSchema,
	TaxiFileBodySchema,
	TaxiPaginationSchema,
} from '../../schemas/dto/Taxi/index.js';
const router = express.Router();
router.get('/', TaxiOrderController.getTaxiOrders);
router.get('/today', TaxiOrderController.getTaxiOrdersToday);
router.get('/order/:order_id', TaxiOrderController.getOrder);
router.get('/order/:order_id/available-drivers', TaxiOrderController.getDriversForOrder);
router.post('/orders/pagination/', validate(TaxiPaginationSchema), TaxiOrderController.getTaxiOrdersWithPagination);
router.get('/orders/completed/:driver_id', TaxiOrderController.getCompletedTaxiOrders);
/**
 *    * @module user
 *
 */
router.get('/orders/completed/user/:user_id', TaxiOrderController.getCompletedTaxiOrdersByUserId);
router.get('/orders/completed/business/:business_id', TaxiOrderController.getCompletedTaxiOrdersByBusinessId);
router.get('/orders/rejected/:driver_id', TaxiOrderController.getRejectedTaxiOrders);
router.get('/orders/canceled/:driver_id', TaxiOrderController.getCanceledTaxiOrders);
/**
 *    * @module user
 *
 */
router.get('/orders/canceled/user/:user_id', TaxiOrderController.getCanceledTaxiOrdersByUserId);
router.get('/orders/active/driver/:driver_id', TaxiOrderController.getActiveTaxiOrdersByDriverId);
/**
 *    * @module user
 *
 */
router.get('/orders/active/me', TaxiOrderController.getMyActiveTaxiOrders);
/**
 *    * @module user
 *
 */
router.get('/orders/active/:user_id/:type', TaxiOrderController.getActiveTaxiOrders);
router.get('/orders/driver/:driver_id', TaxiOrderController.getTaxiOrdersByDriverId);
router.post('/order', validate(CreateTaxiOrderSchema), TaxiOrderController.createOrder);
router.get('/orders/scheduled_orders', TaxiOrderController.getScheduledOrders);
router.get('/orders/scheduled_orders/driver/:driver_id', TaxiOrderController.getAcceptedScheduledOrders);
/**
 *    * @module user
 *
 */
router.get('/orders/scheduled_orders/user/:user_id', TaxiOrderController.getScheduledOrdersByUserId);
router.post('/dispatch-order', validate(CreateDispatchOrderSchema), TaxiOrderController.createDispatchOrder);
router.post('/order/status', validate(IdAndStatusSchema), TaxiOrderController.updateOrderStatus);
router.post('/order/route', validate(UpdateRouteSchema), TaxiOrderController.updateTaxiOrderRoute);
router.post(
	'/order/preferences',
	validate(UpdateTaxiOrderPreferencesSchema),
	TaxiOrderController.updateTaxiOrderPreferences
);
router.post(
	'/order/pickup_location',
	validate(UpdatePickupLocationSchema),
	TaxiOrderController.updateTaxiOrderPickupLocation
);
router.post(
	'/order/delivery_location',
	validate(UpdateDeliveryLocationSchema),
	TaxiOrderController.updateTaxiOrderDeliveryLocation
);
router.post('/order/complete_route', validate(UpdateCompleteRouteSchema), TaxiOrderController.updateCompleteTaxiRoute);
router.post('/order/accept', validate(IdAndDriverSchema), TaxiOrderController.acceptOrder);
router.post('/order/complete', validate(IdOnlySchema), TaxiOrderController.completeOrder);
router.post('/order/cancel', validate(IdAndStatusSchema), TaxiOrderController.cancelOrder);
router.post('/order/timeline', validate(UpdateTimelineSchema), TaxiOrderController.updateTaxiOrderTimeline);
router.post('/order/payment', validate(UpdatePaymentSchema), TaxiOrderController.updateTaxiOrderPayment);
router.post('/order/confirm_wallet', validate(IdOnlySchema), TaxiOrderController.confirmWalletPayment);
router.post('/order/:order_id/signature', validate(TaxiFileBodySchema), TaxiOrderController.uploadTaxiOrderSignature);
router.post('/order/:order_id/photo', validate(TaxiFileBodySchema), TaxiOrderController.uploadTaxiOrderPhoto);
router.post('/order/append_driver', validate(IdAndDriverSchema), TaxiOrderController.appendTaxiDriver);
router.post('/order/reject', validate(IdAndStatusSchema), TaxiOrderController.rejectOrder);
router.post('/grouped_order/cancel', validate(IdOnlySchema), TaxiOrderController.cancelGroupedOrderByParentId);
router.post('/grouped_order/reject', validate(IdAndStatusSchema), TaxiOrderController.rejectGroupedOrderByParentId);
export default router;
