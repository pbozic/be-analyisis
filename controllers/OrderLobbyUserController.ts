import { Response } from 'express';

import OrderLobbyUserDao from '../dao/OrderLobbyUser.js';
import type { ValidatedRequest } from '../types/validatedRequest.js';
import { UpdateOrderLobbyUserLimitRequest } from '../schemas/dto/OrderLobby/index.js';

/**
 * PATCH /order_lobby_user/limit/{order_lobby_users_id}
 * @tag OrderLobbyUser
 * @summary Update order lobby user's spending limit
 * @description Updates the spending limit for a user in an order lobby.
 * @operationId setOrderLobbyUserLimit
 * @pathParam {string} order_lobby_users_id.path.required - The order lobby user ID
 * @bodyContent {UpdateOrderLobbyUserLimitRequest} application/json
 * @bodyRequired
 * @response 200 - Limit updated successfully
 * @responseContent {OrderLobbyUserResponse} 200.application/json
 * @response 400 - Bad request - Invalid or missing parameters
 * @responseContent {object} 400.application/json
 * @response 500 - Error updating limit
 * @responseContent {object} 500.application/json
 * @prisma_model order_lobby_users
 */
async function setOrderLobbyUserLimit(
	req: ValidatedRequest<UpdateOrderLobbyUserLimitRequest, { order_lobby_users_id: string }>,
	res: Response
): Promise<Response> {
	try {
		const { order_lobby_users_id } = req.params;
		const limit = req.body.newLimit;

		// Body validation already done by middleware, but params need validation
		if (!order_lobby_users_id) {
			return res.status(400).json({
				success: false,
				error: 'Order lobby user ID is required',
			});
		}

		const updatedUser = await OrderLobbyUserDao.updateOrderLobbyUserLimit(order_lobby_users_id, limit);

		return res.status(200).json({
			success: true,
			data: updatedUser,
		});
	} catch (error: any) {
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
}

export { setOrderLobbyUserLimit };

export default {
	setOrderLobbyUserLimit,
};
