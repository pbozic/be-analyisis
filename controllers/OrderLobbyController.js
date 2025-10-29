import OrderLobbyDao from '../dao/OrderLobby.js';
import OrderLobbyUserDao from '../dao/OrderLobbyUser.js';
import OrderLobbyItemDao from '../dao/OrderLobbyItem.js';
import UserDao from '../dao/User.js';
import BusinessDao from '../dao/Business.js';
import DocumentDao from '../dao/Document.js';
import socket from '../socket.js';
import OneSignal from '../lib/oneSignal.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import { CalculateOrderLobbyOrderDetails } from '../lib/deliveryHelpers.js';
import DeliveryOrderController from './DeliveryOrderController.js';
import { DOCUMENT_TYPE } from '../lib/constants.js';
import MenuItemDao from '../dao/MenuItem.js';
const { UserSockets, io } = socket;

async function lobbySocketOrNotification(user_id, event, order_lobby) {
	const userSocket = UserSockets.get(user_id);
	if (userSocket) {
		userSocket.emit(event, order_lobby);
	} else {
		const user = await UserDao.getUserById(user_id);
		if (user) {
			const l10nNotification = getLocalisedTexts('USER_NOTIFICATIONS', user);
			const l10nHeading = getLocalisedTexts('HEADING', user);
			let notification_title = '';
			let notification_content = '';
			switch (event) {
				case 'added_to_lobby':
					notification_title = l10nHeading?.lobby_added;
					notification_content = l10nNotification?.lobby_added;
					break;
				case 'removed_from_lobby':
					notification_title = l10nHeading?.lobby_removed;
					notification_content = l10nNotification?.lobby_removed;
					break;
				case 'lobby_completed':
					notification_title = l10nHeading?.lobby_completed;
					notification_content = l10nNotification?.lobby_completed;
					break;
				case 'lobby_canceled':
					notification_title = l10nHeading?.lobby_canceled;
					notification_content = l10nNotification?.lobby_canceled;
					break;
			}
			await OneSignal.sendNotificationToUser(notification_title, notification_content, user_id);
		}
	}
}
async function addUserToLobby(user_id, order_lobby, limit) {
	// create lobby user
	const ol_user = await OrderLobbyUserDao.createOrderLobbyUser(user_id, order_lobby.order_lobbies_id, limit);
	if (ol_user) {
		// emit to socket or send notification
		await lobbySocketOrNotification(ol_user.user_id, 'added_to_lobby', order_lobby);
	}
	return ol_user;
}

