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
 * @response 500 - Server error. Returns error message "Error something went wrong.." if any exception is encountered during execution.
 */

async function getOrder(req, res) {
	try {
		let order = await TaxiOrderDao.getOrder(req.params.order_id);
		res.status(200).json(order);
	}
	catch (e) {
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
 * @response 500 - Server error. Returns error message "Something went wrong.." if any exception is encountered during execution.
 */
async function createOrder(req, res) {
	try {
		let orderData = {
			...req.body,
			status: "PENDING",
			user_id: req.user.user_id
		};
		
		let order = await TaxiOrderDao.createOrder(orderData);
		//TODO: select drivers to notify
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
 * @response 500 - Server error. Returns error message "Something went wrong.." if any exception is encountered during execution.
 */
async function acceptOrder(req, res) {
	try {
		//TODO: check if driver is online
		//TODO: check if order is still pending
		await TaxiOrderDao.acceptOrder(req.body.order_id, req.user);
		let order = await TaxiOrderDao.getOrder(req.body.order_id, {
			include: {
				driver: true
			}
		}); 
		let driver = await DriverDao.getDriverById(req.user.driver.driver_id, {
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
			io.to("order_" + order.taxi_order_id).emit('order_accepted', order);
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
		let driver = await TaxiOrderDao.getDriver(order.driver_id);
		io.emit('driver_available', driver);
		io.to("order_" + order.order_id).emit('order_completed', order);
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
		io.to("order_" + order.order_id).emit('order_status_change', order);
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
	updateOrderStatus
};
