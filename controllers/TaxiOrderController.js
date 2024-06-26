const TaxiOrderDao = require("../dao/TaxiOrder");
const DriverDao = require("../dao/Driver");
const { UserSockets, io } = require('../socket');
const TaxiHelper = require('../lib/taxiHelpers');
/**
 * GET /taxi/order/{orderId}
 * @tag Taxi
 * @summary Get order details.
 * @description This fetches the order details using the given order id.
 * @operationId getOrder
 * @pathParam {integer} orderId - The ID of the taxi order to retrieve
 * @response 200 - Successful operation. Returns order details in the response body.
 * @responseContent {Order} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getOrder(req, res) {
	const { order_id } = req.params;

	try {
		const order = await TaxiOrderDao.getOrder(order_id);
		res.status(200).json(order);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * GET /taxi/orders/active/:user_id
 * @tag Taxi
 * @summary Get active taxi orders.
 * @description This fetches all completed orders for a specific user.
 * @operationId getCompletedDeliveryOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getActiveTaxiOrders(req, res) {
	const { user_id } = req.params;

	try {
		const activeOrder = await TaxiOrderDao.getTaxiOrderIfNotCompleted(user_id)
		res.status(200).json(activeOrder);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * GET /taxi/orders/completed
 * @tag Taxi
 * @summary Get completed taxi orders.
 * @description This fetches all completed orders for a specific driver.
 * @operationId getCompletedTaxiOrders
 * @requestBody {DriverId} driverId - The ID of the driver to retrieve completed orders for
 * @response 200 - Successful operation. Returns a list of completed orders in the response body.
 * @responseContent {Order[]} 200.application/json
 * @response 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.
 */

