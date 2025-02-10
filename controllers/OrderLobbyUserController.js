const OrderLobbyUserDao = require('../dao/OrderLobbyUsers');

/**
 * PATCH /order_lobby_user/limit/:order_lobby_users_id
 * Update order lobby user's spending limit
 * @param {Object} req - Express request object
 * @param {Object} req.params - Request parameters
 * @param {string} req.params.order_lobby_users_id - ID of the order lobby user
 * @param {Object} req.body - Request body
 * @param {number} req.body.limit - New spending limit value
 * @param {Object} res - Express response object
 * @returns {Promise<Object>} Returns updated user object with 200 status, or error with 400/500 status
 */
async function setOrderLobbyUserLimit(req, res) {
	try {
		const { order_lobby_users_id } = req.params;
		const { limit } = req.body;

		if (!order_lobby_users_id) {
			return res.status(400).json({
				success: false,
				error: 'Order lobby user ID is required'
			});
		}

		if (limit === undefined || limit === null || isNaN(limit)) {
			return res.status(400).json({
				success: false,
				error: 'Valid limit value is required'
			});
		}

		const updatedUser = await OrderLobbyUserDao.updateOrderLobbyUserLimit(order_lobby_users_id, parseFloat(limit));

		return res.status(200).json({
			success: true,
			data: updatedUser
		});

	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
}

module.exports = {
	setOrderLobbyUserLimit
};