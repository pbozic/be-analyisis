const DeliveryOrderDao = require("../dao/DeliveryOrder");
const DeliveryDriverDao = require("../dao/DeliveryDriver");
const DeliveryHelper = require('../lib/deliveryHelpers');

const BusinessDao = require("../dao/Business");
const UsersDao = require("../dao/User");

const { UserSockets, io } = require('../socket');
const stripe = require("../lib/stripe");
const { DELIVERY_ORDER_STATUS } = require("../lib/constants");
const fs = require('fs');
/**
 * GET /delivery/orders/order/{orderId}
 * @tag Delivery
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getOrder
 * @pathParam {integer} orderId - The ID of the delivery order to retrieve
 * @response 200 - Successful operation. Returns order details in the response body.
 * @responseContent {Order} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getOrder(req, res) {
	try {
		let order = await DeliveryOrderDao.getOrder(req.params.order_id);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * GET /delivery/orders/order/user/{order_id}
 * @tag Delivery
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getUserByDeliveryOrderId
 * @pathParam {integer} order_id - The ID of the delivery order to retrieve the customer
 * @response 200 - Successful operation. Returns order customer details in the response body.
 * @responseContent {Order} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */
async function getUserByDeliveryOrderId(req, res) {
	const { order_id } = req.params
	try {
		const user = await DeliveryOrderDao.getUserByDeliveryOrderId(order_id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).send('User not found for this order');
		}
	} catch (error) {
		res.status(500).send('Failed to fetch user data');
	}
}

/**
 * POST /delivery/orders/order
 * @tag Delivery
 * @summary Create a new delivery order.
 * @description This creates a new delivery order with the provided details from the request body. Returns the created order if successful.
 * @operationId createOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {DeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createOrder(req, res) {
	const { orderBody , user_id, return_url } = req.body
	try {
		let orderData = {
			...orderBody,
			status: DELIVERY_ORDER_STATUS.PENDING
		};
		let user_id = req.user.user_id
		let order = await DeliveryOrderDao.createOrder(orderData, user_id);

		let business = await BusinessDao.getBusinessById(orderData.details.business_id);
		let user = await UsersDao.getUserById(user_id);
		let payment_intent;
		console.log("stripeCustomer", user.stripe_customer_id)
		if (order.payment.type == "CARD") {
			payment_intent = await stripe.createPaymentIntentOnBehalf(orderData.details.total_price, orderData.payment.payment_method_id, user.stripe_customer_id, business.stripe_account_id, order.order_id, return_url);
			orderData.payment_intent_id = payment_intent.id;
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				payment_intent_id: payment_intent.id
			});
		}

		//DeliveryHelper.findDeliveryOrderDrivers(order); here we do not need to notify delivery drivers yet, because of the merchant order preparation time

		res.status(200).json({
			...order,
			payment_intent
		});
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/order/accept
 * @tag Delivery
 * @summary Accept a delivery order.
 * @description Accepts delivery order with the provided details from the request body. Returns the accepted order if successful.
 * @operationId acceptOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {DeliveryOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the accepted order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function acceptOrder(req, res) {
	const { order_id, user } = req.body
	try {
		//TODO: check if driver is online
		//TODO: check if order is still pending
		await DeliveryOrderDao.acceptOrder(order_id, user);
		let order = await DeliveryOrderDao.getOrder(order_id, {
			include: {
				delivery_driver: true
			}
		});
		let driver = await DeliveryDriverDao.getDeliveryDriverById(user.driver.delivery_driver_id, {
			include: {
				vehicles: {
					vehicle_specification: true,
				}
			}
		});
		if (order.payment.type === "CARD") {
			const paymentIntent = await stripe.paymentIntents.capture(order.payment_intent_id);
			await DeliveryOrderDao.updateOrderStatus(order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_PENDING);
			io.to("orders_" + order.business_id).emit('order_status_change__delivery', order);
		}
		//TODO: how to handle multiple vehicles on driver -> check which vehicle has its field active, that's it, one active vehicle per delivery driver
		driver.vehicle = driver.vehicles[0];
		order.driver = driver;

		console.log("order accepted", order)

		io.to("order_" + order.order_id).emit('order_accepted__delivery', order);
		io.emit('driver_unavailable', order.delivery_driver_id);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/order/complete
 * @tag Delivery
 * @summary Complete a delivery order.
 * @description Completes a delivery order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.
 * @operationId completeOrder
 * @bodyDescription Request body must include 'order_id'.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the completed order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 */
async function completeOrder(req, res) {
	try {
		let order = await DeliveryOrderDao.completeOrder(req.body.order_id);
		let driver = await DeliveryDriverDao.getDeliveryDriverById(order.delivery_driver_id);

		io.to("order_" + order.order_id).emit('order_completed__delivery', order);
		io.emit('driver_available', driver);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * GET /delivery/orders/complete
 * @tag Delivery
 * @summary Get completed delivery orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedDeliveryOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getCompletedDeliveryOrders(req, res) {
	console.log("get completed orders");
	const { driver_id } = req.params;

	try {
		const completedOrders = await DeliveryOrderDao.getOrders({
			where: {
				status: DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED,
				delivery_driver_id: driver_id
			}});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * GET /delivery/orders/:business_id
 * @tag Delivery
 * @summary Get delivery orders.
 * @description This fetches all restaurant orders.
 * @operationId getDeliveryOrdersByBusinessId
 * @requestBody {business_id} business_id - The ID of the business to retrieve orders for
 * @response 200 - Successful operation. Returns a list of orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getDeliveryOrdersByBusinessId(req, res) {
	const { business_id } = req.params;

	try {
		const orders = await DeliveryOrderDao.getOrders({
			where: {
				business_id: business_id
			}});
		res.status(200).json(orders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/order/status
 * @tag Delivery
 * @summary Update a delivery order's status.
 * @description Updates the status of a specific delivery order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateOrderStatus
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {UpdateOrderStatusRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderStatus(req, res) {
	try {
		let order = await DeliveryOrderDao.updateOrderStatus(req.body.order_id, req.body.status);
		io.to("order_" + order.order_id).emit('order_status_change__delivery', order);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/orders/order/pickup_time
 * @tag Delivery
 * @summary Update a delivery order's pickup time.
 * @description Updates pickup time of the delivery order
 * @operationId updateOrderPickupTime
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {updateOrderPickupTimeRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {DeliveryOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderPickupTime(req, res) {
	const { order_id, pickup_time } = req.body
	try {
		let order = await DeliveryOrderDao.updateOrderPickupTime(order_id, pickup_time);
		io.to("order_" + order.order_id).emit('order_pickup_time', order);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /delivery/order/timeline
 * @tag Taxi
 * @summary Update a delivery order's timeline.
 * @description Updates the timeline of a taxi order.
 * @operationId updateDeliveryOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new 'timeline' details.
 * @bodyContent {updateDeliveryOrderTimelineRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateDeliveryOrderTimeline(req, res) {
	const { order_id, timeline} = req.body

	try {
		let order = await DeliveryOrderDao.updateDeliveryOrderTimeline(order_id, timeline);
		io.to("order_" + order.order_id).emit('order_timeline_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

module.exports = {
	getOrder,
	createOrder,
	acceptOrder,
	completeOrder,
	updateOrderStatus,
	getCompletedDeliveryOrders,
	updateDeliveryOrderTimeline,
	getUserByDeliveryOrderId,
	updateOrderPickupTime,
	getDeliveryOrdersByBusinessId
};