async function getCompletedTaxiOrders(req, res) {
	const { driver_id } = req.params;

	try {
		const completedOrders = await TaxiOrderDao.getOrders({
			where: {
				status: 'TAXI_COMPLETED',
				driver_id: driver_id
			}});
		res.status(200).json(completedOrders);
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order
 * @tag Taxi
 * @summary Create a new taxi order.
 * @description This creates a new taxi order with the provided details from the request body. Returns the created order if successful.
 * @operationId createOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {TaxiOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the newly created order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function createOrder(req, res) {
	try {
		let orderData = {
			...req.body,
			status: "PENDING",
			user_id: req.user.user_id
		};
		let order = await TaxiOrderDao.createOrder(orderData);

		TaxiHelper.findTaxiOrderDrivers(order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/accept
 * @tag Taxi
 * @summary Accept a taxi order.
 * @description Accepts taxi order with the provided details from the request body. Returns the accepted order if successful.
 * @operationId acceptOrder
 * @bodyDescription Request body must include necessary order details.
 * @bodyContent {TaxiOrderRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the accepted order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message "Something went wrong..." if any exception is encountered during execution.
 */
async function acceptOrder(req, res) {
	const { order_id, user } = req.body
	try {
		//TODO: check if driver is online
		//TODO: check if order is still pending
		await TaxiOrderDao.acceptOrder(order_id, user);
		let order = await TaxiOrderDao.getOrder(order_id, {
			include: {
				driver: true
			}
		}); 
		let driver = await DriverDao.getDriverById(user.driver.driver_id, {
			include: {
				vehicles: {
					vehicle_specification: true,
				}
			}
		});
		//TODO: how to handle multiple vehicles on driver
		driver.vehicle = driver.vehicles[0];
		order.driver = driver;
		let userSocket = UserSockets.get(order.user_id);
		console.log("order accepted" ,order)
		if (userSocket) {
			io.to("order_" + order.order_id).emit('order_accepted__taxi', order);
			io.emit('driver_unavailable', order.driver_id);
		}
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/complete
 * @tag Taxi
 * @summary Complete a taxi order.
 * @description Completes a taxi order with the provided order ID from the request body. Returns the completed order if successful and emits a 'driver_available' event.
 * @operationId completeOrder
 * @bodyDescription Request body must include 'order_id'.
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the completed order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Console logs the error message and returns it in the response.
 */
async function completeOrder(req, res) {
	try {
		let order = await TaxiOrderDao.completeOrder(req.body.order_id);
		let driver = await DriverDao.getDriverById(order.driver_id);
		io.emit('driver_available', driver)
		io.to("order_" + order.order_id).emit('order_completed', order);
		io.emit('driver_available', driver);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/status
 * @tag Taxi
 * @summary Update a taxi order's status.
 * @description Updates the status of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateOrderStatus
 * @bodyDescription Request body must include 'order_id' to identify the order and 'status' to specify the new status.
 * @bodyContent {UpdateOrderStatusRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateOrderStatus(req, res) {
	try {
		let order = await TaxiOrderDao.updateOrderStatus(req.body.order_id, req.body.status);
		io.to("order_" + order.order_id).emit('order_status_change__taxi', order);

		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}
/**
 * POST /taxi/order/route
 * @tag Taxi
 * @summary Update a taxi order's route.
 * @description Updates the route of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderRoute
 * @bodyDescription Request body must include 'order_id' and the new 'route' details.
 * @bodyContent {UpdateOrderRouteRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new route in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderRoute(req, res) {
	try {
		let order = await TaxiOrderDao.updateTaxiOderRoute(req.body.order_id, req.body.route);
		io.to("order_" + order.order_id).emit('order_route_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order/pickup_location
 * @tag Taxi
 * @summary Update a taxi order's pickup location.
 * @description Updates the pickup location of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderPickupLocation
 * @bodyDescription Request body must include 'order_id' and the new 'pickup_location' details.
 * @bodyContent {UpdateOrderPickupLocationRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new pickup location in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderPickupLocation(req, res) {
	try {
		let order = await TaxiOrderDao.updateTaxiOrderPickupLocation(req.body.order_id, req.body.pickup_location);
		io.to("order_" + order.order_id).emit('order_pickup_location_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order/delivery_location
 * @tag Taxi
 * @summary Update a taxi order's delivery location.
 * @description Updates the delivery location of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateTaxiOrderDeliveryLocation
 * @bodyDescription Request body must include 'order_id' and the new 'delivery_location' details.
 * @bodyContent {UpdateOrderDeliveryLocationRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new delivery location in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderDeliveryLocation(req, res) {
	try {
		let order = await TaxiOrderDao.updateTaxiOrderDeliveryLocation(req.body.order_id, req.body.delivery_location);
		io.to("order_" + order.order_id).emit('order_delivery_location_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order/complete_route
 * @tag Taxi
 * @summary Update a taxi order's complete route.
 * @description Updates the complete route of a specific taxi order based on the provided details from the request body. Returns the updated order if successful.
 * @operationId updateCompleteTaxiRoute
 * @bodyDescription Request body must include 'order_id', and the new 'route' details.
 * @bodyContent {UpdateCompleteRouteRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new complete route in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateCompleteTaxiRoute(req, res) {
	const { order_id, route} = req.body

	try {
		let order = await TaxiOrderDao.updateCompleteTaxiRoute(order_id, route);
		io.to("order_" + order.order_id).emit('order_complete_route_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order/timeline
 * @tag Taxi
 * @summary Update a taxi order's timeline.
 * @description Updates the timeline of a taxi order.
 * @operationId updateTaxiOrderTimeline
 * @bodyDescription Request body must include 'order_id', and the new 'timeline' details.
 * @bodyContent {UpdateTaxiOrderTimelineRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new timeline in the response body.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderTimeline(req, res) {
	const { order_id, timeline} = req.body

	try {
		let order = await TaxiOrderDao.updateTaxiOrderTimeline(order_id, timeline);
		io.to("order_" + order.order_id).emit('order_timeline_change', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}

/**
 * POST /taxi/order/payment
 * @tag Taxi
 * @summary Update a taxi order's payment details.
 * @description Updates the payment details of the order.
 * @operationId updateTaxiOrderPayment
 * @bodyDescription Request body must include 'order_id', and the new 'route' details.
 * @bodyContent {UpdateTaxiOrderPaymentRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns the updated order with the new payment details.
 * @responseContent {TaxiOrder} 200.application/json
 * @response 500 - Server error. Returns error message if any exception is encountered during execution.
 */
async function updateTaxiOrderPayment(req, res) {
	const { order_id, payment} = req.body

	try {
		let order = await TaxiOrderDao.updateTaxiOrderPayment(order_id, payment);
		io.to("order_" + order.order_id).emit('order_payment_change__taxi', order);
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}


module.exports = {
	getOrder,
	getCompletedTaxiOrders,
	createOrder,
	acceptOrder,
	completeOrder,
	updateOrderStatus,
	updateTaxiOrderRoute,
	updateTaxiOrderPickupLocation,
	updateTaxiOrderDeliveryLocation,
	updateCompleteTaxiRoute,
	updateTaxiOrderPayment,
	updateTaxiOrderTimeline,
	getActiveTaxiOrders
};
