const TaxiOrderDao = require("../dao/TaxiOrder");
const { UserSockets } = require('../socket');
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
		let order = await TaxiOrderDao.createOrder(req.body);
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
 * POST /taxi/order/{orderId}/accept
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
		let order = await TaxiOrderDao.acceptOrder(req.params.order_id);
		// 
		let userSocket = UserSockets.get(order.user_id);
		if (userSocket) {
			userSocket.emit('order_accepted', order);
		}
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
	acceptOrder
};