async function generateOrderDataFromLobby(orderLobby, paymentMethod, useCredits) {
	const items = await Promise.all(
		orderLobby.order_lobby_items.map(async (item) => {
			return {
				...item.menu_items,
				sides: await MenuItemDao.getMenuItemsByIds(item.sides || []),
				extras: await MenuItemDao.getMenuItemsByIds(item.extras || []),
				quantity: item.quantity,
				comment: item.customer_note || '',
			};
		})
	);

	const restaurant = await BusinessDao.getBusinessById(orderLobby.restaurant_id);

	const restaurantAddress = {
		address: restaurant.address.address,
		coordinates: {
			latitude: restaurant.address.latitude,
			longitude: restaurant.address.longitude,
		},
	};

	const orderRoute = [restaurantAddress, orderLobby.delivery_location];

	const paymentType = paymentMethod.type;
	const order = {
		...orderLobby,
		details: {
			...orderLobby.details,
			type: 'delivery',
			delivery_address: orderLobby.delivery_location,
		},
		delivery_location: orderLobby.delivery_location,
		pickup_location: restaurantAddress,
		allow_credits_usage: useCredits,
	};

	const orderDetails = CalculateOrderLobbyOrderDetails(
		restaurant,
		items,
		order.delivery_location,
		paymentType,
		order
	);

	return {
		items: items,
		payment: paymentMethod,
		details: orderDetails,
		courier_instructions: order.courier_note,
		restaurant_message: order.restaurant_message,
		scheduled: false,
		pickup_location: restaurantAddress,
		delivery_location: order.delivery_location,
		route: orderRoute,
		allow_credits_usage: useCredits,
	};
}
/**
 * POST /order_lobby/create
 * @tag OrderLobby
 * @summary Create a new order lobby
 * @description Creates a new order lobby and assigns users with per-user limits.
 * @operationId createLobby
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Lobby created successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error creating lobby
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 */
async function createLobby(req, res) {
	try {
		const {
			user_limits_map,
			lobby_name,
			lobby_description,
			business_id,
			restaurant_id,
			restaurant_message,
			courier_note,
			delivery_location,
		} = req.body;
		const new_lobby = await OrderLobbyDao.createOrderLobby({
			lobby_name,
			lobby_description,
			business_id: business_id,
			restaurant_id,
			creator_id: req.user.user_id,
			restaurant_message,
			courier_note: courier_note,
			delivery_location: delivery_location,
		});
		const lobby_users = [];
		if (new_lobby) {
			for (const user_id of Object.keys(user_limits_map)) {
				const user = await addUserToLobby(user_id, new_lobby, user_limits_map[user_id]);
				lobby_users.push(user);
			}
		}
		const lobby = {
			...new_lobby,
			order_lobby_users: lobby_users,
			order_lobby_items: [],
		};
		return res.status(200).json({ lobby });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * POST /order_lobby/submit/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Submit the order lobby and generate a delivery order
 * @description Submits an existing order lobby and creates a delivery order.
 * @operationId submitLobby
 * @pathParam {string} order_lobbies_id - The order lobby ID
 * @bodyContent {object} application/json
 * @response 200 - Order created successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error submitting lobby
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model delivery_orders
 */
async function submitLobby(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		const paymentMethod = req.body.paymentMethod;
		const useCredits = req.body.useCredits || false;

		const orderData = await generateOrderDataFromLobby(order_lobby, paymentMethod, useCredits);

		// Generate a delivery order
		const { order, payment_intent } = await DeliveryOrderController.generateOrder(
			orderData,
			order_lobby.creator_id
		);

		await OrderLobbyDao.setOrderLobbyActive(order_lobbies_id, false);
		for (const ol_user of order_lobby.order_lobby_users) {
			await lobbySocketOrNotification(ol_user.user_id, 'lobby_completed', order_lobby);
		}

		res.status(200).json({
			...order,
			payment_intent,
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * PUT /order_lobby/users/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Set the users and their limits for an order lobby
 * @description Adds/removes users and sets updated limits for the lobby.
 * @operationId setLobbyUsersWithLimits
 * @pathParam {string} order_lobbies_id - The order lobby ID
 * @bodyContent {object} application/json
 * @response 200 - Lobby users updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Order lobby not found
 * @response 500 - Error updating lobby users
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 */
async function setLobbyUsersWithLimits(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const { user_limits_map } = req.body;

		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}

		// Check if user existed in lobby, if not notify them
		for (const user_id of Object.keys(user_limits_map)) {
			const lobby_user = order_lobby.order_lobby_users.find((ol_user) => ol_user.user_id === user_id);
			if (!lobby_user) {
				await lobbySocketOrNotification(user_id, 'lobby_completed', order_lobby);
			}
		}

		const result = await OrderLobbyDao.editUsersInOrderLobby(order_lobbies_id, user_limits_map);

		return res.status(200).json({ success: true, data: result });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * PATCH /order_lobby/items/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Set user-specific order lobby items
 * @description Creates, updates, or deletes items for the authenticated user in the lobby.
 * @operationId setUserOrderLobbyItems
 * @pathParam {string} order_lobbies_id - The order lobby ID
 * @bodyContent {object} application/json
 * @response 200 - Lobby items updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Order lobby not found
 * @response 500 - Error updating lobby items
 * @prisma_model order_lobby_items
 */
async function setUserOrderLobbyItems(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const { user_id } = req.user;
		const { items } = req.body;
		const order_lobby_items = await OrderLobbyItemDao.getOrderLobbyItemsByLobbyAndUserId(order_lobbies_id, user_id);
		//delete removed items
		for (const lobby_item of order_lobby_items) {
			const item = items.find((item) => OrderLobbyItemDao.areItemsEqual(item, lobby_item));
			if (!item) {
				await OrderLobbyItemDao.deleteOrderLobbyItem(lobby_item.order_lobby_items_id);
			}
		}
		// Compare with provided items, just update quantity if exists, otherwise create new item.
		for (const item of items) {
			const lobby_item = order_lobby_items.find((ol_item) => OrderLobbyItemDao.areItemsEqual(ol_item, item));
			if (lobby_item) {
				await OrderLobbyItemDao.updateOrderLobbyItemQuantity(lobby_item.order_lobby_items_id, item.quantity);
			} else {
				await OrderLobbyItemDao.createOrderLobbyItem({
					order_lobbies_id,
					user_id,
					menu_item_id: item.menu_item_id,
					sides: item.sides,
					extras: item.extras,
					quantity: item.quantity,
					customer_note: item.customer_note || '',
				});
			}
		}

		let orderLobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!orderLobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		await lobbySocketOrNotification(orderLobby.creator_id, 'lobby_updated', orderLobby);

		return res.status(200).json({ success: true, message: 'Order lobby items updated successfully' });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * DELETE /order_lobby/cancel/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Cancel an order lobby
 * @description Cancels an order lobby and removes all users with their items.
 * @operationId cancelLobby
 * @pathParam {string} order_lobbies_id - The order lobby ID
 * @response 200 - Lobby canceled successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Order lobby not found
 * @response 500 - Error canceling lobby
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model order_lobby_items
 */
async function cancelLobby(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		for (const ol_user of order_lobby.order_lobby_users) {
			const deleted_ol_user = await OrderLobbyUserDao.deleteOrderLobbyUserWithItems(
				ol_user.user_id,
				order_lobbies_id
			);
			if (!deleted_ol_user) {
				return res.status(404).json({
					success: false,
					error: `Failed to delete user ${ol_user.user_id} from lobby ${order_lobbies_id}`,
				});
			}
			await lobbySocketOrNotification(deleted_ol_user.user_id, 'removed_from_lobby', order_lobby);
		}
		await OrderLobbyDao.deleteOrderLobby(order_lobbies_id);
		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * DELETE /order_lobby/delete_user/{order_lobbies_id}/{user_id}
 * @tag OrderLobby
 * @summary Delete a user from an order lobby
 * @description Removes a specific user from the lobby and notifies them.
 * @operationId deleteUserFromLobby
 * @pathParam {string} order_lobbies_id - The order lobby ID
 * @pathParam {string} user_id - The user ID
 * @response 200 - User removed from lobby successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Lobby or user not found
 * @response 500 - Error removing user from lobby
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model order_lobby_items
 */
async function deleteUserFromLobby(req, res) {
	try {
		const { order_lobbies_id, user_id } = req.params;
		// First get the order lobby to verify it exists and for notifications
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		const deleted_ol_user = await OrderLobbyUserDao.deleteOrderLobbyUserWithItems(user_id, order_lobbies_id);
		if (!deleted_ol_user) {
			return res.status(404).json({ success: false, error: 'User not found in this lobby' });
		}
		// Send notification to the user
		await lobbySocketOrNotification(deleted_ol_user.user_id, 'removed_from_lobby', order_lobby);
		const lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		return res.status(200).json({ success: true, lobby: lobby });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}
/**
 * GET /order_lobby/{order_lobbies_id}
 * @tag OrderLobby
 * @summary Get an order lobby by ID
 * @description Retrieves the lobby with users and their profile pictures.
 * @operationId getOrderLobbyById
 * @pathParam {string} order_lobbies_id - The order lobby ID
 * @response 200 - Lobby retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Order lobby not found
 * @response 500 - Error retrieving lobby
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model documents
 * @prisma_model files
 */
async function getOrderLobbyById(req, res) {
	try {
		const { order_lobbies_id } = req.params;
		const order_lobby = await OrderLobbyDao.getOrderLobbyById(order_lobbies_id);
		const updatedUsers = await Promise.all(
			order_lobby.order_lobby_users.map(async (user) => {
				let profile = await DocumentDao.getDocumentsForUserByType(user.user_id, DOCUMENT_TYPE.PROFILE_PICTURE);
				return {
					...user,
					profile_picture: profile[0]?.files[0]?.url,
				};
			})
		);
		order_lobby.order_lobby_users = updatedUsers;
		if (!order_lobby) {
			return res.status(404).json({ success: false, error: 'Order lobby not found' });
		}
		return res.status(200).json(order_lobby);
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
}

/**
 * GET /order_lobby/actives/{business_id}
 * @tag OrderLobby
 * @summary Get active order lobbies by business ID
 * @description Retrieves a list of active order lobbies for a business.
 * @operationId getActiveOrderLobbiesByBusinessId
 * @pathParam {string} business_id - The business ID
 * @response 200 - Active lobbies retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 204 - No active lobbies for business
 * @response 500 - Error retrieving active lobbies
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 * @prisma_model documents
 * @prisma_model files
 */
async function getActiveOrderLobbiesByBusinessId(req, res) {
	try {
		const { business_id } = req.params;
		const orderLobbies = await OrderLobbyDao.getAllActiveOrderLobbiesByBusinessId(business_id);

		if (!orderLobbies || orderLobbies.length === 0) {
			return res.status(204).json([]);
		}

		const updatedLobbies = await Promise.all(
			orderLobbies.map(async (lobby) => {
				const updatedUsers = await Promise.all(
					lobby.order_lobby_users.map(async (user) => {
						let profile = await DocumentDao.getDocumentsForUserByType(
							user.user_id,
							DOCUMENT_TYPE.PROFILE_PICTURE
						);
						return {
							...user,
							profile_picture: profile[0]?.files[0]?.url,
						};
					})
				);
				return { ...lobby, order_lobby_users: updatedUsers };
			})
		);

		return res.status(200).json(updatedLobbies);
	} catch (error) {
		return new Error(error);
	}
}

/**
 * GET /order_lobby/user/{user_id}
 * @tag OrderLobby
 * @summary Get order lobbies for a user
 * @description Retrieves order lobbies where the user participates.
 * @operationId getOrderLobbiesByUserId
 * @pathParam {string} user_id - The user ID
 * @response 200 - Lobbies retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 204 - No lobbies for user
 * @response 500 - Error retrieving lobbies for user
 * @prisma_model order_lobbies
 * @prisma_model order_lobby_users
 */
async function getOrderLobbiesByUserId(req, res) {
	const userId = req.params.user_id;
	try {
		const orderLobbies = await OrderLobbyDao.getOrderLobbiesByUserId(userId);

		if (orderLobbies && orderLobbies.length === 0) {
			return res.status(204).json([]);
		}

		return res.status(200).json(orderLobbies);
	} catch (e) {
		console.error(`Error fetching lobbies for user ${userId}: `, e);
		return res.status(500).json({ success: false, error: e.message });
	}
}

export { createLobby };
export { submitLobby };
export { setLobbyUsersWithLimits };
export { setUserOrderLobbyItems };
export { cancelLobby };
export { deleteUserFromLobby };
export { getOrderLobbyById };
export { getActiveOrderLobbiesByBusinessId };
export { getOrderLobbiesByUserId };
export default {
	createLobby,
	submitLobby,
	setLobbyUsersWithLimits,
	setUserOrderLobbyItems,
	cancelLobby,
	deleteUserFromLobby,
	getOrderLobbyById,
	getActiveOrderLobbiesByBusinessId,
	getOrderLobbiesByUserId,
};
