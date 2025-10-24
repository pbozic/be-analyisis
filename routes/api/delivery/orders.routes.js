import express from 'express';

import DeliveryOrderController from '../../../controllers/DeliveryOrderController.js';

const router = express.Router();
router.get('/today', DeliveryOrderController.getDeliveryOrdersToday);
router.get('/active', DeliveryOrderController.getActiveDeliveryOrders);
router.get('/active/:user_id', DeliveryOrderController.getActiveDeliveryOrdersByUserId);
router.get('/active/business/:business_id', DeliveryOrderController.getActiveDeliveryOrdersByBusinessId);
/**
 *    * @module transport
 *
 */
router.get('/active/driver/:driver_id', DeliveryOrderController.getActiveDeliveryOrdersByDriverId);
/**
 *    * @module transport
 *
 */
router.get('/driver/:driver_id', DeliveryOrderController.getDeliveryOrdersByDriverId);
/**
 *    * @module transport
 *
 */
router.get('/completed/:driver_id', DeliveryOrderController.getCompletedDeliveryOrdersByDriverId);
router.get('/completed/user/:user_id', DeliveryOrderController.getCompletedDeliveryOrdersByUserId);
router.get('/completed/business/:business_id', DeliveryOrderController.getCompletedDeliveryOrdersByBusinessId);
router.get('/order/:order_id', DeliveryOrderController.getOrder);
router.get('/order/user/:order_id', DeliveryOrderController.getUserByDeliveryOrderId);
router.get('/business/:business_id', DeliveryOrderController.getDeliveryOrdersByBusinessId);
router.get('/:daily_meals', DeliveryOrderController.getDeliveryOrders);
/**
 *    * @module transport
 *
 */
router.post('/daily_meals', DeliveryOrderController.startDailyMeals);
router.post('/order', DeliveryOrderController.createOrder);
router.post('/order/start', DeliveryOrderController.startOrder);
router.post('/order/merchant_accept', DeliveryOrderController.merchantAcceptOrder);
/**
 *    * @module transport
 *
 */
router.post('/order/merchant_ready', DeliveryOrderController.merchantConfirmOrderReady);
/**
 *    * @module transport
 *
 */
router.post('/order/local_ready', DeliveryOrderController.localConfirmMultipleOrdersReady);
router.post('/order/reject', DeliveryOrderController.rejectOrder);
/**
 *    * @module overwatch
 *
 */
router.post('/order/dispatcher_cancel', DeliveryOrderController.dispatcherCancel);
/**
 *    * @module overwatch
 *
 */
router.post('/order/dispatcher_revoke', DeliveryOrderController.dispatcherRevoke);
router.post('/order/status', DeliveryOrderController.updateOrderStatus);
/**
 *    * @module transport
 *
 */
router.post('/order/pickup_time', DeliveryOrderController.updateOrderPickupTime);
/**
 *    * @module transport
 *
 */
router.post('/order/delivery_time', DeliveryOrderController.updateOrderDeliveryTime);
/**
 *    * @module transport
 *
 */
router.post('/order/accept', DeliveryOrderController.acceptOrderDelivery);
/**
 *    * @module transport
 *
 */
router.post('/order/cancel_delivery', DeliveryOrderController.cancelOrderDelivery);
/**
 *    * @module transport
 *
 */
router.post('/order/complete', DeliveryOrderController.completeOrder);
/**
 *    * @module transport
 *
 */
router.post('/timeline', DeliveryOrderController.updateDeliveryOrderTimeline);
router.post('/add_to_timeline', DeliveryOrderController.addToDeliveryOrderTimeline);
router.post('/order/update/items', DeliveryOrderController.updateDeliveryOrderItems);

export default router;
