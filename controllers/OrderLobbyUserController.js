const OrderLobbyUserDao = require('../dao/OrderLobbyUsers');

/**
 * PATCH /order_lobby_user/limit/{order_lobby_users_id}
 * @tag OrderLobbyUser
 * @summary Update order lobby user's spending limit
 * @description Updates the spending limit for a user in an order lobby.
 * @operationId setOrderLobbyUserLimit
 * @pathParam {string} order_lobby_users_id - The order lobby user ID
 * @bodyContent {object} application/json
 * @response 200 - Limit updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Bad request
 * @response 500 - Error updating limit
 * @prisma_model order_lobby_users
 */
async function setOrderLobbyUserLimit(req, res) {
	try {
		const { order_lobby_users_id } = req.params;
		const { limit } = req.body;

		if (!order_lobby_users_id) {
			return res.status(400).json({
				success: false,
				error: 'Order lobby user ID is required',
			});
		}

		if (limit === undefined || limit === null || isNaN(limit)) {
			return res.status(400).json({
				success: false,
				error: 'Valid limit value is required',
			});
		}

		const updatedUser = await OrderLobbyUserDao.updateOrderLobbyUserLimit(order_lobby_users_id, parseFloat(limit));

		return res.status(200).json({
			success: true,
			data: updatedUser,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

module.exports = {
	setOrderLobbyUserLimit,
};
