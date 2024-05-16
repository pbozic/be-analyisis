const TaxiOrderDao = require("../dao/TaxiOrder");
/**
 * POST /auth/login
 * @tag Authentication
 * @summary User login procedure.
 * @description This verifies the user's credentials and responds with an access token and refresh token if successful.
 * @operationId loginUser.
 * @bodyDescription Request body must include email and password for verification.
 * @bodyContent {LoginRequest} application/json
 * @bodyRequired
 * @response 200 - Successful operation. Returns user details along with accessToken and refreshToken in the response body, additionally sets Authorization header with the accessToken.
 * @responseContent {AuthenticatedUser} 200.application/json
 * @responseHeader {string} 200.Authorization - The newly generated access token.
 * @response 400 - Unsuccessful operation. Returns error message "Wrong email / password combination." if the either the email or password (or both) are incorrect.
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
async function createOrder(req, res) {
	try {
		let order = await TaxiOrderDao.createOrder(req.body);
		//TODO: select drivers to notify
		res.status(200).json(order);
	}
	catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
}



module.exports = {
	getOrder,
	createOrder
};
